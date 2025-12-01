import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Smartphone, Package, Printer } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "모바일 기기",
      description: "스마트폰, 태블릿 등 휴대용 전자기기의 정밀한 목업 제작",
      examples: ["스마트폰 케이스", "태블릿 프로토타입", "웨어러블 기기"],
    },
    {
      icon: Package,
      title: "가전제품",
      description: "냉장고, 세탁기 등 대형 가전제품의 실물 크기 목업",
      examples: ["냉장고 외관", "세탁기 인터페이스", "소형 가전"],
    },
    {
      icon: Cpu,
      title: "반도체 & 전자부품",
      description: "메모리, 칩셋 등 정밀 전자부품의 확대 모형 제작",
      examples: ["메모리 반도체", "PCB 프로토타입", "커넥터류"],
    },
    {
      icon: Printer,
      title: "산업용 제품",
      description: "다양한 산업 분야의 맞춤형 프로토타입 제작",
      examples: ["기계 부품", "자동차 부품", "의료기기"],
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">전문 제작 서비스</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            다양한 소재와 최신 가공 기술로 모든 산업 분야의 프로토타입을 제작합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="pt-2 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {example}
                      </span>
                    ))}
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
