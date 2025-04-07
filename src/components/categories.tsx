'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '@/lib/api'

export const Categories = () => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    refetchInterval: FETCH_INTERVAL,
  })

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Oyun Kategorileri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories?.map((category) => (
          <div 
            key={category.id}
            className="bg-[#1A1A1A] p-4 rounded-lg hover:bg-[#252525] transition cursor-pointer"
          >
            <h3 className="font-semibold">{category.title}</h3>
            <p className="text-sm text-gray-400">{category.gameCount} Oyun</p>
          </div>
        ))}
      </div>
    </section>
  )
} 