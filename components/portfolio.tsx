import { Card, CardContent } from "@/components/ui/card"

export function Portfolio() {
  const projects = [
    {
      title: "스마트폰 프로토타입",
      category: "모바일 기기",
      image: "/smartphone-prototype-mockup.jpg",
      description: "CNC 알루미늄 가공",
    },
    {
      title: "냉장고 외관 목업",
      category: "가전제품",
      image: "/refrigerator-prototype-model.jpg",
      description: "ABS 재질 3D 프린팅",
    },
    {
      title: "메모리 반도체 모형",
      category: "반도체",
      image: "/semiconductor-chip-model.jpg",
      description: "아크릴 정밀 가공",
    },
    {
      title: "산업용 디스플레이",
      category: "전자기기",
      image: "/industrial-display-prototype.jpg",
      description: "복합 소재 제작",
    },
    {
      title: "자동차 부품",
      category: "산업용 제품",
      image: "/automotive-parts-prototype.jpg",
      description: "SLA 3D 프린팅",
    },
    {
      title: "의료기기 케이스",
      category: "산업용 제품",
      image: "/medical-device-case-mockup.jpg",
      description: "실리콘 몰딩",
    },
  ]

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">제작 사례</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            다양한 산업 분야에서 축적된 경험과 노하우를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
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
      </div>
    </section>
  )
}
