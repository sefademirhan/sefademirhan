# KÖK Kahve — Responsive Business Website Demo

Bu proje, hayalî bir kahve dükkânı için hazırlanmış, mobil uyumlu **tek sayfalık tanıtım sitesi demosudur**. Gerçek bir işletmeyi temsil etmez. Sefa Demirhan'ın web tasarım portföyü için hazırlanmıştır.

## GitHub Pages ile yayınlama

Bu demo, [profil reposunun `docs` klasöründe](https://github.com/sefademirhan/sefademirhan/tree/main/docs) yer almaktadır.

Repo yöneticisinin yalnızca bir kez şu ayarı yapması gerekir:

1. [GitHub Pages ayarlarını aç](https://github.com/sefademirhan/sefademirhan/settings/pages).
2. **Build and deployment → Source** bölümünde **Deploy from a branch** seç.
3. **Branch** olarak `main`, **Folder** olarak `/docs` seçip **Save** butonuna bas.
4. GitHub Pages yayımlama işlemi başarıyla bittiğinde ayar sayfasında verilen **Visit site** bağlantısını aç.

> Yayın adresi ancak Pages işlemi başarılı olduktan sonra kullanılmalıdır. GitHub deposundaki dosyaların bulunması, sitenin otomatik olarak internete açıldığı anlamına gelmez.

## Demo özellikleri

- Telefon, tablet ve bilgisayara uyumlu tasarım
- Menü sekmeleri (kahveler, fırından, soğuk içecekler)
- Mobil menü ve sayfa içi navigasyon
- Sık sorulan sorular, işletme hikâyesi ve iletişim alanları
- `config.js` ile değiştirilebilir işletme bilgileri
- Telif hakları açısından dış görsel gerektirmeyen özel SVG illüstrasyonlar
- HTML, CSS ve JavaScript ile çalışır; sunucu veya veritabanı gerektirmez

## Başka işletmeye uyarlama

- `index.html`: İşletme adı, açıklamalar ve sayfa içeriği.
- `styles.css`: Renkler, tipografi ve sayfa düzeni.
- `app.js`: Menüdeki ürünler, açıklamalar ve örnek fiyatlar.
- `config.js`: Adres, e-posta ve WhatsApp numarası.
- `assets/`: Logo/favikon ve illüstrasyonlar.

Telefon ve e-posta alanları boş olduğu sürece iletişim butonları örnek modda çalışır; ziyaretçiye yanlışlıkla gerçek iletişim hizmeti sunulmaz. Mevcut form `mailto:` yöntemiyle e-posta uygulamasını açar, otomatik teslim veya sunucuda kayıt **sağlamaz**.

Bu çalışma bir **portföy örneğidir**. Fiyatlar, çalışma saatleri ve işletme bilgileri kurgusaldır. Ticari kullanımdan önce metinler, görseller, telif izinleri, iletişim bağlantıları, barındırma, KVKK ve gerekli yasal bilgilendirmeler gerçek işletme için düzenlenmelidir.

**Hazırlayan:** [Sefa Demirhan](https://github.com/sefademirhan).
