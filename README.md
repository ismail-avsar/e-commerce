Bandage E-Commerce Project
Bu proje, bir e-ticaret platformunun kullanıcı arayüzünü (UI) modern web teknolojileriyle geliştirmeyi amaçlayan bir web geliştirme sürecidir.

Proje Geliştirme Süreci
T01: Proje Kurulumu ve Altyapı
Projenin temel iskeleti oluşturulmuş ve geliştirme ortamı hazırlanmıştır.

Vite kullanılarak React projesi başlatıldı.

Tailwind CSS entegrasyonu yapılarak tasarım altyapısı kuruldu.

Proje klasör yapısı (Components, Layouts, Pages, Assets) düzenlendi.

GitHub depo (repository) kurulumu yapılarak versiyon kontrolü sağlandı.

Proje canlıya alındı. [https://e-commerce-two-fawn-25.vercel.app/]

T02: Ana Sayfa ve Layout Geliştirme
Kullanıcının ilk karşılaştığı bileşenler ve ana sayfa yapısı Figma tasarımlarına sadık kalınarak kodlandı.

Header & Footer: Tüm sayfalarda sabit kalacak şekilde global layout olarak tasarlandı.

Responsive Tasarım: Masaüstü ve mobil uyumlu navigasyon menüsü (hamburger menu) eklendi.

Slider & Ürün Kartları: Ana sayfadaki görsel slider yapısı ve tekrar eden ürün kartları için temel bileşenler oluşturuldu.

T03: Mağaza (Shop) Sayfası ve Yönlendirme
Ürünlerin listelendiği mağaza sayfası ve sayfalar arası geçiş dinamikleri eklendi.

React Router: react-router-dom v5 kullanılarak / (Home) ve /shop rotaları aktif edildi.

Kategori Kartları: Üst kısımda 5 adet kategori görseli içeren dinamik yapı kuruldu.

Filtreleme Barı: Görünüm değiştirme (grid/list) ve sıralama seçeneklerini içeren bar tasarlandı.

Ürün Grid Yapısı: Masaüstünde 4'lü, mobilde dikey dizilen ürün listeleme alanı oluşturuldu.

Sayfalama & Markalar: Sayfa altına Pagination (sayfalama) butonları ve marka iş birliği logoları eklendi.

T04: Ürün Detay Sayfası ve Yönlendirme
Bileşen Geliştirme: Figma tasarımlarına uygun Product Detail sayfası, sadece Tailwind CSS ve Flex Layout kullanılarak kodlandı.

Responsive Yapı: Tasarım Mobile First yaklaşımıyla hazırlandı; masaüstü ve mobil görünümleri optimize edildi.

Navigasyon: Ürün kartlarına Link bileşenleri eklenerek Mağaza sayfasından detay sayfasına dinamik geçiş sağlandı.

T05: İletişim (Contact) Sayfası ve Rota Aktivasyonu
Sayfa Tasarımı: Ofis bilgilerini ve görsel içerikleri barındıran İletişim sayfası, T02'de oluşturulan global Header/Footer yapısına entegre edildi.

Görsel Optimizasyon: Arka plan görselleri object-top ve özel gradient filtreler ile metin okunabilirliğini artıracak şekilde düzenlendi.

Yönlendirme: /contact rotası aktif edilerek uygulamanın ana navigasyon menüsü üzerinden erişilebilir hale getirildi.

T06: Ekip (Team) Sayfası ve Bileşen Ayrımı
Sayfa Yapısı: "Meet Our Team" bölümü, hem ana sayfada hem de Hakkımızda (About Us) sayfasında kullanılabilecek modüler bir yapıya kavuşturuldu.

Görsel Düzenleme: Figma tasarımına uygun olarak ekip üyesi görselleri kare formatta ve üstten hizalı (object-top) olacak şekilde ayarlandı.

Layout ve Stil: Flex Layout yapısı kullanılarak mobil ve masaüstü için responsive yerleşim sağlandı; typography ve renkler global temaya uygun hale getirildi.

T07: Hakkımızda (About Us) Sayfası ve Entegrasyon
Sayfa Geliştirme: Hero, İstatistikler, Video, Şirket Logoları ve "Work With Us" bölümlerini içeren kapsamlı About sayfası kodlandı.

Görüntüleme Optimizasyonu: "Work With Us" bölümündeki görselin kesilmemesi için height-auto ve container yapıları kullanılarak responsive iyileştirmeler yapıldı.

Bileşen Entegrasyonu: T06'da hazırlanan Team bileşeni, About sayfasına başarıyla entegre edilerek kod tekrarı önlendi.

T08: Kullanıcı Kayıt (Sign Up) Sayfası ve API Entegrasyonu Kullanıcıların sisteme kayıt olabilmesi için gerekli API bağlantıları yapıldı ve detaylı validasyon kurallarına sahip dinamik bir form sayfası geliştirildi.

Form Altyapısı ve Validasyon: React Hook Form ve Axios entegrasyonu ile /signup sayfasında çalışan; İsim, E-posta, Şifre ve Rol seçimi alanlarını içeren güvenli bir form yapısı oluşturuldu.

Rol Bazlı Dinamik Alanlar: Kullanıcının seçtiği role (Müşteri, Mağaza) göre formun içeriği dinamik hale getirildi. Mağaza rolü seçildiğinde; Mağaza Adı, Vergi No (desen kontrolü) ve IBAN gibi ek alanların koşullu olarak görüntülenmesi ve doğrulanması sağlandı.

Kullanıcı Deneyimi: Form gönderimi sırasında buton üzerinde yükleniyor (spinner) animasyonu, başarılı kayıt sonrası önceki sayfaya yönlendirme ve hata durumlarında anlık geri bildirim mekanizmaları eklendi.

T09: Redux Kurulumu ve Store Yapılandırması
Global durum yönetimi için Redux kütüphanesi projeye dahil edildi; asenkron işlemler ve loglama özellikleri ile desteklenen merkezi bir veri yönetim yapısı oluşturuldu.

Store ve Middleware Entegrasyonu: Uygulamanın tüm state'ini yönetecek store yapısı kurularak; API istekleri için redux-thunk ve geliştirme sürecini kolaylaştırmak için redux-logger middleware'leri eklendi.

Modüler Reducer Mimarisi: İstemci (Client), Ürün (Product) ve Alışveriş Sepeti (ShoppingCart) verilerini yönetmek üzere ayrıştırılmış reducer'lar oluşturuldu ve ana reducer altında birleştirildi.

Action ve Thunk Yapısı: State değişikliklerini tetikleyecek action creator fonksiyonları tanımlandı ve rollerin API'den çekilmesi gibi asenkron işlemler için thunk aksiyonları yazılarak sisteme dahil edildi.

T10: Giriş Formu ve Kimlik Doğrulama
Kullanıcıların sisteme güvenli bir şekilde giriş yapabilmesi için gerekli arayüz ve altyapı geliştirmeleri tamamlandı.

Giriş Sayfası ve Validasyon: react-hook-form kullanılarak e-posta ve şifre kontrolü yapan, hataları anlık gösteren kullanıcı dostu bir giriş formu (LoginPage) oluşturuldu.

Redux ile Oturum Yönetimi: /login servisine istek atan thunk aksiyonu yazıldı; başarılı girişte kullanıcı bilgileri global state'e, token bilgisi ise "Beni Hatırla" seçeneğine bağlı olarak localStorage'a kaydedildi.

Gravatar Entegrasyonu: Kullanıcı profil resimleri için e-posta adresi MD5 ile hashlenerek Gravatar servisinden dinamik olarak çekildi.


T11: Otomatik Giriş (Auto Login)
Kullanıcı deneyimini iyileştirmek ve oturum sürekliliğini sağlamak için token tabanlı otomatik giriş mekanizması geliştirildi.

Token Doğrulama: Uygulama her açıldığında (App mount), localStorage'da kayıtlı bir token varsa API'nin /verify endpoint'ine istek atılarak doğruluğu kontrol edildi.
Güvenli Oturum Yönetimi: Token geçerliyse kullanıcı bilgileri Redux store'a aktarıldı ve oturum otomatik olarak başlatıldı; geçersizse token temizlenerek güvenlik sağlandı.
Beni Hatırla Entegrasyonu: Giriş sırasında "Beni Hatırla" seçeneği işaretlenirse token kalıcı olarak localStorage'a, aksi takdirde sadece oturum süresince kullanılmak üzere belleğe alındı.
Axios Interceptor: Tüm isteklerde Authorization header'ının otomatik eklenmesi ve 401 hatalarında oturumun sonlandırılması için merkezi bir yapı kuruldu.