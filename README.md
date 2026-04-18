# Anti-Fark Etmez

## Projenin Amacı ve İhtiyaç Analizi
Arkadaş gruplarının en büyük zaman hırsızı olan "Ne yiyelim? - Fark etmez", "Nereye gidelim? - Fark etmez" döngüsünü kırmak amacıyla tasarlanmıştır. Bu proje, sadece rastgele bir seçim aracı değil; kararsızlığı bir aksiyona dönüştüren ve grubun sosyal hafızasını (yapılan/yapılmayan aktiviteler) tutan bir mekanizmadır.

Bu sürüm, projenin **İlk Aşama: Frontend** ayağını temsil etmektedir. Mimari, ileride eklenecek olan Backend ve Database entegrasyonuna tam uyumlu şekilde kurgulanmıştır.

## Neyi, Neden Kullandık? (Teknik Mimari)

Proje geliştirilirken paylaşılan teknik dökümana sadık kalınarak, her klasörün sorumluluk alanı net bir şekilde ayrılmıştır:

- **src/services/ (Gizli Kuryeler):** Veri yönetimini merkeze aldık. Şu an veriler yerel hafızadan çekilse de, asenkron yapısı sayesinde yarın eklenecek gerçek bir Backend entegrasyonu için "kurye" yollarımız şimdiden hazırlandı.
- **src/components/ (Bileşenler):** "LEGO" mantığını benimsedik. Karar kartları ve onay butonları gibi parçalar, projenin her yerinde tekrar kullanılabilir şekilde atomize edildi.
- **src/pages/ (Sayfalar):** Karmaşayı önlemek için bileşenlerin bir araya gelerek oluşturduğu tam ekranları burada topladık. Örneğin; Giriş ekranı ve Geçmiş ekranı ayrı birer 'page' olarak tanımlandı.
- **src/styles/ (Tasarım Ofisi):** Sitenin görsel dili ve kullanıcı deneyimi burada belirlendi. "Makyaj odası" olarak adlandırılan bu bölüm, kodun işlevselliğini şık bir arayüzle buluşturdu.
- **src/assets/ (Depo):** Uygulamanın medya kütüphanesi olarak projenin tüm görsel kaynaklarını burada organize ettik.
- **public/ (Dış Kapı):** Kullanıcıyı karşılayan ilk temas noktası olan ana HTML ve tarayıcı ayarları burada muhafaza edildi.


