"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export type PortfolioCategory = "전체" | "모바일 기기" | "가전제품" | "반도체" | "전자기기" | "산업용 제품"

const categoryMapping: Record<string, PortfolioCategory[]> = {
  "모바일 기기": ["모바일 기기"],
  "가전제품": ["가전제품"],
  "반도체 & 전자부품": ["반도체", "전자기기"],
  "산업용 제품": ["산업용 제품"],
}

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("전체")
  
  const projects = [
    {
      title: "스마트폰 프로토타입",
      category: "모바일 기기" as PortfolioCategory,
      image: "/smartphone-prototype-mockup.jpg",
      description: "CNC 알루미늄 가공",
    },
    {
      title: "냉장고 외관 목업",
      category: "가전제품" as PortfolioCategory,
      image: "/refrigerator-prototype-model.jpg",
      description: "ABS 재질 3D 프린팅",
    },
    {
      title: "메모리 반도체 모형",
      category: "반도체" as PortfolioCategory,
      image: "/semiconductor-chip-model.jpg",
      description: "아크릴 정밀 가공",
    },
    {
      title: "산업용 디스플레이",
      category: "전자기기" as PortfolioCategory,
      image: "/industrial-display-prototype.jpg",
      description: "복합 소재 제작",
    },
    {
      title: "자동차 부품",
      category: "산업용 제품" as PortfolioCategory,
      image: "/automotive-parts-prototype.jpg",
      description: "SLA 3D 프린팅",
    },
    {
      title: "의료기기 케이스",
      category: "산업용 제품" as PortfolioCategory,
      image: "/medical-device-case-mockup.jpg",
      description: "실리콘 몰딩",
    },
  ]

  const categories: PortfolioCategory[] = ["전체", "모바일 기기", "가전제품", "반도체", "전자기기", "산업용 제품"]

  // URL 해시에서 카테고리 읽기
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith("#portfolio-")) {
        const serviceCategory = decodeURIComponent(hash.replace("#portfolio-", ""))
        const mappedCategories = categoryMapping[serviceCategory]
        if (mappedCategories && mappedCategories.length > 0) {
          setSelectedCategory(mappedCategories[0])
          // 스크롤 처리
          setTimeout(() => {
            const portfolioSection = document.getElementById("portfolio")
            if (portfolioSection) {
              portfolioSection.scrollIntoView({ behavior: "smooth" })
            }
          }, 100)
        }
      }
    }

    // 초기 로드 시 해시 확인
    handleHashChange()

    // 해시 변경 감지
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const filteredProjects = selectedCategory === "전체" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">제작 사례</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            다양한 산업 분야에서 축적된 경험과 노하우를 확인하세요
          </p>
        </div>

        {/* 카테고리 필터 버튼 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            해당 카테고리의 제작 사례가 없습니다.
          </div>
        )}
      </div>
    </section>
  )
}
