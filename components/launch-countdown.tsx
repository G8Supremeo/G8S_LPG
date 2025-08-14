"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set launch date to 3 months from now
    const launchDate = new Date()
    launchDate.setMonth(launchDate.getMonth() + 3)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">LPG Infrastructure Launch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary LPG distribution network powered by blockchain technology. Bringing clean, affordable cooking
            gas to families worldwide.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Countdown to Launch</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{timeLeft.days}</div>
                <div className="text-gray-600 font-medium">Days</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{timeLeft.hours}</div>
                <div className="text-gray-600 font-medium">Hours</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{timeLeft.minutes}</div>
                <div className="text-gray-600 font-medium">Minutes</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{timeLeft.seconds}</div>
                <div className="text-gray-600 font-medium">Seconds</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">What's Coming:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Smart Distribution Network
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Automated Supply Chain
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Mobile Payment Integration
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
