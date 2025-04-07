'use client'

import { useQuery } from '@tanstack/react-query'
import { Card } from './ui/card'
import { fetchPopularGames } from '@/lib/api'
import { StarIcon } from 'lucide-react'

export const PopularGames = () => {
  const { data: games } = useQuery({
    queryKey: ['popular-games'],
    queryFn: fetchPopularGames,
    refetchInterval: FETCH_INTERVAL,
  })

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">En Popüler Oyunlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {games?.map((game) => (
          <Card key={game.id} className="bg-[#1A1A1A] border-none relative">
            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md flex items-center gap-1">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span>{game.rating}</span>
            </div>
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <h3 className="font-semibold">{game.title}</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold">${game.price.current}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
} 