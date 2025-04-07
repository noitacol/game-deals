import { Redis } from 'ioredis'

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

export const CACHE_KEYS = {
  TRENDING_GAMES: 'trending_games',
  POPULAR_GAMES: 'popular_games',
  UPCOMING_SALES: 'upcoming_sales',
  CATEGORIES: 'categories'
} as const

export const cacheData = async (key: string, data: any) => {
  await redis.set(key, JSON.stringify(data), 'EX', 6 * 60 * 60) // 6 saat cache
}

export const getCachedData = async (key: string) => {
  const data = await redis.get(key)
  return data ? JSON.parse(data) : null
}

export const invalidateCache = async (key: string) => {
  await redis.del(key)
}

// Webhook handler için cache güncelleme fonksiyonu
export const updateCacheFromWebhook = async (event: string, data: any) => {
  switch (event) {
    case 'deals':
      await invalidateCache(CACHE_KEYS.TRENDING_GAMES)
      break
    case 'prices':
      await invalidateCache(CACHE_KEYS.POPULAR_GAMES)
      break
    // diğer durumlar...
  }
} 