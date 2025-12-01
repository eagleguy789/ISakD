"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl lg:text-2xl text-primary">이삭디자인</div>
            <div className="hidden sm:block text-xs lg:text-sm text-muted-foreground">ISAAC DESIGN</div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              제작 공정
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              문의하기
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-2 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-base font-medium hover:text-accent hover:bg-accent/5 active:bg-accent/10 transition-colors py-4 px-2 rounded-lg"
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-base font-medium hover:text-accent hover:bg-accent/5 active:bg-accent/10 transition-colors py-4 px-2 rounded-lg"
              >
                포트폴리오
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-base font-medium hover:text-accent hover:bg-accent/5 active:bg-accent/10 transition-colors py-4 px-2 rounded-lg"
              >
                제작 공정
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-base font-medium hover:text-accent hover:bg-accent/5 active:bg-accent/10 transition-colors py-4 px-2 rounded-lg"
              >
                문의하기
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
