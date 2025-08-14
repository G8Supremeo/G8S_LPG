import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TradingInterface } from "@/components/trading-interface"
import { TokenStats } from "@/components/token-stats"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TradingInterface />
        <TokenStats />
      </main>
      <Footer />
    </div>
  )
}
