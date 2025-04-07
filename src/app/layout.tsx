import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <title>Oyun İndirimleri | Tüm Platformlar</title>
        <meta name="description" content="Steam, Epic Games, PSN ve diğer platformlardaki en iyi oyun indirimleri." />
        <meta name="keywords" content="oyun, indirim, steam, epic games, playstation, xbox" />
        <meta property="og:title" content="Oyun İndirimleri | Tüm Platformlar" />
        <meta property="og:description" content="En iyi oyun fırsatları" />
        <meta property="og:image" content="/og-image.jpg" />
      </head>
      <body className={`${inter.className} bg-[#0A0A0A] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Oyun İndirimleri | Tüm Platformlar',
  description: 'Steam, Epic Games, PSN ve diğer platformlardaki en iyi oyun indirimleri.',
  keywords: 'oyun, indirim, steam, epic games, playstation, xbox',
  openGraph: {
    title: 'Oyun İndirimleri | Tüm Platformlar',
    description: 'En iyi oyun fırsatları',
    images: ['/og-image.jpg'],
  },
} 