"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Clock } from "lucide-react"

export function IdoProgress() {
  // Mock data - replace with real contract data
  const idoData = {
    totalRaised: 2850000,
    targetAmount: 5000000,
    tokensSold: 14250000,
    totalTokens: 25000000,
    participants: 1247,
    timeRemaining: "15 days, 8 hours",
    currentPrice: 0.2,
    nextPrice: 0.25,
  }

  const progressPercentage = (idoData.totalRaised / idoData.targetAmount) * 100
  const tokenProgressPercentage = (idoData.tokensSold / idoData.totalTokens) * 100

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            Live IDO Status
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Initial DEX Offering Progress</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of investors in revolutionizing the LPG industry with G8S tokens.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Progress Card */}
          <Card className="lg:col-span-2 border-0 shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">IDO Progress</CardTitle>
                <Badge className="bg-white/20 text-white border-white/30">
                  {progressPercentage.toFixed(1)}% Complete
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-100">Amount Raised</span>
                  <span className="text-2xl font-bold">${idoData.totalRaised.toLocaleString()} PUSD</span>
                </div>
                <Progress value={progressPercentage} className="h-3 bg-blue-800/50" />
                <div className="flex justify-between text-sm text-blue-200 mt-2">
                  <span>Target: ${idoData.targetAmount.toLocaleString()} PUSD</span>
                  <span>{progressPercentage.toFixed(1)}%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-100">Tokens Sold</span>
                  <span className="text-xl font-bold">{(idoData.tokensSold / 1000000).toFixed(1)}M G8S</span>
                </div>
                <Progress value={tokenProgressPercentage} className="h-2 bg-blue-800/50" />
                <div className="flex justify-between text-sm text-blue-200 mt-2">
                  <span>Total: {idoData.totalTokens / 1000000}M G8S</span>
                  <span>{tokenProgressPercentage.toFixed(1)}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">${idoData.currentPrice}</div>
                  <div className="text-blue-200 text-sm">Current Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">${idoData.nextPrice}</div>
                  <div className="text-blue-200 text-sm">Next Round</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{idoData.participants.toLocaleString()}</div>
                    <div className="text-gray-600">Participants</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{idoData.timeRemaining}</div>
                    <div className="text-gray-600">Time Remaining</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">+25% ROI</div>
                    <div className="text-gray-600">Projected Return</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block border-0 shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
              <p className="text-blue-100 mb-6 max-w-md">
                Join the revolution in LPG distribution and earn rewards while making a positive impact.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Buy G8S Tokens Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
