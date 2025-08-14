"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"

export function TokenRoadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Token Launch & IDO",
      status: "completed",
      date: "Q1 2024",
      items: [
        "Smart contract deployment",
        "Initial DEX Offering launch",
        "Community building",
        "Partnership announcements",
      ],
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      status: "in-progress",
      date: "Q2 2024",
      items: [
        "Trading platform optimization",
        "Mobile app development",
        "Advanced analytics dashboard",
        "Staking mechanism implementation",
      ],
    },
    {
      phase: "Phase 3",
      title: "LPG Infrastructure",
      status: "upcoming",
      date: "Q3 2024",
      items: [
        "LPG supply chain integration",
        "Distribution network expansion",
        "Smart meter deployment",
        "IoT monitoring systems",
      ],
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      status: "upcoming",
      date: "Q4 2024",
      items: [
        "International market entry",
        "Regulatory compliance",
        "Cross-chain integration",
        "Enterprise partnerships",
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "in-progress":
        return <Clock className="w-6 h-6 text-blue-500" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">In Progress</Badge>
      default:
        return (
          <Badge variant="outline" className="text-gray-600">
            Upcoming
          </Badge>
        )
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            Development Timeline
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">G8S Token Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic roadmap outlines the journey from token launch to global LPG infrastructure revolution.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg transition-all duration-300 hover:shadow-xl ${
                item.status === "in-progress" ? "ring-2 ring-blue-200 bg-blue-50/30" : "bg-white"
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{getStatusIcon(item.status)}</div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      {getStatusBadge(item.status)}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {item.phase}
                      </Badge>
                      <span className="text-gray-500 font-medium">{item.date}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.status === "completed"
                                ? "bg-green-500"
                                : item.status === "in-progress"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                            }`}
                          ></div>
                          <span className="text-gray-700">{subItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
