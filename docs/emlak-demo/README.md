# Cihangir Boss Emlak — 12 İlanlı Portföy Demosu v4

**Proje durumu:** İşletmeye özel bağımsız teklif demosu, henüz işletmenin resmî sitesi değil. Bu sürümde ilk izlenimi güçlendirmek için **12 tamamen TEMSİLİ ilan** vardır. Hepsinin fiyatı, alanı, odaları ve özellikleri uydurma örnek veridir. Kullanılan bölge fotoğrafları ilgili mülklerin fotoğrafları değildir.

**Tamamlananlar:** Kurumsal açık renk tema, responsive tasarım, satılık/kiralık, fiyat ve bölge filtreleri, arama, favoriler, ilan detayları, fotoğraf galerisi, orijinal kalite fotoğraf görüntüleme, Sahibinden resmî portföyüne yönlendirme ve **ofis onaylı ilan dosyası + orijinal fotoğraf eşleştirme/import aracı**.

**Henüz tamamlanmayan dış bağımlılık:** Emlak ofisinin onay verdiği *güncel, eksiksiz ilan dışa aktarımı* ile ilanların *orijinal fotoğraf dosyaları*. Şu an gerçek ilanlar site içine yüklenmiş değildir. 12 örnek kayıt, **DEMO olarak açıkça işaretlenmiştir**. Güncel gerçek ilanlar için Sahibinden mağazasına yönlendirme bulunur. İşletme onayı olmadan bu siteyi resmî site diye yayımlamayın.

## 0) Demo kullanımı

Ana sayfa açıldığında 12 örnek gayrimenkul görünür. **Satılık**, **Kiralık**, **Favoriler**, ilçe/tür/arama ve fiyat sıralamayı deneyebilirsiniz. Karttaki **Detayları Gör** butonu 3 mahalle fotoğrafı içeren galeriyi açar. Bu galeri mülkün kendisine ait gerçek fotoğraf değildir.

`data.js` içindeki `properties` dizisi demo verisini içerir. Yetkili ofis dosyası içe aktarılıp `listings.js` güncellendiğinde `app.js` gerçek veriye öncelik verir ve tüm bu örnek kartları gizler. Böylece gerçek ve demo ilanlar **karışmaz**.

## 1) Siteyi açma

ZIP'i ayıklayıp `index.html` dosyasına çift tıkla. Mobil ve masaüstü görünümleri çalışır. İletişim telefon/WhatsApp numarası ofisçe doğrulanmadığından bilerek boş bırakılmıştır; Instagram/Sahibinden bağlantıları kullanılabilir.

## 2) Ofisten gerekli materyal (asıl veri)

- **Ofisim → İlan Aktarımı → Dosya Oluşturarak Transfer Et** ekranından **tüm aktif ilanları** içeren CSV/JSON/XML dosyası (gerçek dosya yapısı incelenmeli).
- Her ilanın **orijinal, tam çözünürlüklü** fotoğrafları. Tavsiye edilen düzen: `FOTOGRAFLAR/İLAN-NO/01.jpg`, `02.jpg`, `03.jpg` ... veya `FOTOGRAFLAR/İLAN-NO_01.jpg` vb. Dosyalar ofis tarafından kaydedilmiş, yayınlamaya izin verilmiş olmalıdır. Görselin dosyadaki kalitesi neyse sitede o korunur: uygulama yeniden boyutlandırmaz, yeniden sıkıştırmaz, filigran kaldırmaz.
- Ofisin **güncel ilan adedi**. `--expected-count` ile ithal edilen sayı eşleşmezse yayın dosyası oluşturulmaz.
- İşletme sahipliği/fotoğraf yayımlama izni ve iletişim numaralarının doğrulaması.

> **DİKKAT:** Sahibinden mağaza linki tek başına ilan fotoğraflarını eksiksiz ve hukuka uygun indirme izni değildir. Ekim 2026 canlı portföyünü yalnızca eski indeks sonuçlarına dayanarak kopyalamıyoruz.

## 3) Windows: kolay aktarım

`ILANLARI_VE_ORIJINAL_FOTOGRAFLARI_AKTAR.bat` dosyasını çalıştır, sırasıyla veri dosyasının tam yolunu, fotoğraf klasörünü, aktif ilan sayısını ve işletme iznini gir. Başarı durumunda `listings.js` ile `assets/listings/<ilan-no>/` altına **tüm fotoğraflar** yazılır. `index.html` sayfasını yenile. İnternetteki canlı sürüm için **`listings.js` ve `assets/listings` klasörü de** hosting'e yüklenmelidir. Python 3 gerekir.

Geliştirici için eşdeğer komut:

```powershell
py -3 scripts/import_listings.py --input "C:\Belgeler\ilanlar.csv" --photos-dir "C:\Belgeler\FOTOGRAFLAR" --expected-count 21 --require-photos --owner-approved
```

`21` **yalnızca örnektir, güncel gerçek ilan sayısı değildir**. Kesin sayı ofisin canlı hesabından öğrenilmelidir.

İçeri alınan her fotoğrafın SHA-256 özeti dosya içeriğiyle birebir aynı kalır. Galeri en fazla 100 fotoğraf/ilan destekler. Herhangi bir ilanın fotoğrafı yoksa, fiyat/durum/ilçe alanları eksikse veya toplam kayıt sayısı tutmuyorsa aktarımın tamamı hata verir; eksik portföy yayımlanmaz. XML formatı orijinal dışa aktarım şemasına göre uyarlama gerektirebilir.

Örnek CSV (`data/ornek-aktarim.csv`) **sahte test verisidir**, müşteriye yayımlamayın.

## 4) Sahibinden ilanı eklenince kendi kendine güncelleme?

**Şu an etkin değil.** Sahibinden'in resmî politikasında iki yöntem bulunuyor:

1. Mağazanın Ofisim panelinden **dosya ile aktarımı**; güncellemelerin dosyaları oluşabilir ancak bu dosyaların siteye kendi kendine taşındığı anlamına gelmez.
2. Sahibinden'le sözleşmeli ve gerekli ticari/teknik şartlara uygun sağlayıcılar için **API ile aktarım**. Genelde sadece bağlantıyı kopyalayarak entegre edilemez.

Siteye onaylı entegrasyon firmasının **bütün portföyü içeren HTTPS CSV/JSON/XML beslemesi** ve **orijinal görsellere erişilebilen izinli CDN sunucusu** verildiğinde `.github/workflows/sync-authorized-feed.yml` GitHub Actions üzerinden günde iki defa değişiklikleri alacak şekilde hazırlanmıştır. Önce `AUTHORIZED_FEED_URL` ve `AUTHORIZED_IMAGE_HOSTS` repo secrets alanına konmalı (varsa `AUTHORIZED_FEED_TOKEN`). Doğrudan Sahibinden web sayfaları/çerezleri/şifreleri **kullanılmaz**.

Bu entegrasyon yapılmadıkça sitede **anlık otomatik senkron** var diye müşteriyle sözleşme yapmayın. GitHub Actions cron tetikleri tam saat garantisi vermez; bu **periyodik** senkron taslağıdır. Her otomatik besleme tam portföy snapshot'ı sağlamalıdır, aksi halde site eksik ilan gösterebilir.

Kaynaklar:
- [Sahibinden — Kurumsal ilan veri transferi](https://yardim.sahibinden.com/hc/tr/articles/19749005158172-Kurumsal-Emlak-ve-Vas%C4%B1ta-Ma%C4%9Fazalar%C4%B1na-Sunulan-Veri-Transferi-Y%C3%B6ntemleri)
- [Sahibinden — Kurumsal sözleşme](https://www.sahibinden.com/sozlesmeler/kurumsal-hesap-sozlesmesi-24)

## 5) Kalite ve doğruluk politikası

- **Tüm ilan sayısı** kontrolü: `--expected-count`.
- **İlan-görsel eşleştirme**: `İLAN-NO` klasörü ve dosya kimliğiyle.
- **Orijinal çözünürlük**: Kopyalanan fotoğraf baytları değişmez; galeride kırpma yerine `object-fit:contain` ile tam görsel gösterilir. Tarayıcı, ekrana uyacak şekilde görseli ölçekli görüntüleyebilir; “Orijinal fotoğrafı aç” bağlantısından tam dosya açılır.
- **Eksik veride durma**: Hatalı fotoğraf, eksik veri veya ilan sayısı tutarsızlığında hata.
- **Güncellik**: Yalnızca ofis tarafından sağlanan verinin güncelliği kadar doğrudur. Yazılı izin ve resmî entegrasyon olmadan güncel Sahibinden ilanlarını birebir kopyalama iddiası yoktur.
- **KVKK/SEO**: İşletmenin resmî sitesi olarak yayınlanmadan önce hukukî metin, ticari kimlik, telefon, alan adı ve SEO ayarları onaylanmalıdır. Bu önizlemede `noindex` korunmuştur.

## 6) Testler

```powershell
py -3 -m unittest discover -s tests -p "test_*.py"
```

`tests/browser_smoke.py` Playwright/Chromium entegrasyon testidir; geliştirici test ortamında çalıştırılır. Statik sayfa Chrome/Edge ile açılır.

## Canlı sunum sürümü
Fotoğraflar SVG sarmalayıcısı içinde orijinal JPG veri URI olarak gömülmüştür. JPEG baytları değiştirilmediğinden görüntü kalitesi kaybı yoktur. Bu versiyon GitHub Pages için düzenlenmiştir. Resmî ofis sitesi değildir.