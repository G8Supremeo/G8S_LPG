import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Zap, Shield } from "lucide-react"

export function TokenStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-950/10 to-background">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">G8S_LPG Token Ecosystem</h2>
            <p className="text-lg text-muted-foreground">Discover the power and utility of our native token</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-muted-foreground">Price</span>
                </div>
                <div className="text-2xl font-bold">$0.0024</div>
                <div className="text-sm text-green-400">+12.5%</div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-muted-foreground">Holders</span>
                </div>
                <div className="text-2xl font-bold">12,450</div>
                <div className="text-sm text-blue-400">+8.2%</div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-muted-foreground">Volume 24h</span>
                </div>
                <div className="text-2xl font-bold">$156K</div>
                <div className="text-sm text-yellow-400">+24.1%</div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-medium text-muted-foreground">Market Cap</span>
                </div>
                <div className="text-2xl font-bold">$2.4M</div>
                <div className="text-sm text-purple-400">Rank #1,247</div>
              </CardContent>
            </Card>
          </div>

          {/* Token Utility */}
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Token Utility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">
                    1
                  </Badge>
                  <div>
                    <h4 className="font-medium">Governance Rights</h4>
                    <p className="text-sm text-muted-foreground">Vote on protocol upgrades and treasury decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">
                    2
                  </Badge>
                  <div>
                    <h4 className="font-medium">Staking Rewards</h4>
                    <p className="text-sm text-muted-foreground">Earn up to 15% APY by staking your tokens</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">
                    3
                  </Badge>
                  <div>
                    <h4 className="font-medium">Fee Discounts</h4>
                    <p className="text-sm text-muted-foreground">Reduced trading fees for token holders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">
                    4
                  </Badge>
                  <div>
                    <h4 className="font-medium">IDO Access</h4>
                    <p className="text-sm text-muted-foreground">Priority access to exclusive token launches</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Smart Contract Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Token Contract</span>
                    <span className="font-mono">0xcD6a...9Df9</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">IDO Contract</span>
                    <span className="font-mono">0xb27A...c2c</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Supply</span>
                    <span>1,000,000,000 G8S_LPG</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Circulating Supply</span>
                    <span>250,000,000 G8S_LPG</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Decimals</span>
                    <span>18</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Network</span>
                    <span>Ethereum</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/20">
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">✓ Verified Contract</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
