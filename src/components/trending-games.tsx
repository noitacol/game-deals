'use client'

import { MOCK_GAMES } from '@/lib/mock-data'

export default function TrendingGames() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Trend Oyunlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {MOCK_GAMES.map((game) => (
          <div key={game.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-semibold">{game.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">-{game.price.discount}%</span>
                  <span className="text-gray-400 line-through">${game.price.original}</span>
                  <span>${game.price.current}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 