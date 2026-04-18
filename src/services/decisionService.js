/**
 * decisionService.js — Gizli Kurye 🕵️
 *
 * Karar verici mantığını ve localStorage entegrasyonunu barındırır.
 * 800ms gecikmeyle "sunucu simülasyonu" yapar.
 */

// ── Karar Seçenekleri Havuzu ──
const options = {
  yemek: [
    'Sushi 🍣', 'Hamburger 🍔', 'Pizza 🍕', 'Kebap 🥩',
    'Ev Yemeği 🍲', 'Makarna 🍝', 'Taco 🌮', 'Ramen 🍜',
    'Waffle 🧇', 'Pide 🫓', 'Lahmacun 🫓', 'Çiğ Köfte 🌯'
  ],
  mekan: [
    'Dart Kafe 🎯', 'Sahil 🏖️', 'Teras Bar 🍹', 'Oyun Salonu 🕹️',
    'Kitap Kafe 📚', 'Sinema 🎬', 'Piknik Alanı 🌳', 'Bowling 🎳',
    'Müze 🏛️', 'Açık Hava Konseri 🎤', 'Kapalıçarşı 🛍️'
  ],
  aktivite: [
    'Parkta Yürüyüş 🚶', 'Kutu Oyunu 🎲', 'Bowling 🎳',
    'Konsol Oyunu 🎮', 'Bisiklet Turu 🚴', 'Film Gecesi 🎥',
    'Karaoke 🎤', 'Paintball 🔫', 'Escape Room 🔐',
    'Mini Golf ⛳', 'Go-Kart 🏎️', 'Masa Tenisi 🏓'
  ]
};

/**
 * Belirli bir kategoriden rastgele bir sonuç getirir.
 * @param {string} category — 'yemek' | 'mekan' | 'aktivite'
 * @returns {Promise<{category: string, result: string}>}
 */
export const fetchRandomDecision = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pool = options[category] || [];
      const result = pool[Math.floor(Math.random() * pool.length)] || 'Bilinmeyen';
      resolve({ category, result });
    }, 800); // 800ms gizli kurye gecikmesi
  });
};

/**
 * Bir kararı localStorage'a kaydeder.
 * @param {{ title: string, result: string, status: 'approved'|'rejected' }} decision
 */
export const saveDecision = (decision) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const history = JSON.parse(localStorage.getItem('antiFarkHistory') || '[]');
      history.push({
        id: Date.now(),
        title: decision.title,
        result: decision.result,
        status: decision.status,
        date: new Date().toLocaleString('tr-TR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      });
      localStorage.setItem('antiFarkHistory', JSON.stringify(history));
      resolve(true);
    }, 300);
  });
};

/**
 * localStorage'dan karar geçmişini çeker (yeniden eskiye).
 * @returns {Promise<Array>}
 */
export const getDecisionHistory = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const history = JSON.parse(localStorage.getItem('antiFarkHistory') || '[]');
      resolve([...history].reverse());
    }, 400);
  });
};

/**
 * Tüm karar geçmişini temizler.
 */
export const clearDecisionHistory = () => {
  localStorage.removeItem('antiFarkHistory');
};
