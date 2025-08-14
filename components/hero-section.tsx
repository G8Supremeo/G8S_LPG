import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-background to-background" />

      <div className="container relative px-4">
        <div className="max-w-4xl mx-auto text-center elegant-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm sleek-border">
            <Zap className="h-4 w-4 mr-2 text-blue-600" />
            Now Live on Blockchain
          </Badge>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent">
            Unlock the Future of Trading with G8S
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience unparalleled sophistication and innovation in DeFi. Buy G8S tokens with PUSD and join the next
            generation of decentralized trading.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="g8s-gradient hover:opacity-90 transition-opacity text-white px-8 py-3 text-lg elegant-glow"
            >
              Buy G8S Tokens
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg sleek-border hover:bg-blue-50/50 bg-transparent"
            >
              View Analytics
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-blue-100/80 flex items-center justify-center mb-4 elegant-glow">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Advanced Trading</h3>
              <p className="text-sm text-muted-foreground">Professional-grade tools for sophisticated G8S trading</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-blue-100/80 flex items-center justify-center mb-4 elegant-glow">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Audited</h3>
              <p className="text-sm text-muted-foreground">Smart contracts audited by leading security firms</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-blue-100/80 flex items-center justify-center mb-4 elegant-glow">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Optimized PUSD to G8S swaps with minimal fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
