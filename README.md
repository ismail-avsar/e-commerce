# 🛍️ Bandage E-Ticaret Platformu

<div align="center">

[![Canlı Demo](https://img.shields.io/badge/demo-canlı-success?style=for-the-badge)](https://e-commerce-two-fawn-25.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

**React, Redux ve Tailwind CSS ile geliştirilmiş modern, responsive e-ticaret platformu**

[🚀 Canlı Demo](https://e-commerce-two-fawn-25.vercel.app/) • [📋 Özellikler](#-özellikler) • [🛠️ Teknoloji Stack](#️-teknoloji-stack) • [📖 Dokümantasyon](#-proje-geliştirme-yolculuğu)

</div>

---

## 📋 İçindekiler

- [Genel Bakış](#-genel-bakış)
- [Özellikler](#-özellikler)
- [Teknoloji Stack](#️-teknoloji-stack)
- [Başlangıç](#-başlangıç)
- [Proje Geliştirme Yolculuğu](#-proje-geliştirme-yolculuğu)
- [API Entegrasyonu](#-api-entegrasyonu)
- [Katkıda Bulunma](#-katkıda-bulunma)

---

## 🎯 Genel Bakış

Bandage, modern UI/UX tasarımıyla kusursuz bir alışveriş deneyimi sunan tam özellikli bir e-ticaret platformudur. Proje, React geliştirmede en iyi uygulamaları, Redux ile durum yönetimini ve Tailwind CSS ile responsive tasarımı göstermektedir.

### ✨ Öne Çıkan Özellikler

- 🎨 **Piksel mükemmel Figma uygulaması** ile mobile-first yaklaşım
- 🔐 **JWT ile güvenli kimlik doğrulama** ve otomatik giriş
- 🛒 **Gerçek zamanlı güncellemeli** tam alışveriş sepeti
- 💳 **Adres ve ödeme yönetimli** komple ödeme akışı
- 📱 **Tüm cihazlar için** tamamen responsive tasarım
- ⚡ **Lazy loading ve code splitting** ile optimize edilmiş performans

---

## 🌟 Özellikler

### 🛍️ Alışveriş Deneyimi
- **Ürün Kataloğu** - Gelişmiş filtreleme, sıralama ve sayfalama ile ürünlere göz atın
- **Ürün Detayları** - Görsel galerileriyle kapsamlı ürün bilgileri
- **Alışveriş Sepeti** - Gerçek zamanlı fiyat hesaplamaları ile ürün ekleme, güncelleme, çıkarma
- **İstek Listesi** - Favori ürünleri daha sonra için kaydedin

### 👤 Kullanıcı Yönetimi
- **Kimlik Doğrulama** - JWT token'ları ile güvenli giriş/kayıt
- **Otomatik Giriş** - "Beni Hatırla" işleviyle kalıcı oturumlar
- **Profil Yönetimi** - Kullanıcı avatarları için Gravatar entegrasyonu
- **Rol Tabanlı Erişim** - Dinamik formlarla Müşteri ve Mağaza sahibi rolleri

### 📦 Sipariş Yönetimi
- **Çok Adımlı Ödeme** - Adres seçimi, ödeme yöntemi, sipariş inceleme
- **Adres Defteri** - Teslimat adresleri için CRUD işlemleri
- **Ödeme Yöntemleri** - Birden fazla kredi kartını güvenle yönetin
- **Sipariş Geçmişi** - Detaylı dökümlerle geçmiş siparişleri görüntüleyin

### 🎨 UI/UX Özellikleri
- **Responsive Tasarım** - Tailwind CSS ile mobile-first yaklaşım
- **Dinamik Navigasyon** - Hover efektleriyle kategori tabanlı mega menü
- **Yükleme Durumları** - Daha iyi UX için skeleton ekranlar ve spinner'lar
- **Toast Bildirimleri** - Kullanıcı eylemleri için gerçek zamanlı geri bildirim
- **SEO Dostu URL'ler** - Temiz, açıklayıcı yönlendirme yapısı

---

## 🛠️ Teknoloji Stack

### Frontend
- **React 18** - Hook'larla modern UI kütüphanesi
- **Vite** - Yeni nesil frontend araçları
- **React Router v5** - Bildirimsel yönlendirme
- **Redux Toolkit** - Redux Thunk ile durum yönetimi
- **Tailwind CSS** - v4.x ile modern CSS framework
- **React Hook Form** - Performanslı form validasyonu
- **Axios** - Interceptor'lı HTTP istemcisi
- **Lucide React** - Modern ikon seti
- **React Slick** - Slider ve carousel bileşenleri

### Geliştirme Araçları
- **Redux Logger** - Hata ayıklama için geliştirme middleware'i
- **React Toastify** - Toast bildirimleri
- **MD5** - Gravatar hash oluşturma
- **ESLint** - Kod linting
- **Git** - Versiyon kontrolü

### Deployment
- **Vercel** - Sürekli deployment ve hosting

---

## 🚀 Başlangıç

### Gereksinimler
- Node.js 16.x veya üzeri
- npm veya yarn

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/ismail-avsar/e-commerce.git

# Proje dizinine gidin
cd e-commerce

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

### Kullanılabilir Komutlar

```bash
npm run dev          # Geliştirme sunucusunu başlat
npm run build        # Production için build al
npm run preview      # Production build'i önizle
npm run lint         # ESLint çalıştır
```

### Ortam Değişkenleri

Kök dizinde bir `.env` dosyası oluşturun:

```env
VITE_API_BASE_URL=api_base_url_adresiniz
```

---

## 📖 Proje Geliştirme Yolculuğu

Bu proje, agile metodolojisini takip ederek aşamalı olarak geliştirilmiştir. Aşağıda her geliştirme aşamasının detaylı dökümü bulunmaktadır:

### 🏗️ Faz 1: Temel & Kurulum

<details>
<summary><b>T01: Proje Kurulumu ve Altyapı</b></summary>

**Hedef:** Proje temelini ve geliştirme ortamını oluşturmak

**Başarılar:**
- ✅ Vite ile React projesi başlatıldı
- ✅ Stil için Tailwind CSS entegre edildi
- ✅ Proje yapısı düzenlendi (Components, Layouts, Pages, Assets)
- ✅ Versiyon kontrolü için GitHub repository kuruldu
- ✅ Vercel'e deploy edildi: [Canlı Demo](https://e-commerce-two-fawn-25.vercel.app/)

</details>

<details>
<summary><b>T02: Ana Sayfa ve Layout Geliştirme</b></summary>

**Hedef:** Temel layout bileşenlerini ve ana sayfa yapısını oluşturmak

**Başarılar:**
- ✅ Global Header & Footer bileşenleri oluşturuldu
- ✅ Hamburger menülü responsive navigasyon uygulandı
- ✅ Görsel slider ve ürün kartı bileşenleri oluşturuldu
- ✅ Figma tasarım uyumluluğu sağlandı

</details>

<details>
<summary><b>T03: Mağaza Sayfası ve Yönlendirme</b></summary>

**Hedef:** Yönlendirmeli ürün listeleme sayfası geliştirmek

**Başarılar:**
- ✅ React Router v5 ile `/` ve `/shop` rotaları yapılandırıldı
- ✅ Dinamik kategori kartları oluşturuldu (5 kategori)
- ✅ Grid/liste görünümü değiştirme özellikli filtre barı oluşturuldu
- ✅ Ürün grid'i uygulandı (masaüstünde 4 sütun, mobilde dikey)
- ✅ Sayfalama ve marka ortaklığı bölümü eklendi

</details>

### 🎨 Faz 2: Temel Sayfalar

<details>
<summary><b>T04: Ürün Detay Sayfası</b></summary>

**Hedef:** Kapsamlı ürün detay görünümü oluşturmak

**Başarılar:**
- ✅ Figma tasarımına uygun ürün detay sayfası oluşturuldu
- ✅ Mobile-first responsive layout uygulandı
- ✅ Ürün kartlarından dinamik yönlendirme eklendi
- ✅ Ürün görsel galerisi entegre edildi

</details>

<details>
<summary><b>T05: İletişim Sayfası</b></summary>

**Hedef:** Ofis bilgileriyle iletişim sayfası geliştirmek

**Başarılar:**
- ✅ Global Header/Footer layout'una entegre edildi
- ✅ Arka plan görselleri `object-top` ve gradient filtrelerle optimize edildi
- ✅ Ana navigasyonda `/contact` rotası aktifleştirildi

</details>

<details>
<summary><b>T06: Ekip Sayfası</b></summary>

**Hedef:** Yeniden kullanılabilir ekip üyesi bileşeni oluşturmak

**Başarılar:**
- ✅ Modüler "Ekibimizle Tanışın" bileşeni oluşturuldu
- ✅ Ekip üyesi görselleri yapılandırıldı (kare format, `object-top`)
- ✅ Responsive flex layout uygulandı
- ✅ Tipografi ve renk tutarlılığı sağlandı

</details>

<details>
<summary><b>T07: Hakkımızda Sayfası</b></summary>

**Hedef:** Birden fazla bölümlü kapsamlı hakkımızda sayfası

**Başarılar:**
- ✅ Hero, İstatistikler, Video, Şirket Logoları bölümleri oluşturuldu
- ✅ Responsive görsellerle "Bizimle Çalışın" bölümü entegre edildi
- ✅ Kod tekrarını önlemek için Team bileşeni yeniden kullanıldı
- ✅ `height-auto` ve container'larla görsel gösterimi optimize edildi

</details>

### 🔐 Faz 3: Kimlik Doğrulama & Kullanıcı Yönetimi

<details>
<summary><b>T08: Kullanıcı Kaydı (Sign Up)</b></summary>

**Hedef:** API entegrasyonlu kullanıcı kaydı uygulamak

**Başarılar:**
- ✅ React Hook Form ile kayıt formu oluşturuldu
- ✅ API iletişimi için Axios entegre edildi
- ✅ Kapsamlı validasyon uygulandı (İsim, E-posta, Şifre, Rol)
- ✅ Rol tabanlı dinamik alanlar eklendi (Mağaza rolü için Mağaza Adı, Vergi No, IBAN)
- ✅ Yükleme spinner'ı ve başarı/hata geri bildirimi oluşturuldu
- ✅ Başarılı kayıt sonrası otomatik yönlendirme eklendi

</details>

<details>
<summary><b>T09: Redux Kurulumu</b></summary>

**Hedef:** Global durum yönetimini yapılandırmak

**Başarılar:**
- ✅ Redux Thunk ve Logger middleware'leriyle Redux store kuruldu
- ✅ Modüler reducer'lar oluşturuldu (Client, Product, ShoppingCart)
- ✅ Tüm durum değişiklikleri için action creator'lar tanımlandı
- ✅ Asenkron işlemler için thunk action'ları uygulandı (örn. rolleri getir)

</details>

<details>
<summary><b>T10: Giriş Formu ve Kimlik Doğrulama</b></summary>

**Hedef:** Oturum yönetimli güvenli kullanıcı girişi

**Başarılar:**
- ✅ E-posta/şifre validasyonlu giriş formu oluşturuldu
- ✅ `/login` API endpoint'i için Redux thunk oluşturuldu
- ✅ localStorage ile "Beni Hatırla" işlevi uygulandı
- ✅ Kullanıcı profil resimleri için Gravatar entegre edildi (MD5 hash)
- ✅ Header'da kullanıcı bilgisi gösterimi eklendi

</details>

<details>
<summary><b>T11: Otomatik Giriş</b></summary>

**Hedef:** Token doğrulamalı kalıcı kullanıcı oturumları

**Başarılar:**
- ✅ Uygulama başlangıcında token doğrulama uygulandı
- ✅ localStorage'daki geçerli token'larla otomatik giriş
- ✅ Geçersiz token'lar için güvenli token temizleme
- ✅ Authorization header'ları için Axios interceptor yapılandırıldı
- ✅ Otomatik çıkışla 401 hata yönetimi eklendi

</details>

### 🛒 Faz 4: Ürün Kataloğu & Alışveriş

<details>
<summary><b>T12: Kategorileri Getir</b></summary>

**Hedef:** Dinamik kategori yönetimi

**Başarılar:**
- ✅ Uygulama geneli veriler için `globalReducer` oluşturuldu
- ✅ `fetchCategories` thunk action'ı uygulandı
- ✅ Header'da kategori listelemeleriyle dropdown menü oluşturuldu
- ✅ "En İyi Kategoriler" bölümü oluşturuldu (rating'e göre ilk 5)
- ✅ SEO dostu rotalar yapılandırıldı: `/shop/:gender/:categoryName/:categoryId`

</details>

<details>
<summary><b>T13: Ürünleri Getir</b></summary>

**Hedef:** API entegrasyonlu ürün listeleme

**Başarılar:**
- ✅ `fetchProducts` thunk action'ı oluşturuldu
- ✅ Yükleme durumları yönetildi (FETCHING, FETCHED, FAILED)
- ✅ Redux, ShopPage bileşeniyle entegre edildi
- ✅ Veri çekme sırasında yükleme spinner'ı eklendi
- ✅ Gerçek verilerle dinamik ürün kartları render edildi

</details>

<details>
<summary><b>T14: Ürün Sorgu Parametreleri</b></summary>

**Hedef:** Gelişmiş filtreleme ve sıralama

**Başarılar:**
- ✅ Kategori, filtre ve sıralama durumları için `productReducer` güncellendi
- ✅ URL tabanlı `categoryId` yönetimi uygulandı
- ✅ Arama ve sıralama UI bileşenleri oluşturuldu
- ✅ Filtreler API sorgularına bağlandı

</details>

<details>
<summary><b>T15: Ürün Sayfalama</b></summary>

**Hedef:** Sayfalama ile verimli ürün gezinme

**Başarılar:**
- ✅ `productReducer`'a `limit`, `offset` ve `total` eklendi
- ✅ Sayfalama kontrolleri oluşturuldu (önceki, sonraki, sayfa numaraları)
- ✅ Toplam sayfa sayısı dinamik olarak hesaplandı
- ✅ Sayfalama API istekleriyle senkronize edildi

</details>

<details>
<summary><b>T16: Ürün Detay Sayfası & Yönlendirme</b></summary>

**Hedef:** SEO optimizasyonlu tekil ürün görünümü

**Başarılar:**
- ✅ SEO dostu URL yapısı oluşturuldu: `/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId`
- ✅ Tekil ürün verisi için `fetchProduct` thunk'ı uygulandı
- ✅ Gerçek verilerle dinamik ProductDetailPage oluşturuldu
- ✅ Veri çekme sırasında yükleme spinner'ı eklendi
- ✅ Ürün kartlarından akıllı yönlendirme yapılandırıldı

</details>

### 🛒 Faz 5: Alışveriş Sepeti & Ödeme

<details>
<summary><b>T17: Alışveriş Sepetine Ürün Ekleme</b></summary>

**Hedef:** Komple alışveriş sepeti işlevselliği

**Başarılar:**
- ✅ Sepet action'ları oluşturuldu: `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_PRODUCT_COUNT`, `TOGGLE_PRODUCT_CHECK`
- ✅ Sepet mantığı optimize edildi (tekrarlanan ürünler için sayıyı artır)
- ✅ Hover/click etkileşimli `CartDropdown` bileşeni oluşturuldu
- ✅ Dinamik ürün sayısıyla sepet badge'i eklendi
- ✅ ProductDetailPage'e "Sepete Ekle" entegre edildi

</details>

<details>
<summary><b>T18: Alışveriş Sepeti Sayfası</b></summary>

**Hedef:** Özel sepet yönetim sayfası

**Başarılar:**
- ✅ `ShoppingCartPage` bileşeniyle `/cart` rotası oluşturuldu
- ✅ Sepet işlemleri için tam Redux entegrasyonu
- ✅ Miktar kontrolleri ve kaldırma işlevi oluşturuldu
- ✅ Checkbox'larla ürün seçimi uygulandı
- ✅ Dinamik hesaplamalarla Sipariş Özeti oluşturuldu
- ✅ "150 TL üzeri ücretsiz kargo" mantığı eklendi

</details>

<details>
<summary><b>T19: Sipariş Özeti Kutusu</b></summary>

**Hedef:** Geliştirilmiş sipariş özeti UI

**Başarılar:**
- ✅ "Sepeti Onayla" butonları eklendi (üst ve alt)
- ✅ İndirim kodu giriş alanı uygulandı
- ✅ Ücretsiz kargo eşiği vurgulandı
- ✅ "Satıcı Karşılar" kargo göstergesi eklendi

</details>

### 💳 Faz 6: Sipariş İşleme

<details>
<summary><b>T20: Sipariş Oluşturma Sayfası - Adım 1: Adres</b></summary>

**Hedef:** Ödeme için adres yönetimi

**Başarılar:**
- ✅ Korumalı yönlendirmeyle `/order` rotası oluşturuldu
- ✅ Redux thunk'ları uygulandı: `fetchAddressList`, `addAddress`, `updateAddress`, `deleteAddress`
- ✅ React Hook Form validasyonlu adres formu oluşturuldu
- ✅ Adres listeleme ve seçim UI'ı eklendi
- ✅ İl, ilçe, mahalle alanları yapılandırıldı

</details>

<details>
<summary><b>T21: Sipariş Oluşturma Sayfası - Adım 2: Kredi Kartı</b></summary>

**Hedef:** Ödeme yöntemi yönetimi

**Başarılar:**
- ✅ Kart CRUD işlemleri oluşturuldu (GET, POST, PUT, DELETE)
- ✅ Kart listelemeyle `OrderPayment` bileşeni oluşturuldu
- ✅ Validasyonlu `CardForm` uygulandı (Luhn algoritması, tarih kontrolleri, regex)
- ✅ Taksit seçenekleri eklendi (mock veri)
- ✅ Adres ve ödeme adımları arası tab navigasyonu oluşturuldu
- ✅ API çağrıları güvence altına alındı (CVV iletimi yok)

</details>

<details>
<summary><b>T22: Siparişi Tamamla</b></summary>

**Hedef:** Sipariş gönderimini sonlandırmak

**Başarılar:**
- ✅ `createOrder` thunk'ı uygulandı (POST `/order`)
- ✅ İstek gövdesi yapılandırıldı (adres, kart, ürünler, toplam)
- ✅ Sipariş sonrası temizlik için `RESET_CART` action'ı eklendi
- ✅ Validasyonlu "Ödeme Yap" butonu aktifleştirildi
- ✅ Başarı/hata mesajları için React Toastify entegre edildi
- ✅ Başarılı sipariş sonrası ana sayfaya otomatik yönlendirme eklendi

</details>

<details>
<summary><b>T23: Önceki Siparişler Sayfası</b></summary>

**Hedef:** Sipariş geçmişi ve detayları

**Başarılar:**
- ✅ `PreviousOrdersPage` ile `/orders` rotası oluşturuldu
- ✅ Sipariş listeleme tablosu oluşturuldu (tarih, tutar, ürün sayısı)
- ✅ Açılır/kapanır detay panelleri uygulandı
- ✅ `orderReducer` ve `fetchOrders` thunk'ı oluşturuldu
- ✅ Kullanıcı dropdown menüsüyle header geliştirildi (Siparişler, Çıkış)

</details>

---

## 🔌 API Entegrasyonu

### Base URL
```javascript
const API_BASE_URL = process.env.VITE_API_BASE_URL;
```

### Ana Endpoint'ler

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `POST` | `/signup` | Kullanıcı kaydı |
| `POST` | `/login` | Kullanıcı kimlik doğrulama |
| `GET` | `/verify` | Token doğrulama |
| `GET` | `/categories` | Tüm kategorileri getir |
| `GET` | `/products` | Filtrelerle ürünleri getir |
| `GET` | `/products/:id` | Tekil ürün getir |
| `GET` | `/user/address` | Kullanıcı adreslerini getir |
| `POST` | `/user/address` | Yeni adres ekle |
| `PUT` | `/user/address` | Adresi güncelle |
| `DELETE` | `/user/address/:id` | Adresi sil |
| `GET` | `/user/card` | Ödeme yöntemlerini getir |
| `POST` | `/user/card` | Ödeme yöntemi ekle |
| `PUT` | `/user/card` | Ödeme yöntemini güncelle |
| `DELETE` | `/user/card/:id` | Ödeme yöntemini sil |
| `POST` | `/order` | Sipariş oluştur |
| `GET` | `/order` | Sipariş geçmişini getir |

### Kimlik Doğrulama
Tüm korumalı endpoint'ler Authorization header'ında JWT token gerektirir:
```javascript
headers: {
  Authorization: `Bearer ${token}`
}
```

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları takip edin:

1. Repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/HarikaBirOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika bir özellik ekle'`)
4. Branch'inizi push edin (`git push origin feature/HarikaBirOzellik`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje bir öğrenme yolculuğunun parçasıdır ve eğitim amaçlı kullanıma açıktır.

---

## 👨‍💻 Yazar

**İsmail Avşar**

- GitHub: [@ismail-avsar](https://github.com/ismail-avsar)

---

## 🙏 Teşekkürler

- Figma topluluğundan tasarım ilhamı
- Çeşitli açık kaynak projelerden ikonlar ve varlıklar
- React ve Redux topluluklarına özel teşekkürler

---

<div align="center">

**⭐ Faydalı bulduysanız bu repository'ye yıldız verin!**

❤️ ile İsmail Avşar tarafından yapıldı

</div>
