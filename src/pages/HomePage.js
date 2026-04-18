import React, { useState } from 'react';
import { fetchRandomDecision } from '../services/decisionService';
import { DecisionCard, LoadingSpinner } from '../components';

const categories = [
  {
    key: 'yemek',
    title: 'Yemek Önerisi',
    emoji: '🥘',
    label: 'Ne Yiyelim?',
    subtitle: 'Rastgele bir lezzet keşfet'
  },
  {
    key: 'mekan',
    title: 'Mekan Önerisi',
    emoji: '📍',
    label: 'Nereye Gidelim?',
    subtitle: 'Bugünün rotası belirlensin'
  },
  {
    key: 'aktivite',
    title: 'Aktivite Önerisi',
    emoji: '🎲',
    label: 'Ne Yapalım?',
    subtitle: 'Sıkıntıya son ver'
  }
];

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState(null);
  const [activeTitle, setActiveTitle] = useState('');

  const handleDecision = async (category) => {
    setLoading(true);
    setDecision(null);
    setActiveTitle(category.title);

    const data = await fetchRandomDecision(category.key);
    setDecision(data.result);
    setLoading(false);
  };

  return (
    <div className="home-page">
      {/* Hero Alanı */}
      <div className="home-hero">
        <div className="home-hero__icon">🎯</div>
        <h1 className="home-hero__title">
          Kararsız mısınız? <span>Biz karar verelim.</span>
        </h1>
        <p className="home-hero__subtitle">
          Bir kategori seçin, gizli kuryemiz 
          size rastgele bir öneri getirsin.
        </p>
      </div>

      {/* Kategori Butonları */}
      <div className="home-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className="category-btn"
            onClick={() => handleDecision(cat)}
            disabled={loading}
            id={`btn-category-${cat.key}`}
          >
            <span className="category-btn__emoji">{cat.emoji}</span>
            <span className="category-btn__info">
              <span className="category-btn__title">{cat.label}</span>
              <span className="category-btn__subtitle">{cat.subtitle}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Sonuç Alanı */}
      <div className="home-result">
        {loading && <LoadingSpinner message="Gizli kurye yolda..." />}
        {!loading && decision && (
          <DecisionCard title={activeTitle} result={decision} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
