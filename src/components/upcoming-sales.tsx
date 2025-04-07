'use client'

import { useQuery } from '@tanstack/react-query'
import { Card } from './ui/card'
import { fetchUpcomingSales } from '@/lib/api'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

export const UpcomingSales = () => {
  const { data: sales } = useQuery({
    queryKey: ['upcoming-sales'],
    queryFn: fetchUpcomingSales,
    refetchInterval: FETCH_INTERVAL,
  })

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Yaklaşan İndirimler</h2>
      <div className="space-y-4">
        {sales?.map((sale) => (
          <Card key={sale.id} className="bg-[#1A1A1A] border-none">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={`/platforms/${sale.platform.toLowerCase()}.svg`}
                  alt={sale.platform}
                  className="w-6 h-6"
                />
                <div>
                  <h3 className="font-semibold">{sale.title}</h3>
                  <p className="text-sm text-gray-400">
                    {format(new Date(sale.startDate), 'd MMMM yyyy', { locale: tr })} - 
                    {format(new Date(sale.endDate), 'd MMMM yyyy', { locale: tr })}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-pink-600 rounded-md hover:bg-pink-700 transition">
                Detaylar
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
} 