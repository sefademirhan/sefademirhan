# Sefa Demirhan — Kişisel Portföy Sitesi

Koyu lacivert ve premium tasarımlı, responsive, bağımsız bir HTML/CSS/JavaScript portföy sitesi.

## İçerik
- Ana sayfa (hero ve teknoloji listesi)
- Kurumsal web sitesi / API & backend / özel yazılım hizmetleri
- Gerçek GitHub projeleri: Stock Management System, E-Commerce API, Authentication API
- Konsept KÖK Kahve sitesine canlı bağlantı (müşteri işi olarak sunulmaz)
- Hakkımda, çalışma süreci
- İletişim: e-posta taslağı oluşturan form (sunucuya veri göndermez)
- Mobil menü, kategori filtreleri, erişilebilir klavye kullanımı, reduced-motion desteği

## Yerelde açma
`index.html` dosyasını çift tıklayın. Veya `python -m http.server 8000` komutuyla yerel sunucu çalıştırın.

## Yayın
Projeyi mevcut `sefademirhan/sefademirhan` GitHub deposunun `docs/portfoy/` klasörüne yükleyin. GitHub Pages `/docs` klasöründen yayın yapıyorsa adres:

https://sefademirhan.github.io/sefademirhan/portfoy/

**Önemli:** Mevcut `docs/index.html` (KÖK Kahve) ve `docs/hizmetler` sayfasına dokunmayın. Bu portföy ayrı klasörde çalışır. Kendi alan adı alınırsa daha sonra projeyi ana dizine taşıyabilir veya farklı bir hosting üzerinde yayınlayabilirsiniz.

## Düzenlenecek alanlar
- `index.html`: İsim, açıklamalar, hizmetler, proje bilgileri, sayfa başlığı, SEO metaları.
- `app.js`: `EMAIL` sabiti. İletişim formu e-posta uygulamasını açar; formun sunucu tarafı yoktur. Mevcut e-posta aynı zamanda `index.html` içindeki e-posta bağlantısında yer alır.
- `styles.css`: `:root` renk değişkenleri.
- E-posta paylaşımı istemiyorsanız hem HTML içindeki mailto bağlantısını hem JS içindeki e-posta adresini değiştirebilirsiniz.
- Projeler GitHub'daki açık kaynak çalışmalarına dayalıdır. Kartlardaki arayüzler **temsili tasarımdır**, gerçek ekran görüntüsü değildir.

## Gizlilik ve kapsam
Harici takip aracı, çerez analitiği veya form veri depolaması bulunmaz. Form yalnızca kullanıcının e-posta uygulamasında bir taslak açar; ziyaretçi göndermeden hiçbir mesaj iletilmez.

Bu site müşterilerle görüşmek için hazırlanmış kişisel bir portföydür. Gerçek müşteri referansı, sayı veya sahte yorum iddiası yer almaz.