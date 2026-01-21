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

T12: Kategorilerin Çekilmesi (Fetch Categories)
Kategorilerin sunucudan çekilerek global state'te saklanması ve kullanıcı arayüzünde dinamik olarak listelenmesi sağlandı.

Global Reducer ve Thunk: Genel verileri yönetmek için globalReducer oluşturuldu ve /categories endpoint'inden veri çeken fetchCategories aksiyonu sisteme dahil edildi.

Header Dropdown Menü: Çekilen kategoriler, Header bileşeninde Kadın ve Erkek olarak iki ayrı sütunda listelenen, hover etkileşimli bir dropdown menüye dönüştürüldü.

En İyi Kategoriler (Top Categories): Ana sayfada, kullanıcı puanına (rating) göre en yüksek 5 kategori, dinamik görseller ve özel bir grid yapısıyla "Top Categories" bölümünde listelendi.

Dinamik Rota Yapısı: Kategori linkleri, SEO dostu ve dinamik filtrelemeye uygun olarak /shop/:gender/:categoryName/:categoryId yapısında kurgulandı.

T13: Ürünleri Getir (Fetch Products)
Mağaza sayfasında listelenecek ürünlerin API üzerinden çekilmesi ve Redux ile yönetilmesi sağlandı.

Redux Eylemi ve Entegrasyon: /products API uç noktasına istek atan fetchProducts thunk eylemi yazıldı. API'den dönen ürün listesi, toplam ürün sayısı ve yükleme durumu (FETCHING, FETCHED, FAILED) productReducer içerisinde saklandı.

Mağaza (Shop) Sayfası Entegrasyonu: ShopPage bileşeni Redux'a bağlandı. Sayfa yüklendiğinde (mount) ürünlerin otomatik olarak çekilmesi sağlandı.

Loading Spinner ve UI: Veriler çekilirken kullanıcının beklediğini anlaması için bir yükleme animasyonu (spinner) eklendi. Çekilen ürünler, görsel, başlık, fiyat ve kategori bilgileriyle birlikte dinamik olarak ürün kartlarına (ProductCard) yansıtıldı.

T14: Ürün Sorgu Parametreleri (Fetch Products Query Parameters) Ürün listeleme sayfasına filtreleme, sıralama ve kategori bazlı sorgulama özellikleri entegre edildi.

Redux ve Parametre Yönetimi: productReducer; kategori, filtre ve sıralama durumlarını yönetecek şekilde güncellendi.
Shop Sayfası ve URL Entegrasyonu: categoryId URL'den dinlenerek state yönetimi sağlandı.
Filtreleme ve Sıralama UI: Arama ve sıralama bileşenleri eklenerek API sorgularına bağlandı.

T15: Ürün Sayfalama (Products Pagination)
Ürün listelemelerinde performans ve kullanıcı deneyimi için sayfalama (pagination) altyapısı kuruldu.

Redux ile Sayfalama Yönetimi: `productReducer` içerisine `limit`, `offset` ve `total` alanları eklendi. Sayfa değişimlerinde `offset` değeri güncellenerek API'den ilgili veri diliminin çekilmesi sağlandı.

UI Entegrasyonu: `ShopPage` bileşenine sayfalama kontrolleri (önceki, sonraki, sayfa numaraları) eklendi. Toplam ürün sayısı ve limit bilgisine göre toplam sayfa sayısı dinamik olarak hesaplandı.

Sorgu Parametreleri: Sayfa değişimleri API isteğine `limit` ve `offset` query parametreleri olarak yansıtıldı.


T16: Ürün Detay Sayfası ve Yönlendirme (Product Detail Page & Routing)
Kullanıcıların seçilen ürünün detaylarını görüntüleyebilmesi için özel bir sayfa ve yönlendirme yapısı geliştirildi.

SEO Dostu URL Yapısı: Ürün detaylarına erişim için `/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId` formatında dinamik ve açıklayıcı bir rota oluşturuldu.

Ürün Detaylarını Getir (Fetch Product): Seçilen ürünün `productId` bilgisi kullanılarak API'den tekil ürün verisini çeken `fetchProduct` thunk aksiyonu yazıldı ve Redux sistemine dahil edildi.

Dinamik UI: `ProductDetailPage` bileşeni, API'den gelen gerçek verilerle (görseller, fiyat, açıklama, stok durumu vb.) beslendi. Yükleme sırasında kullanıcıya loading spinner gösterilmesi sağlandı.

Akıllı Yönlendirme: `ShopPage` üzerindeki ürün kartlarına tıklandığında, kategori ve ürün isminden türetilen slug'lar kullanılarak doğru URL'e yönlendirme yapılması sağlandı.

T17: Alışveriş Sepetine Ürün Ekleme (Add Product to Shopping Cart)
Kullanıcıların ürünleri alışveriş sepetine ekleyebilmesi ve sepet içeriğini yönetebilmesi için kapsamlı bir sepet sistemi geliştirildi.

Redux Sepet Yönetimi: `shoppingCartReducer` içerisine `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_PRODUCT_COUNT` ve `TOGGLE_PRODUCT_CHECK` aksiyonları eklendi. Aynı ürün tekrar eklendiğinde yeni item oluşturulmak yerine mevcut item'ın `count` değeri artırılarak sepet yapısı optimize edildi.

Sepet Dropdown Bileşeni: Header'da sepet ikonuna hover/click yapıldığında açılan `CartDropdown` bileşeni oluşturuldu. Dropdown içerisinde ürün görseli, adı, fiyatı, miktar kontrolleri (+/-), ürün kaldırma ve toplam tutar hesaplama özellikleri eklendi.

Sepet Badge: Header'daki sepet ikonuna, sepetteki toplam ürün sayısını gösteren dinamik bir badge eklendi. Badge, sepete ürün eklendikçe veya çıkarıldıkça otomatik olarak güncelleniyor.

Ürün Detay Sayfası Entegrasyonu: `ProductDetailPage` bileşenine sepete ekleme fonksiyonu entegre edildi. Kullanıcılar ürün detay sayfasındaki sepet ikonuna tıklayarak ürünü sepete ekleyebiliyor.

T18: Alışveriş Sepeti Sayfası (Shopping Cart Page)
Kullanıcıların sepetlerindeki ürünleri detaylı görüntüleyebilecekleri, adet güncelleyip seçim yapabilecekleri sepet sayfası geliştirildi.

Sepet Sayfası ve Rota: `/cart` rotası oluşturularak `ShoppingCartPage` bileşeni eklendi. Kullanıcılar header üzerindeki sepet ikonundan veya dropdown menüsünden bu sayfaya erişebiliyor.

Redux Entegrasyonu ve Fonksiyonlar: `shoppingCart` reducer'ı ile tam entegrasyon sağlandı. Kullanıcılar ürün adetlerini artırıp azaltabiliyor, ürünleri sepetten silebiliyor ve checkbox ile seçim yapabiliyor.

Sipariş Özeti: Seçili ürünlerin toplam tutarı, kargo ücreti ve "150 TL üzeri kargo bedava" kuralına göre dinamik olarak hesaplanan bir özet bölümü (Order Summary) oluşturuldu.

T19: Sipariş Özeti Kutusu (Order Summary Box)
Sipariş özeti kutusunun tasarımı ve işlevselliği, kullanıcı deneyimini artıracak şekilde güncellendi.

Sepeti Onayla Butonları: Özeti kutusunun hem üstüne hem de altına, kullanıcıyı kolayca yönlendirecek "Sepeti Onayla" butonları eklendi.

İndirim Kodu Alanı: Kullanıcıların promusyon kodlarını girebilmesi için "+ İNDİRİM KODU GİR" butonu tasarıma dahil edildi.

Kargo ve Fiyat Gösterimi: Kargo bedelinin 150 TL üzeri alışverişlerde ücretsiz olduğu görsel olarak vurgulandı ve "Satıcı Karşılar" ibaresiyle desteklendi.

T20: Sipariş Oluşturma Sayfası - Adım 1: Adres (Create Order Page - Step 1: Address)
Sipariş oluşturma sürecinin ilk adımı olan adres yönetimi ve seçimi ekranları geliştirildi.

Create Order Sayfası: /order rotası oluşturuldu ve kullanıcı giriş kontrolü (Protected Route) eklendi.

Redux Adres Yönetimi: Kullanıcının kayıtlı adreslerini getirme, yeni adres ekleme, güncelleme ve silme işlemleri için Redux Thunk aksiyonları (fetchAddressList, addAddress, updateAddress, deleteAddress) geliştirildi.

Adres Formu ve Validasyon: react-hook-form kullanılarak il, ilçe, mahalle gibi detayları içeren, validasyon kurallarına sahip dinamik bir adres formu oluşturuldu.

Adres Listeleme ve Seçim: Kayıtlı adreslerin listelenmesi ve sipariş için teslimat adresinin seçilebilmesi sağlandı.

T21: Sipariş Oluşturma Sayfası - Adım 2: Kredi Kartı (Create Order Page - Step 2: Credit Card)
Sipariş sürecinin ikinci adımı olan ödeme yöntemleri ve kredi kartı yönetimi ekranları geliştirildi.

Kart Yönetimi (CRUD) ve Redux: Kullanıcının kayıtlı kredi kartlarını listeleme (GET), yeni kart ekleme (POST), güncelleme (PUT) ve silme (DELETE) işlemleri için Redux Thunk aksiyonları yazılarak `clientActions` dosyasına eklendi. API isteklerinde güvenlik gereği CVV gönderilmeyerek sadece gerekli kart bilgileri işlendi.

Ödeme Arayüzü: `OrderPayment` bileşeni oluşturularak kayıtlı kartların listelenmesi, yeni kart ekleme formunun (`CardForm`) açılıp kapanması ve silme onayı gibi etkileşimler sağlandı.

Form Validasyonu ve Taksit Seçenekleri: Kart ekleme formu, Luhn algoritması, tarih kontrolü ve regex desenleri ile validasyona tabi tutuldu. Seçilen karta göre (mock) taksit seçeneklerinin gösterildiği bir yapı eklendi.

Adım Yönetimi: `CreateOrderPage` üzerinde adres ve ödeme adımları arasında geçiş yapısı (Tab navigation) kurularak sipariş akışı bütünleştirildi.
