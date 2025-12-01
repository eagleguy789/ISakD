"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-[url('/industrial-manufacturing-prototype-machinery.jpg')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="text-sm font-medium text-accent mb-4 tracking-wider uppercase">
              Prototype & Mockup Manufacturing
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            아이디어를
            <br />
            <span className="text-accent">현실로 구현</span>합니다
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            CNC 정밀 가공과 3D 프린팅 기술로 다양한 산업 제품의 프로토타입을 제작합니다. 모바일 기기부터 대형 가전,
            반도체까지 모든 분야의 목업 제작을 지원합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group text-base" onClick={scrollToContact}>
              프로젝트 문의하기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
              onClick={() => {
                const element = document.getElementById("portfolio")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              작업 사례 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
