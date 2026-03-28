"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import Link from "next/link"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    { text: "HANBIT의 정밀한 개발 프로세스 덕분에 완벽한 결과물을 얻을 수 있었습니다.", author: "김민수", company: "테크스타트업 CEO" },
    { text: "한 비트도 놓치지 않는 꼼꼼함으로 우리 비즈니스를 성공으로 이끌어주었습니다.", author: "이지영", company: "이커머스 대표" },
    { text: "기술적 전문성과 비즈니스 이해도를 모두 갖춘 최고의 파트너입니다.", author: "박준호", company: "핀테크 CTO" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    { num: "01", title: "AI & Data", desc: "머신러닝, 데이터 파이프라인, LLM 파인튜닝으로 데이터 기반 의사결정을 지원합니다." },
    { num: "02", title: "Web Development", desc: "React, Next.js 기반의 확장 가능한 웹 애플리케이션을 구축합니다." },
    { num: "03", title: "System Architecture", desc: "클라우드 네이티브 아키텍처와 DevOps로 안정적인 인프라를 설계합니다." },
    { num: "04", title: "Custom Platform", desc: "E-commerce, CMS, 모바일 앱 등 비즈니스에 맞는 맞춤형 플랫폼을 개발합니다." },
  ]

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[720px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-8 text-copper">
              Every Bit Matters
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.15] mb-8 font-serif font-bold text-navy">
              한 비트의 차이가
              <br />
              결과를 바꿉니다
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed mb-12 max-w-[540px] text-warm-600">
              정밀한 기술력과 깊은 비즈니스 이해를 바탕으로, 단 하나의 비트도 소홀히 하지 않는
              개발 파트너십을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200"
              >
                프로젝트 시작하기
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 hover:bg-warm-100"
              >
                포트폴리오 보기
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 pt-10 border-t border-warm-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "완료 프로젝트" },
              { value: "99.9%", label: "코드 정확도" },
              { value: "24/7", label: "기술 지원" },
              { value: "100%", label: "고객 만족" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[2rem] font-bold mb-1 font-serif text-navy">{stat.value}</div>
                <div className="text-sm text-warm-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">Services</p>
              <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] mb-6 font-serif font-bold text-navy">전문 서비스</h2>
              <p className="text-warm-600 leading-relaxed mb-8">
                AI/DATA부터 웹 개발까지, 각 분야의 전문성으로 최적의 솔루션을 제공합니다.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-warm-100"
              >
                전체 서비스 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              {services.map((service) => (
                <div key={service.num} className="py-8 border-b border-warm-border last:border-b-0">
                  <div className="flex gap-6 items-start">
                    <span className="text-sm font-medium mt-1 shrink-0 font-serif text-copper">
                      {service.num}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-navy">{service.title}</h3>
                      <p className="text-[15px] leading-relaxed text-warm-600">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why HANBIT */}
      <section className="py-24 px-6 bg-warm-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">Philosophy</p>
              <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] mb-8 font-serif font-bold text-navy">우리의 개발 철학</h2>
              <p className="text-lg text-warm-600 leading-relaxed mb-8">
                단 하나의 비트도 허투루 다루지 않는 정밀함으로, 완벽한 솔루션을 만들어갑니다.
              </p>

              {/* Code preview */}
              <div className="rounded-xl overflow-hidden bg-[#1a2332] border border-[#2a3545]">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-[#2a3545]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-xs text-[#5a6a7a]">hanbit.ts</span>
                </div>
                <div className="p-5 font-mono text-sm leading-7 text-[#a0b0c0]">
                  <div><span className="text-[#7aa2d8]">const</span> <span className="text-[#d4a76a]">HANBIT</span> <span className="text-[#7aa2d8]">=</span> {"{"}</div>
                  <div className="ml-6">precision: <span className="text-[#8cc084]">100</span>,</div>
                  <div className="ml-6">quality: <span className="text-[#8cc084]">&apos;premium&apos;</span>,</div>
                  <div className="ml-6">commitment: <span className="text-[#8cc084]">&apos;absolute&apos;</span></div>
                  <div>{"}"}</div>
                  <div className="mt-3 text-[#4a5a6a]">// 완벽함을 추구하는 개발</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:pt-16">
              {[
                { title: "정밀함", desc: "모든 코드 라인에 목적과 의미를 부여합니다. 불필요한 복잡성 없이, 정확히 필요한 만큼의 코드를 작성합니다." },
                { title: "안정성", desc: "견고하고 확장 가능한 아키텍처를 구축합니다. 오늘의 요구사항과 내일의 성장을 함께 설계합니다." },
                { title: "효율성", desc: "최적화된 성능으로 사용자 경험을 극대화합니다. 빠른 응답 속도와 안정적 운영을 보장합니다." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <div className="text-[2.5rem] font-bold leading-none shrink-0 w-12 font-serif text-warm-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-navy">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-warm-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-warm-100">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-12 text-copper">Clients</p>
          <div className="min-h-[180px] flex flex-col items-center justify-center">
            <blockquote className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed mb-8 font-serif text-navy">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </blockquote>
            <div>
              <div className="font-medium text-warm-800">{testimonials[currentTestimonial].author}</div>
              <div className="text-sm mt-1 text-warm-500">{testimonials[currentTestimonial].company}</div>
            </div>
          </div>
          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentTestimonial ? "bg-navy" : "bg-warm-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] mb-6 font-serif font-bold text-navy">
            프로젝트를 시작해보세요
          </h2>
          <p className="text-lg text-warm-600 leading-relaxed mb-10">
            완벽한 솔루션을 위한 첫 걸음을 함께 시작하겠습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200"
            >
              무료 상담 신청
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 hover:bg-warm-100"
            >
              회사 소개 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
