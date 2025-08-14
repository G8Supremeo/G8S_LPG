import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FamilyImpactSection } from "@/components/family-impact-section"
import { TradingInterface } from "@/components/trading-interface"
import { TokenRoadmap } from "@/components/token-roadmap"
import { IdoProgress } from "@/components/ido-progress"
import { TokenStats } from "@/components/token-stats"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FamilyImpactSection />
        <TradingInterface />
        <TokenRoadmap />
        <IdoProgress />
        <TokenStats />
      </main>
      <Footer />
    </div>
  )
}
