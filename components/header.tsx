"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Wallet, Settings } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
            <span className="text-white font-bold text-sm">G8S</span>
          </div>
          <span className="font-serif font-bold text-xl">G8S_LPG</span>
          <Badge variant="secondary" className="text-xs">
            IDO
          </Badge>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#trade" className="text-sm font-medium hover:text-primary transition-colors">
            Trade
          </a>
          <a href="#analytics" className="text-sm font-medium hover:text-primary transition-colors">
            Analytics
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Settings className="h-4 w-4" />
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            <a href="#trade" className="block text-sm font-medium hover:text-primary transition-colors">
              Trade
            </a>
            <a href="#analytics" className="block text-sm font-medium hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#portfolio" className="block text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#docs" className="block text-sm font-medium hover:text-primary transition-colors">
              Docs
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
