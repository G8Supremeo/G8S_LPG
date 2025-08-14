"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownUp, Settings, TrendingUp, Wallet } from "lucide-react"

export function TradingInterface() {
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")

  return (
    <section id="trade" className="py-20 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">Advanced Trading Interface</h2>
            <p className="text-lg text-muted-foreground">
              Buy G8S tokens with PUSD - minimal slippage, maximum efficiency
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Trading Panel */}
            <Card className="sleek-border elegant-glow bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Buy G8S Tokens</span>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="swap" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="swap">Instant Buy</TabsTrigger>
                    <TabsTrigger value="limit">Limit Order</TabsTrigger>
                  </TabsList>

                  <TabsContent value="swap" className="space-y-4">
                    {/* From Token - PUSD */}
                    <div className="space-y-2">
                      <Label>Pay with</Label>
                      <div className="flex items-center space-x-2 rounded-lg sleek-border bg-background/50 p-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">P</span>
                          </div>
                          <span className="font-medium">PUSD</span>
                        </div>
                        <Input
                          placeholder="0.00"
                          value={fromAmount}
                          onChange={(e) => setFromAmount(e.target.value)}
                          className="border-0 bg-transparent text-right text-lg font-medium"
                        />
                      </div>
                      <div className="text-right text-sm text-muted-foreground">Balance: 1,250.00 PUSD</div>
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center">
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <ArrowDownUp className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* To Token - G8S */}
                    <div className="space-y-2">
                      <Label>Receive</Label>
                      <div className="flex items-center space-x-2 rounded-lg sleek-border bg-background/50 p-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">G8S</span>
                          </div>
                          <span className="font-medium">G8S</span>
                        </div>
                        <Input
                          placeholder="0.00"
                          value={toAmount}
                          onChange={(e) => setToAmount(e.target.value)}
                          className="border-0 bg-transparent text-right text-lg font-medium"
                          readOnly
                        />
                      </div>
                      <div className="text-right text-sm text-muted-foreground">Balance: 0.00 G8S</div>
                    </div>

                    {/* Swap Details */}
                    <div className="space-y-2 rounded-lg bg-blue-50/50 p-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rate</span>
                        <span>1 PUSD = 850 G8S</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Slippage</span>
                        <span>0.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fee</span>
                        <span>0.15%</span>
                      </div>
                    </div>

                    {/* Buy Button */}
                    <Button className="w-full g8s-gradient hover:opacity-90 transition-opacity">
                      <Wallet className="mr-2 h-4 w-4" />
                      Connect Wallet to Buy G8S
                    </Button>
                  </TabsContent>

                  <TabsContent value="limit" className="space-y-4">
                    <div className="text-center text-muted-foreground py-8">Limit orders coming soon...</div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Chart/Info Panel */}
            <Card className="sleek-border elegant-glow bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                  G8S Token Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Price Info */}
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">$0.00118</div>
                    <div className="text-sm text-green-500">+18.7% (24h)</div>
                  </div>

                  {/* Mock Chart */}
                  <div className="h-48 rounded-lg g8s-light-gradient flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <TrendingUp className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                      <p>Real-time price chart</p>
                      <p className="text-xs">Powered by G8S Analytics</p>
                    </div>
                  </div>

                  {/* Token Info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Cap</span>
                      <span>$1.18M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">24h Volume</span>
                      <span>$89.2K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Supply</span>
                      <span>1B G8S</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Token Contract</span>
                      <span className="font-mono text-xs">0xcD6a...9Df9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IDO Contract</span>
                      <span className="font-mono text-xs">0xb27A...c2c</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
