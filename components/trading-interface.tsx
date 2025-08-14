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
    <section id="trade" className="py-20 bg-gradient-to-b from-background to-purple-950/10">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">Advanced Trading Interface</h2>
            <p className="text-lg text-muted-foreground">Swap tokens with minimal slippage and maximum efficiency</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Trading Panel */}
            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Swap Tokens</span>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="swap" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="swap">Swap</TabsTrigger>
                    <TabsTrigger value="limit">Limit Order</TabsTrigger>
                  </TabsList>

                  <TabsContent value="swap" className="space-y-4">
                    {/* From Token */}
                    <div className="space-y-2">
                      <Label>From</Label>
                      <div className="flex items-center space-x-2 rounded-lg border border-purple-500/20 bg-background/50 p-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600" />
                          <span className="font-medium">SOL</span>
                        </div>
                        <Input
                          placeholder="0.00"
                          value={fromAmount}
                          onChange={(e) => setFromAmount(e.target.value)}
                          className="border-0 bg-transparent text-right text-lg font-medium"
                        />
                      </div>
                      <div className="text-right text-sm text-muted-foreground">Balance: 12.45 SOL</div>
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center">
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <ArrowDownUp className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* To Token */}
                    <div className="space-y-2">
                      <Label>To</Label>
                      <div className="flex items-center space-x-2 rounded-lg border border-purple-500/20 bg-background/50 p-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">G8S</span>
                          </div>
                          <span className="font-medium">G8S_LPG</span>
                        </div>
                        <Input
                          placeholder="0.00"
                          value={toAmount}
                          onChange={(e) => setToAmount(e.target.value)}
                          className="border-0 bg-transparent text-right text-lg font-medium"
                          readOnly
                        />
                      </div>
                      <div className="text-right text-sm text-muted-foreground">Balance: 0.00 G8S_LPG</div>
                    </div>

                    {/* Swap Details */}
                    <div className="space-y-2 rounded-lg bg-purple-500/5 p-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rate</span>
                        <span>1 SOL = 1,250 G8S_LPG</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Slippage</span>
                        <span>0.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fee</span>
                        <span>0.25%</span>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                      <Wallet className="mr-2 h-4 w-4" />
                      Connect Wallet to Swap
                    </Button>
                  </TabsContent>

                  <TabsContent value="limit" className="space-y-4">
                    <div className="text-center text-muted-foreground py-8">Limit orders coming soon...</div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Chart/Info Panel */}
            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  G8S_LPG Price Chart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Price Info */}
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">$0.0024</div>
                    <div className="text-sm text-green-400">+12.5% (24h)</div>
                  </div>

                  {/* Mock Chart */}
                  <div className="h-48 rounded-lg bg-gradient-to-br from-purple-500/10 to-violet-500/10 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <TrendingUp className="mx-auto mb-2 h-8 w-8" />
                      <p>Price chart will be displayed here</p>
                    </div>
                  </div>

                  {/* Token Info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Cap</span>
                      <span>$2.4M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">24h Volume</span>
                      <span>$156K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Supply</span>
                      <span>1B G8S_LPG</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contract</span>
                      <span className="font-mono text-xs">0xcD6a...9Df9</span>
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
