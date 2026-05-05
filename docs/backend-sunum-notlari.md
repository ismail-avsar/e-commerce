# Backend Sunum Notları

Bu notlar, backend tarafında ne yaptığımızı kısa ve anlaşılır şekilde anlatmak için hazırlandı. Amaç kodu satır satır anlatmak değil; projenin mantığını, paketlerin görevini ve veritabanı ilişkilerini açıklayabilmek.

## 1. Projenin Amacı

Bu projede frontend tarafı zaten hazırdı. Bizim backend tarafındaki amacımız, frontend'in ihtiyaç duyduğu e-commerce API'lerini Spring Boot ile yazmaktı.

Backend tarafında kullanıcı, rol, mağaza, kategori, ürün, ürün görselleri, adres, kredi kartı ve sipariş verilerini PostgreSQL veritabanında tuttuk. Frontend issue'larında istenen endpoint ve JSON formatlarına mümkün olduğunca sadık kaldık.

Kısaca backend şu işleri yapıyor:

- Ürünleri ve kategorileri frontend'e verir.
- Kullanıcı kayıt ve giriş işlemlerini yapar.
- JWT token ile oturum kontrolü sağlar.
- Kullanıcı adres ve kart bilgilerini yönetir.
- Sipariş oluşturur ve geçmiş siparişleri listeler.

## 2. Genel Backend Akışı

Backend'de isteklerin genel akışı şu şekildedir:

```text
Frontend -> Controller -> Service -> Repository -> Database
                                      |
                                      v
Frontend <- DTO Response <- Service <- Repository
```

Yani frontend bir istek gönderir. Bu isteği önce controller karşılar. Controller, işi service katmanına verir. Service, gerekli iş kurallarını uygular ve repository üzerinden veritabanına ulaşır. Sonuç frontend'e DTO dediğimiz temiz response objeleriyle döner.

Bu yapıyı kullanmamızın sebebi kodu düzenli tutmaktır. Her dosya her işi yapmaz; her paketin belli bir sorumluluğu vardır.

## 3. Paketler Ne İşe Yarıyor?

### `controller`

Controller paketi API kapısı gibidir. Dışarıdan gelen HTTP isteklerini karşılar.

Örneğin:

- `GET /products`
- `POST /login`
- `GET /order`
- `POST /user/address`

Controller'ın görevi işi yapmak değil, doğru service metoduna yönlendirmektir.

### `service`

Service paketi iş kurallarının olduğu yerdir.

Örneğin:

- Login doğru mu?
- Şifre doğruysa token üret.
- Ürünleri filtrele, sırala, sayfala.
- Sipariş oluştururken ürünleri bul ve toplam fiyatı hesapla.

Controller sade kalır, asıl mantık service içinde olur.

### `repository`

Repository paketi veritabanıyla konuşur. Spring Data JPA sayesinde çoğu SQL sorgusunu elle yazmadan veritabanı işlemleri yapabildik.

Örneğin `ProductRepository`, ürün tablosundan ürünleri getirir. `AppUserRepository`, kullanıcıyı email'e göre bulur.

### `entity`

Entity paketi veritabanı tablolarının Java karşılığıdır.

Örneğin:

- `AppUser` -> `users` tablosu
- `Product` -> `products` tablosu
- `CustomerOrder` -> `orders` tablosu
- `OrderItem` -> siparişteki ürün satırları

Entity'ler veritabanı yapısını temsil eder.

### `dto`

DTO, frontend'e giden veya frontend'den gelen veri şeklidir.

Entity'yi direkt frontend'e göndermedik. Çünkü entity içinde şifre, ilişkiler veya frontend'in görmemesi gereken alanlar olabilir. DTO ile sadece gerekli alanları kontrollü şekilde gönderdik.

Örneğin ürün response'unda frontend şunu bekliyordu:

```json
{
  "id": 1,
  "name": "Gri Regular Astar",
  "price": 461.99,
  "images": [
    {
      "url": "http://localhost:8080/images/products/product-1.jpg",
      "index": 0
    }
  ]
}
```

Bu formatı DTO'lar ile kontrol ettik.

### `security`

Security paketi JWT token işlemlerini yapar.

- Kullanıcı login olunca token üretilir.
- Frontend sonraki isteklerde token'ı `Authorization` header'ında gönderir.
- Backend gelen token'ı doğrular.
- Token geçerliyse kullanıcıyı sisteme giriş yapmış kabul eder.

Bu projede issue gereği `Bearer` prefix kullanmadık. Header değeri direkt token olarak gönderildi.

### `config`

Config paketi uygulama ayarlarını içerir.

Örneğin:

- Hangi endpoint public olacak?
- Hangi endpoint token isteyecek?
- Başlangıçta örnek roller, kullanıcılar, ürünler oluşturulsun mu?

Seed data sayesinde uygulama ilk açıldığında test için gerekli temel veriler hazırlandı.

### `exception`

Exception paketi hata yönetimi içindir.

Bir hata olduğunda frontend'e karışık Java hatası dönmek yerine düzenli JSON cevap dönmemizi sağlar.

Örneğin:

```json
{
  "status": 404,
  "message": "Product not found"
}
```

## 4. Veritabanı İlişkileri

### `AppUser` ve `Role`

```text
Many users -> One role
```

Birçok kullanıcı aynı role sahip olabilir. Örneğin birçok kullanıcı `customer` rolünde olabilir.

Bu yüzden `AppUser` içinde `Role` ilişkisi `ManyToOne` olarak kuruldu.

### `AppUser` ve `Address`

```text
One user -> Many addresses
```

Bir kullanıcının birden fazla adresi olabilir. Ev adresi, iş adresi gibi.

Bu yüzden `Address` tarafında `ManyToOne AppUser` vardır. Yani birçok adres bir kullanıcıya bağlıdır.

### `AppUser` ve `CreditCard`

```text
One user -> Many credit cards
```

Bir kullanıcının birden fazla kartı olabilir. Kartlar kullanıcıya bağlıdır.

### `AppUser` ve `CustomerOrder`

```text
One user -> Many orders
```

Bir kullanıcı birden fazla sipariş verebilir. Bu yüzden siparişler kullanıcıya bağlıdır.

### `Product`, `Category` ve `Store`

```text
Many products -> One category
Many products -> One store
```

Bir kategoride birçok ürün olabilir. Örneğin "T-shirt" kategorisinde birçok ürün vardır.

Aynı şekilde bir mağazanın birçok ürünü olabilir. Bu yüzden product tarafında category ve store ilişkileri `ManyToOne` olarak kuruldu.

### `Product` ve `ProductImage`

```text
One product -> Many images
```

Bir ürünün birden fazla görseli olabilir. Bu yüzden `Product` ile `ProductImage` arasında `OneToMany` ilişkisi vardır.

### `CustomerOrder`, `OrderItem` ve `Product`

```text
One order -> Many order items
Many order items -> One product
```

Sipariş ile ürün arasındaki ilişkiyi doğrudan `ManyToMany` yapmadık. Bunun yerine `OrderItem` adında ara entity kullandık.

Çünkü sipariş içindeki ürün için sadece ürün id'si yetmez. Şu bilgiler de gerekir:

- Kaç adet alındı?
- Hangi beden/renk seçildi?
- O anki ürün fiyatı neydi?

Bu yüzden `OrderItem` daha doğru bir tasarımdır.

## 5. ManyToMany Neden Kullanmadık?

Bu projede gerçek anlamda `@ManyToMany` kullanmadık.

İlk bakışta sipariş ve ürün arasında ManyToMany var gibi görünebilir:

- Bir siparişte birçok ürün olabilir.
- Bir ürün birçok farklı siparişte yer alabilir.

Ama aradaki ilişki ek bilgiler taşıyor:

- `count`
- `detail`
- `unitPrice`

Bu yüzden doğrudan `ManyToMany` yerine `OrderItem` kullandık.

Sunumda şöyle açıklayabilirsin:

> Sipariş ve ürün arasında ManyToMany gibi görünen bir ilişki var. Ama bu ilişkinin üzerinde adet, ürün detayı ve fiyat gibi ek bilgiler gerektiği için ara tabloyu ayrı bir entity olarak tasarladık. Bu yüzden `OrderItem` kullandık.

## 6. Auth ve Güvenlik

Kullanıcı login olduğunda backend email ve şifreyi kontrol eder. Şifreler veritabanında açık şekilde tutulmaz, BCrypt ile hashlenmiş şekilde tutulur.

Login başarılıysa backend JWT token üretir. Frontend bu token'ı saklar ve korumalı endpoint'lere istek atarken `Authorization` header'ında gönderir.

Örneğin:

```text
Authorization: JWT_TOKEN
```

Backend gelen token'ı doğrular. Token geçerliyse kullanıcının kim olduğunu anlar.

Ayrıca veritabanı şifresi ve JWT secret gibi gizli bilgiler GitHub'a açık yazılmadı. Bunlar environment variable ile dışarıdan verildi.

## 7. Önemli Teknik Kararlar

### DTO kullanmak

Entity'leri direkt frontend'e göndermedik. Çünkü entity veritabanı içindir, DTO ise API cevabı içindir.

DTO sayesinde:

- Şifre gibi alanları gizledik.
- Frontend'in beklediği JSON formatını koruduk.
- Gereksiz ilişkilerin dışarı çıkmasını engelledik.

### `LAZY` ilişki kullanmak

Çoğu ilişkide `LAZY` kullandık. Bunun anlamı, ilişkili veri hemen çekilmez; ihtiyaç olursa çekilir.

Bu performans açısından daha iyidir. Çünkü her kullanıcıyı çektiğimizde otomatik olarak adresleri, kartları, siparişleri de çekmek istemeyiz.

### Lazy loading hatasını çözmek

`GET /order` endpoint'inde bir ara lazy loading hatası aldık. Sebebi, Hibernate oturumu kapandıktan sonra sipariş ürünlerinin okunmaya çalışılmasıydı.

Bunu service içinde transaction açıkken DTO'ya çevirerek çözdük.

Sunumda kısa cevap:

> Lazy loading ilişkili veriyi sonradan çeker. Ama veritabanı oturumu kapanırsa bu veri okunamaz. Biz de siparişleri service katmanında transaction açıkken DTO'ya dönüştürerek bu problemi çözdük.

### Sepet neden backend'de değil?

Bu ödevde sepet frontend state'inde tutuldu. Backend sadece sipariş oluşturulurken devreye girdi.

Bu yüzden:

- Sepete ekleme frontend tarafında çalışır.
- Sipariş tamamlanınca backend'e `POST /order` isteği gider.
- Backend siparişi veritabanına kaydeder.

## 8. Kapanış

Backend tarafında temel e-commerce akışını tamamladık:

- Kategori listeleme
- Ürün listeleme
- Ürün detay
- Login
- Token doğrulama
- Adres işlemleri
- Kart işlemleri
- Sipariş oluşturma
- Geçmiş siparişleri listeleme

Frontend ile backend birlikte test edildi. Proje ödev kapsamı için çalışır durumda.

## Soru-Cevap Kartları

### DTO neden kullandın?

Entity veritabanını temsil eder, DTO ise frontend'e gönderilecek veriyi temsil eder. DTO kullanarak hem güvenliği artırdık hem de frontend'in beklediği JSON formatını kontrol ettik.

### Service katmanı neden var?

Controller sadece isteği karşılasın, asıl iş kuralları service içinde toplansın diye. Bu kodu daha okunabilir ve düzenli yapar.

### Repository ne işe yarıyor?

Repository veritabanı işlemlerini yapar. Spring Data JPA sayesinde çoğu sorguyu elle SQL yazmadan kullanabildik.

### JWT ne işe yarıyor?

JWT, kullanıcının login olduğunu kanıtlayan token'dır. Frontend bu token'ı sonraki isteklerde gönderir, backend de token'ı doğrular.

### ManyToOne ne demek?

Birçok kaydın tek bir kayda bağlı olmasıdır. Örneğin birçok ürün tek bir kategoriye bağlı olabilir.

### OneToMany ne demek?

Bir kaydın birden fazla bağlı kaydı olmasıdır. Örneğin bir ürünün birden fazla görseli olabilir.

### ManyToMany neden kullanmadın?

Sipariş ve ürün arasında adet, detay ve fiyat gibi ek bilgiler gerektiği için doğrudan ManyToMany kullanmadık. Bunun yerine `OrderItem` adında ara entity kullandık.

### Lazy loading nedir?

İlişkili verinin hemen değil, ihtiyaç olunca çekilmesidir. Gereksiz veriyi çekmediği için performans açısından faydalıdır.

### Environment variable neden kullandın?

Veritabanı şifresi ve JWT secret gibi gizli bilgileri GitHub'a yazmamak için. Bu bilgiler uygulama çalışırken dışarıdan verilir.

## Kısa Sunum Metni

> Bu projede frontend tarafı hazırdı ve benden bu frontend'in kullanacağı backend API'lerini yazmam bekleniyordu. Backend'i Spring Boot ile geliştirdim, veritabanı olarak PostgreSQL kullandım.
>
> Projede controller, service, repository, entity ve dto gibi katmanlı bir yapı kurdum. Controller gelen API isteklerini karşılıyor, service iş kurallarını yönetiyor, repository veritabanı işlemlerini yapıyor, entity veritabanı tablolarını temsil ediyor, dto ise frontend'e gönderilecek verinin temiz halini oluşturuyor.
>
> Kullanıcı işlemleri için signup, login ve verify endpoint'leri var. Şifreleri açık tutmadım, BCrypt ile hashledim. Login başarılı olunca JWT token ürettim. Frontend sonraki isteklerde bu token'ı Authorization header'ında gönderiyor.
>
> Ürün tarafında kategori listeleme, ürün listeleme, filtreleme, sıralama, sayfalama ve ürün detay endpoint'leri var. Sipariş tarafında ise kullanıcı adres ve kart bilgileriyle sipariş oluşturabiliyor, daha sonra geçmiş siparişlerini görebiliyor.
>
> Veritabanı ilişkilerinde çoğunlukla ManyToOne ve OneToMany kullandım. Örneğin birçok ürün bir kategoriye bağlı, bir kullanıcının birçok adresi ve siparişi olabilir. Sipariş ve ürün arasında ManyToMany kullanmadım çünkü arada adet, ürün detayı ve fiyat gibi ek bilgiler vardı. Bu yüzden OrderItem adında ayrı bir ara entity kullandım.
>
> Son olarak frontend ile backend'i birlikte test ettik. Login, ürün listeleme, sepete ekleme, sipariş oluşturma ve geçmiş siparişleri görme akışları çalışır hale geldi.
