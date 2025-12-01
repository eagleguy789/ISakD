import { Card, CardContent } from "@/components/ui/card"
import { FileText, Boxes, Settings, CheckCircle } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: FileText,
      title: "1. 상담 및 설계",
      description: "고객의 요구사항을 파악하고 3D 모델링 및 설계도를 작성합니다",
    },
    {
      icon: Boxes,
      title: "2. 소재 선정",
      description: "제품 특성에 맞는 최적의 소재와 제작 방식을 제안합니다",
    },
    {
      icon: Settings,
      title: "3. 정밀 가공",
      description: "CNC 가공 또는 3D 프린팅으로 정밀하게 제작합니다",
    },
    {
      icon: CheckCircle,
      title: "4. 검수 및 납품",
      description: "최종 품질 검사를 거쳐 고객에게 납품합니다",
    },
  ]

  return (
    <section id="process" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">제작 공정</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            체계적인 프로세스로 최고 품질의 프로토타입을 제작합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  <step.icon className="h-7 w-7" />
                </div>

                <h3 className="text-lg font-bold">{step.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">사용 가능한 소재</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["ABS", "알루미늄", "아크릴", "PLA", "PETG", "우레탄", "실리콘", "스테인리스", "목재", "레진"].map(
                  (material) => (
                    <span
                      key={material}
                      className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium"
                    >
                      {material}
                    </span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
