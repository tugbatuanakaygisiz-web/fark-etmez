import React, { useState, useEffect } from 'react';
import { saveDecision } from '../services/decisionService';

const DecisionCard = ({ title, result }) => {
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  // Yeni sonuç geldiğinde feedback'i sıfırla
  useEffect(() => {
    setFeedbackStatus(null);
    setSaving(false);
  }, [result]);

  const handleFeedback = async (isApproved) => {
    if (saving) return;
    setSaving(true);
    const status = isApproved ? 'approved' : 'rejected';
    await saveDecision({ title, result, status });
    setFeedbackStatus(status);
    setSaving(false);
  };

  return (
    <div className="decision-card" id="decision-card">
      <span className="decision-card__label">{title}</span>
      <div className="decision-card__result" id="decision-result">
        {result || '—'}
      </div>

      {!feedbackStatus ? (
        <div className="decision-card__actions">
          <button
            className="decision-card__btn decision-card__btn--approve"
            onClick={() => handleFeedback(true)}
            disabled={saving}
            id="btn-approve"
          >
            ✅ Yaptık
          </button>
          <button
            className="decision-card__btn decision-card__btn--reject"
            onClick={() => handleFeedback(false)}
            disabled={saving}
            id="btn-reject"
          >
            ❌ Yapmadık
          </button>
        </div>
      ) : (
        <div
          className={`decision-card__feedback decision-card__feedback--${feedbackStatus}`}
          id="decision-feedback"
        >
          {feedbackStatus === 'approved'
            ? '✅ Karar onaylandı ve kaydedildi!'
            : '❌ Karar pas geçildi.'}
        </div>
      )}
    </div>
  );
};

export default DecisionCard;
