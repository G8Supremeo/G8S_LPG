"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FamilyImpactSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            Real Impact
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Bringing Joy to Every Kitchen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            G8S_LPG tokens represent more than investment - they represent families cooking together, sharing meals, and
            creating memories with reliable, clean energy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
              <img
                src="/happy-family-cooking.png"
                alt="Happy family cooking together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Cooking Time</h3>
              <p className="text-gray-600">
                Reliable LPG supply means families can cook nutritious meals together, strengthening bonds over shared
                kitchen experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
              <img
                src="/mother-children-baking.png"
                alt="Mother and children baking together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-600/10"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creating Memories</h3>
              <p className="text-gray-600">
                From birthday cakes to holiday feasts, G8S LPG ensures every special moment can be celebrated with
                home-cooked love.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
              <img
                src="/grandparents-grandchildren-cooking.png"
                alt="Grandparents cooking with grandchildren"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-600/10"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Generational Bonds</h3>
              <p className="text-gray-600">
                Traditional recipes passed down through generations, made possible by consistent, clean-burning LPG
                energy.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Live Impact</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">2.5M+</div>
            <div className="text-sm text-gray-600">Families Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}
