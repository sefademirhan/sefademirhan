# KÖK Kahve — İşletme Tanıtım Sitesi (Demo)

Bu çalışma, Sefa Demirhan tarafından müşteri portföyü için hazırlanmış, **hayalî bir kahve dükkânını** tanıtan, mobil uyumlu tek sayfalık statik web sitesidir. Gerçek bir işletmeyi temsil etmez.

## Nasıl açılır?

1. `kok-kahve-demo.zip` arşivini aç.
2. `kok-kahve-demo` klasörünün içinde `index.html` dosyasına çift tıkla.
3. Tarayıcıda çalışır; .NET, SQL veya kurulum gerekmez.

Alternatif olarak klasörde PowerShell açıp `python -m http.server 8000` yazabilir, sonra `http://localhost:8000` adresine girebilirsin (Python kuruluysa).

## Neler var?

- Masaüstü / tablet / telefon uyumlu özgün tasarım
- Mobil açılır menü ve sayfa içi navigasyon
- Üç farklı menü kategorisi (Kahveler / Fırından / Soğuklar)
- Etkileşimli sık sorulan sorular bölümü
- İşletme hikâyesi, hizmet avantajları ve mekân bölümü
- İletişim formu alan kontrolü (e-posta uygulamasıyla gönderim)
- Numara tanımlanınca çalışan WhatsApp bağlantısı
- SEO başlığı, açıklaması, favicon, erişilebilir temel HTML
- İki adet projeye özel, bağımsız SVG illüstrasyonu

## İşletmeye uyarlama

**Hızlı iletişim ayarları:** `config.js` dosyasını Not Defteri veya VS Code ile açıp `address`, `email`, `whatsappNumber` alanlarını değiştir. WhatsApp numarasını ülke koduyla, `+` işareti olmadan yaz (örnek `905551112233`). **Gerçek numara girilmeden demo sayfası kimseye mesaj göndermez.** Form, tanımlanan e-posta adresine bilgisayardaki e-posta uygulaması üzerinden mesaj hazırlayacaktır. Bir sunucuya veri kaydetmez.

**İşletme adı, menü ve renkler:** `index.html` içindeki KÖK Kahve metinlerini, `app.js` içindeki `menu` listesini ve `styles.css` içindeki `:root` renklerini düzenle. Favicon `assets/favicon.svg` dosyasında.

**Resimler:** `assets/hero-coffee.svg` ve `assets/space.svg`, telif hakkı açısından üçüncü taraf fotoğraf gerektirmeyen, bu demo için hazırlanan vektör illüstrasyonlardır. Gerçek müşteriye teslim ederken kendi fotoğraflarıyla değiştirilebilir.

## Gerçek müşteri projesinde önerilenler

- Alan adı ve güvenilir HTTPS hosting
- İşletmenin gerçek metinleri, fiyatları, logosu ve fotoğrafları
- KVKK uyumlu gizlilik/metinler ve eğer veri toplanacaksa gerekli izinler
- Gerçek form teslimatı için güvenli sunucu veya onaylı form servisi, spam koruması
- Canlıya almadan önce tarayıcı, telefon ve kullanılabilirlik testleri

## Sınırlamalar

Bu **satışta kullanılabilecek tasarım örneği**, henüz bir müşteri yayını değildir. Sahte yorumlar, rezervasyon işlemi ve ödeme sistemi yoktur. İletişim adresleri boşsa gönderim yapılmaz. Menü fiyatları ve işletme bilgileri kurgusaldır. İletişim formu `mailto:` yöntemiyle çalışır; e-posta istemcisi kurulu değilse otomatik gönderim yapmaz.

Geliştiren: [Sefa Demirhan](https://github.com/sefademirhan).