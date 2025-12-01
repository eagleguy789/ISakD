"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Printer, Smartphone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현시 이메일 전송 로직 추가
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">문의하기</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            프로토타입 제작이 필요하신가요? 언제든지 문의주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">프로젝트 문의</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    이름 *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    autoComplete="name"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    이메일 *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    autoComplete="email"
                    inputMode="email"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    연락처
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    autoComplete="tel"
                    inputMode="tel"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    문의 내용 *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="제작하고자 하는 제품과 요구사항을 자세히 적어주세요"
                    className="min-h-[120px] resize-y"
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base" size="lg">
                  문의하기
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">연락처 정보</h3>
                <div className="space-y-5">
                  <a 
                    href="tel:031-313-5710" 
                    className="flex items-start gap-4 p-2 -m-2 rounded-lg hover:bg-accent/5 active:bg-accent/10 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="font-medium mb-1">전화번호</div>
                      <div className="text-sm text-muted-foreground">031-313-5710</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-2 -m-2">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Printer className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="font-medium mb-1">FAX</div>
                      <div className="text-sm text-muted-foreground">031-313-5711</div>
                    </div>
                  </div>

                  <a 
                    href="tel:010-9252-4644" 
                    className="flex items-start gap-4 p-2 -m-2 rounded-lg hover:bg-accent/5 active:bg-accent/10 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="font-medium mb-1">핸드폰</div>
                      <div className="text-sm text-muted-foreground">010-9252-4644</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:bini49@naver.com" 
                    className="flex items-start gap-4 p-2 -m-2 rounded-lg hover:bg-accent/5 active:bg-accent/10 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="font-medium mb-1">이메일</div>
                      <div className="text-sm text-muted-foreground">bini49@naver.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-2 -m-2">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="font-medium mb-1">주소</div>
                      <div className="text-sm text-muted-foreground">서울특별시 강남구</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3">영업시간</h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between opacity-60">
                    <span>토·일·공휴일</span>
                    <span>휴무</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
