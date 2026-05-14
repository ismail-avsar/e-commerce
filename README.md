# Bandage E-Commerce

Bandage E-Commerce, Workintech e-commerce bitirme odevleri kapsaminda gelistirilmis full-stack bir alisveris uygulamasidir. Frontend React ile, backend Spring Boot + PostgreSQL ile gelistirildi.

Bu README frontend reposu icindir. Uygulama canli ortamda Render uzerindeki gercek backend API'sine baglanir.

## Canli Demo

Frontend Vercel uzerinde yayindadir:

```text
https://e-commerce-two-fawn-25.vercel.app
```

Backend Render uzerinde yayindadir:

```text
https://e-commerce-backend-tpne.onrender.com
```

Frontend production ortaminda backend adresini Vercel environment variable uzerinden okur:

```env
VITE_API_BASE_URL=https://e-commerce-backend-tpne.onrender.com
```

Lokal gelistirmede bu env verilmezse frontend varsayilan olarak `http://localhost:8080` adresini kullanir.

## Proje Durumu

Proje, T01-T23 issue akisini kapsayacak sekilde tamamlandi.

- Figma referansina uygun responsive frontend
- Gercek backend API entegrasyonu
- Kullanici kaydi, giris ve token dogrulama
- Kategori ve urun listeleme
- Filtreleme, siralama ve sayfalama
- Urun detay sayfasi
- Sepete ekleme ve sepet kaliciligi
- Adres ve kart yonetimi
- Siparis olusturma
- Gecmis siparisleri listeleme
- Vercel frontend + Render backend canli entegrasyonu

## Teknolojiler

### Frontend

- React 18
- Vite
- React Router v5
- Redux
- Redux Thunk
- Axios
- Tailwind CSS
- React Hook Form
- React Toastify
- Lucide React
- React Slick

### Backend

Backend ayri projede gelistirildi.

- Java 17
- Spring Boot
- Spring Security
- JWT
- BCrypt
- Spring Data JPA
- PostgreSQL
- Docker
- Render

## Calistirma

### 1. Backend

Backend servisinin lokal ortamda `http://localhost:8080` adresinde calisiyor olmasi gerekir.

PostgreSQL ayari:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/bandage_ecommerce
spring.datasource.username=postgres
spring.datasource.password=${DB_PASSWORD}
```

Backend basladiginda seed data otomatik hazirlanir.

Hazir test kullanicilari:

```text
customer@commerce.com / 123456
store@commerce.com / 123456
admin@commerce.com / 123456
```

### 2. Frontend

PowerShell'de `npm` script calistirma hatasi alinirsa `npm.cmd` kullanin.

```powershell
cd C:\Users\ismail\Proje\Workintech\Frontend\e-commerce
npm.cmd install
npm.cmd run dev
```

Frontend varsayilan olarak su adreste calisir:

```text
http://localhost:5173
```

## Kullanilabilir Komutlar

```powershell
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

## API Ayari

Frontend API baglantisi `src/api/api.js` icindedir.

Production API adresi Vercel uzerinde su env ile tanimlanir:

```env
VITE_API_BASE_URL=https://e-commerce-backend-tpne.onrender.com
```

Kod tarafinda fallback su sekildedir:

```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
```

Backend seed data icindeki urun gorsel URL'leri lokal backend adresiyle gelebilir. Frontend API katmani bu URL'leri canli backend adresine normalize eder.

Mock API kapali durumdadir:

```js
const USE_MOCK_API = false;
```

Token kullanimi issue gereksinimine uygun olarak su sekildedir:

```text
Authorization: JWT_TOKEN
```

`Bearer` prefix'i kullanilmaz.

## Ana API Endpointleri

| Method | Endpoint | Aciklama |
| --- | --- | --- |
| GET | `/roles` | Rolleri getirir |
| POST | `/signup` | Yeni kullanici olusturur |
| POST | `/login` | Giris yapar ve token doner |
| GET | `/verify` | Token dogrular ve yeniler |
| GET | `/categories` | Kategorileri getirir |
| GET | `/products` | Urunleri getirir |
| GET | `/products/{productId}` | Tek urun detayini getirir |
| GET | `/user/address` | Kullanici adreslerini getirir |
| POST | `/user/address` | Yeni adres ekler |
| PUT | `/user/address` | Adres gunceller |
| DELETE | `/user/address/{addressId}` | Adres siler |
| GET | `/user/card` | Kullanici kartlarini getirir |
| POST | `/user/card` | Yeni kart ekler |
| PUT | `/user/card` | Kart gunceller |
| DELETE | `/user/card/{cardId}` | Kart siler |
| POST | `/order` | Siparis olusturur |
| GET | `/order` | Gecmis siparisleri getirir |

## Deployment Ozeti

- Frontend Vercel production olarak deploy edildi.
- Backend Render uzerinde Docker runtime ile deploy edildi.
- Backend PostgreSQL veritabani Render Blueprint ile olusturuldu.
- Frontend `VITE_API_BASE_URL` ile Render backend URL'ine baglandi.
- Son production deployment Vercel'de `Normalize backend asset URLs` commit'i ile yayina alindi.

## Test Edilen Akislar

Teslim oncesi su akislar kontrol edildi:

- Backend `GET /categories`
- Backend `GET /products?limit=2&offset=0`
- Backend `POST /login`
- Backend `GET /verify`
- Backend adres CRUD
- Backend kart CRUD
- Backend `POST /order`
- Backend `GET /order`
- Frontend ana sayfa
- Frontend shop sayfasi
- Urun filtreleme ve siralama
- Urun detay sayfasi
- Sepete ekleme
- Sayfa yenilenince sepetin korunmasi
- Siparis olusturma
- Gecmis siparisleri goruntuleme
- Vercel frontend'in Render backend'e baglanmasi

Son kontrol:

```powershell
npm.cmd run lint
npm.cmd run build
```

Canli Vercel build basariyla tamamlanmistir.

## Odev Issue Karsiliklari

- T01-T07: Sayfa yapisi, Figma uyumu, responsive tasarim
- T08: Signup formu ve backend `/signup`
- T09: Redux store, reducer ve thunk yapisi
- T10: Login formu ve backend `/login`
- T11: Token ile otomatik giris ve `/verify`
- T12: Kategoriler ve header dropdown
- T13: Urun listeleme
- T14: Category, filter ve sort query parametreleri
- T15: Limit ve offset ile sayfalama
- T16: Urun detay sayfasi
- T17-T19: Sepet, sepet sayfasi ve siparis ozeti
- T20: Adres yonetimi
- T21: Kart yonetimi
- T22: Siparis olusturma
- T23: Gecmis siparisler

## Notlar

- Sepet frontend tarafinda Redux ile yonetilir ve localStorage ile korunur.
- Gercek odeme entegrasyonu yoktur; kart verisi odev kapsaminda demo amaclidir.
- Backend urun gorsellerini static dosyalar uzerinden servis eder.
- Kart ve odeme akisi egitim/odev kapsaminda demo amaclidir.

## Yazar

Ismail Avsar

- GitHub: [@ismail-avsar](https://github.com/ismail-avsar)
