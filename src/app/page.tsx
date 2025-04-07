import TrendingGames from '@/components/trending-games'
import UpcomingSales from '@/components/upcoming-sales'
import PopularGames from '@/components/popular-games'
import Categories from '@/components/categories'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <TrendingGames />
        <UpcomingSales />
        <PopularGames />
        <Categories />
      </div>
    </main>
  )
} 