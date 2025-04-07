import { Analytics } from '@vercel/analytics/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function AnalyticsWrapper() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Sayfa görüntüleme eventi
    Analytics.track('page_view', {
      path: pathname,
      search: searchParams.toString(),
    })
  }, [pathname, searchParams])

  return null
} 