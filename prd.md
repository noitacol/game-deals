# Oyun İndirimleri Platformu PRD

## 1. Ürün Özeti
Tüm dijital oyun platformlarındaki (Steam, Epic Games, PSN, Xbox vb.) indirimleri, ücretsiz oyunları ve bundle'ları tek bir yerden takip edilebilmesini sağlayan web platformu.

## 2. Teknik Gereksinimler

### 2.1 Frontend Teknolojileri
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Shadcn/ui
- React Query (API entegrasyonları için)
- Zustand (State yönetimi)

### 2.2 Backend Teknolojileri
- Node.js
- Express.js
- MongoDB (oyun ve indirim verilerinin cache'lenmesi için)
- Redis (hızlı veri erişimi için)

### 2.3 API Entegrasyonları
- IsThereAnyDeal API (ana veri kaynağı)
- Steam API (ek detaylar için)
- Epic Games Store API
- PlayStation Store API
- Xbox Store API

## 3. Temel Özellikler

### 3.1 Ana Sayfa
- Trend İndirimler
- Ücretsiz Oyunlar
- Popüler Bundle'lar
- Yaklaşan İndirim Dönemleri
- Platform Filtreleme
- Fiyat Filtreleme

### 3.2 Kullanıcı Özellikleri
- İstek Listesi Oluşturma
- Fiyat Alarmı Kurma
- İndirim Bildirimleri
- Oyun Koleksiyonu

### 3.3 Detay Sayfaları
- Oyun Detayları
- Fiyat Geçmişi Grafikleri
- Platform Karşılaştırması
- Bundle İçerikleri

## 4. API Entegrasyon Detayları

### 4.1 IsThereAnyDeal API Kullanımı
```typescript
const API_KEY = 'a641457f34e7addea08c7dba6af6579766b57dc2';
const BASE_URL = 'https://api.isthereanydeal.com';

// Örnek endpoint yapıları:
const endpoints = {
  deals: '/v01/deals/list',
  bundles: '/v01/bundles/all',
  prices: '/v01/game/prices',
  search: '/v01/search/search'
};
```

## 5. Veri Modelleri

### 5.1 Oyun Modeli
```typescript
interface Game {
  id: string;
  title: string;
  platforms: Platform[];
  currentPrice: Price;
  historicalLow: Price;
  deals: Deal[];
  metacritic?: number;
  releaseDate: Date;
}
```

## 6. Performans Gereksinimleri
- Sayfa yüklenme süresi: < 2 saniye
- API yanıt süresi: < 500ms
- Cache kullanımı: Redis ile 15 dakika
- Lighthouse skoru: minimum 90

## 7. Güvenlik Gereksinimleri
- API Rate Limiting
- HTTPS zorunluluğu
- API Key rotasyonu
- XSS koruması
- CORS politikaları 