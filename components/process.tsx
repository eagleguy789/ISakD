"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { FileText, Boxes, Settings, CheckCircle, ClipboardList, PenTool, MessageSquare, Lightbulb } from "lucide-react"
import { useState } from "react"

export function Process() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [isMaterialOpen, setIsMaterialOpen] = useState(false)

  const steps = [
    {
      icon: FileText,
      title: "1. 상담 및 설계",
      description: "고객의 요구사항을 파악하고 3D 모델링 및 설계도를 작성합니다",
      hasDetail: true,
    },
    {
      icon: Boxes,
      title: "2. 소재 선정",
      description: "제품 특성에 맞는 최적의 소재와 제작 방식을 제안합니다",
      hasDetail: true,
    },
    {
      icon: Settings,
      title: "3. 정밀 가공",
      description: "CNC 가공 또는 3D 프린팅으로 정밀하게 제작합니다",
      hasDetail: false,
    },
    {
      icon: CheckCircle,
      title: "4. 검수 및 납품",
      description: "최종 품질 검사를 거쳐 고객에게 납품합니다",
      hasDetail: false,
    },
  ]

  const handleStepClick = (stepTitle: string) => {
    if (stepTitle === "1. 상담 및 설계") {
      setIsConsultationOpen(true)
    } else if (stepTitle === "2. 소재 선정") {
      setIsMaterialOpen(true)
    }
  }

  const consultationDetails = [
    {
      icon: MessageSquare,
      title: "초기 상담",
      description: "고객님의 프로젝트 목적, 사용 환경, 예산 등 기본 요구사항을 상세히 파악합니다.",
    },
    {
      icon: ClipboardList,
      title: "요구사항 수집",
      description: "제품의 크기, 재질, 색상, 기능적 요소 등 상세 스펙을 문서화하여 정리합니다.",
    },
    {
      icon: Lightbulb,
      title: "아이디어 구체화",
      description: "고객의 아이디어를 실현 가능한 형태로 발전시키고, 최적의 제작 방안을 제안합니다.",
    },
    {
      icon: PenTool,
      title: "설계도 작성",
      description: "전문 3D 모델링 소프트웨어를 활용하여 정밀한 설계도와 렌더링 이미지를 제작합니다.",
    },
  ]

  const materials = [
    {
      name: "ABS",
      category: "플라스틱",
      color: "bg-yellow-500",
      description: "내충격성과 내열성이 우수한 범용 엔지니어링 플라스틱입니다.",
      features: ["내충격성 우수", "가공 용이", "도장/도금 가능", "내열성 양호"],
      usage: ["가전제품 외관", "자동차 내장재", "전자기기 케이스", "장난감"],
    },
    {
      name: "알루미늄",
      category: "금속",
      color: "bg-slate-400",
      description: "가볍고 내식성이 뛰어나며, 다양한 표면 처리가 가능한 경량 금속입니다.",
      features: ["경량", "내식성 우수", "열전도율 높음", "아노다이징 가능"],
      usage: ["스마트폰 프레임", "노트북 외관", "항공/자동차 부품", "방열판"],
    },
    {
      name: "아크릴",
      category: "플라스틱",
      color: "bg-cyan-400",
      description: "투명도가 높고 가공이 용이하며, 다양한 색상 표현이 가능합니다.",
      features: ["고투명도", "내후성 우수", "착색 용이", "가공성 양호"],
      usage: ["디스플레이 커버", "조명 부품", "사인물", "전시용 모형"],
    },
    {
      name: "PLA",
      category: "3D 프린팅",
      color: "bg-green-500",
      description: "친환경 바이오 플라스틱으로 3D 프린팅에 가장 널리 사용됩니다.",
      features: ["친환경 소재", "프린팅 용이", "치수 안정성", "저렴한 비용"],
      usage: ["프로토타입 제작", "교육용 모형", "간단한 부품", "예술 작품"],
    },
    {
      name: "PETG",
      category: "3D 프린팅",
      color: "bg-blue-500",
      description: "PLA보다 강도가 높고 유연성이 있어 기능성 부품에 적합합니다.",
      features: ["높은 강도", "내화학성", "유연성", "투명도 양호"],
      usage: ["기능성 부품", "식품 용기", "의료 기기", "보호 커버"],
    },
    {
      name: "우레탄",
      category: "고무/수지",
      color: "bg-orange-500",
      description: "탄성과 내마모성이 뛰어나 충격 흡수가 필요한 부품에 적합합니다.",
      features: ["우수한 탄성", "내마모성", "충격 흡수", "다양한 경도"],
      usage: ["쿠션 부품", "롤러", "씰/패킹", "범퍼"],
    },
    {
      name: "실리콘",
      category: "고무/수지",
      color: "bg-pink-400",
      description: "내열성과 유연성이 뛰어나며 인체에 무해한 소재입니다.",
      features: ["내열성 우수", "인체 무해", "절연성", "유연성"],
      usage: ["의료기기", "주방용품", "전자기기 커버", "웨어러블 기기"],
    },
    {
      name: "스테인리스",
      category: "금속",
      color: "bg-gray-500",
      description: "내식성과 강도가 뛰어나 위생적이고 견고한 제품에 사용됩니다.",
      features: ["내식성 최고", "위생적", "고강도", "내열성"],
      usage: ["의료기기", "주방기기", "산업용 부품", "정밀 부품"],
    },
    {
      name: "목재",
      category: "자연소재",
      color: "bg-amber-600",
      description: "자연스러운 질감과 따뜻한 느낌을 주는 천연 소재입니다.",
      features: ["자연스러운 질감", "가공 용이", "친환경", "고급스러움"],
      usage: ["가구 모형", "인테리어 부품", "전시용 모형", "공예품"],
    },
    {
      name: "레진",
      category: "3D 프린팅",
      color: "bg-purple-500",
      description: "고해상도의 정밀한 표면 품질을 구현할 수 있는 광경화성 수지입니다.",
      features: ["초정밀 가공", "매끄러운 표면", "고해상도", "다양한 물성"],
      usage: ["주얼리 원형", "치과 모형", "피규어", "정밀 부품"],
    },
  ]

  const categoryColors: Record<string, string> = {
    "플라스틱": "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30",
    "금속": "text-slate-600 bg-slate-100 dark:text-slate-400 dark:bg-slate-900/30",
    "3D 프린팅": "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30",
    "고무/수지": "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30",
    "자연소재": "text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30",
  }

  return (
    <>
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
              <Card 
                key={index} 
                className={`relative group hover:shadow-lg transition-all duration-300 ${step.hasDetail ? "cursor-pointer hover:-translate-y-1" : ""}`}
                onClick={() => step.hasDetail && handleStepClick(step.title)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    <step.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-bold">{step.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                  {step.hasDetail && (
                    <p className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-2">
                      클릭하여 자세히 보기 →
                    </p>
                  )}
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
            <Card 
              className="max-w-3xl mx-auto bg-primary text-primary-foreground cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setIsMaterialOpen(true)}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">사용 가능한 소재</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {materials.map((material) => (
                    <span
                      key={material.name}
                      className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium hover:bg-primary-foreground/20 transition-colors"
                    >
                      {material.name}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-primary-foreground/70 mt-4">
                  클릭하여 각 소재의 상세 정보 보기 →
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 상담 및 설계 상세 다이얼로그 */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              상담 및 설계
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              고객의 요구사항을 체계적으로 수집하고, 전문적인 설계도를 작성하여 프로젝트의 성공적인 시작을 돕습니다.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* 프로세스 단계 */}
            <div className="grid gap-4">
              {consultationDetails.map((detail, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <detail.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{detail.title}</h4>
                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 수집 정보 안내 */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">📋 수집하는 주요 정보</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>제품 용도 및 목적</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>희망 크기 및 수량</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>재질 및 색상 요구</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>납기 일정</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>예산 범위</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>참고 이미지/도면</span>
                </div>
              </div>
            </div>

            {/* 결과물 안내 */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">✅ 상담 후 제공되는 결과물</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>상세 요구사항 정리 문서</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>3D 모델링 설계도 (CAD 파일)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>렌더링 이미지 (시각화 자료)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>견적서 및 제작 일정표</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="border-t pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                지금 바로 상담을 시작하세요!
              </p>
              <a 
                href="#contact" 
                onClick={() => setIsConsultationOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                상담 문의하기
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 소재 선정 상세 다이얼로그 */}
      <Dialog open={isMaterialOpen} onOpenChange={setIsMaterialOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Boxes className="h-5 w-5" />
              </div>
              소재 선정 가이드
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              프로젝트의 목적과 요구사항에 맞는 최적의 소재를 선택할 수 있도록 각 소재의 특성과 용도를 안내합니다.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* 소재 카테고리 안내 */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(categoryColors).map((category) => (
                <span
                  key={category}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* 소재 목록 */}
            <div className="grid gap-4">
              {materials.map((material, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* 소재 색상 인디케이터 */}
                    <div className={`w-12 h-12 rounded-lg ${material.color} flex items-center justify-center shrink-0`}>
                      <span className="text-white font-bold text-xs">
                        {material.name.slice(0, 2)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg">{material.name}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[material.category]}`}>
                          {material.category}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {material.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        {/* 특성 */}
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1.5">주요 특성</p>
                          <div className="flex flex-wrap gap-1">
                            {material.features.map((feature, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 용도 */}
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1.5">적용 분야</p>
                          <div className="flex flex-wrap gap-1">
                            {material.usage.map((use, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 rounded bg-accent/10 text-accent text-xs"
                              >
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 소재 선정 도움말 */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">💡 소재 선정 시 고려사항</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>용도:</strong> 전시용, 기능 테스트, 양산 검토 등</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>환경:</strong> 실내/실외, 온도, 습도 조건</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>강도:</strong> 내충격성, 하중 지지력</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>외관:</strong> 투명도, 색상, 표면 질감</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>가공:</strong> 정밀도, 복잡한 형상 여부</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>예산:</strong> 제작 비용, 납기 일정</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                어떤 소재가 적합한지 잘 모르시겠나요? 전문가와 상담하세요!
              </p>
              <a 
                href="#contact" 
                onClick={() => setIsMaterialOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                소재 상담 문의하기
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
