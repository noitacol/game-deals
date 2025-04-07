import { render, screen } from '@testing-library/react'
import { TrendingGames } from '@/components/trending-games'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('TrendingGames', () => {
  it('renders trending games correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TrendingGames />
      </QueryClientProvider>
    )

    expect(screen.getByText('Trend Oyunlar')).toBeInTheDocument()
    // Diğer testler...
  })
}) 