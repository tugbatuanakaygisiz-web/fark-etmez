import React, { useEffect, useState } from 'react';
import { getDecisionHistory, clearDecisionHistory } from '../services/decisionService';
import { LoadingSpinner } from '../components';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getDecisionHistory();
      setHistory(data);
      setLoading(false);
    };
    fetchHistory();
  }, []);

  const handleClear = () => {
    clearDecisionHistory();
    setHistory([]);
  };

  if (loading) return <LoadingSpinner message="Geçmiş yükleniyor..." />;

  const approvedCount = history.filter(r => r.status === 'approved').length;
  const rejectedCount = history.filter(r => r.status === 'rejected').length;

  return (
    <div className="history-page">
      {/* Başlık */}
      <div className="history-header">
        <h1 className="history-header__title">Karar Geçmişi</h1>
        <p className="history-header__subtitle">
          Grubun önceki kararları ve durumları
        </p>
        {history.length > 0 && (
          <div className="history-header__count" id="history-count">
            📊 {history.length} karar — {approvedCount} onay, {rejectedCount} red
          </div>
        )}
      </div>

      {/* Liste */}
      {history.length === 0 ? (
        <div className="history-empty">
          <div className="history-empty__icon">📭</div>
          <h3 className="history-empty__title">Henüz karar yok</h3>
          <p className="history-empty__text">
            Ana sayfadan bir kategori seçip karar verin, 
            burada kronolojik olarak listelenecek.
          </p>
        </div>
      ) : (
        <>
          <div className="history-list" id="history-list">
            {history.map((record, index) => (
              <div
                key={record.id}
                className="history-item"
                style={{ animationDelay: `${index * 0.05}s` }}
                id={`history-item-${record.id}`}
              >
                <div
                  className={`history-item__status-icon history-item__status-icon--${record.status}`}
                >
                  {record.status === 'approved' ? '✅' : '❌'}
                </div>
                <div className="history-item__content">
                  <div className="history-item__category">{record.title}</div>
                  <div className="history-item__result">{record.result}</div>
                </div>
                <div className="history-item__date">{record.date}</div>
              </div>
            ))}
          </div>

          <button
            className="history-clear-btn"
            onClick={handleClear}
            id="btn-clear-history"
          >
            🗑️ Geçmişi Temizle
          </button>
        </>
      )}
    </div>
  );
};

export default HistoryPage;
