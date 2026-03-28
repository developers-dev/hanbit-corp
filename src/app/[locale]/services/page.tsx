"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "AI & Data Solutions",
      subtitle: "지능형 데이터 분석 및 AI 솔루션",
      description:
        "머신러닝, 데이터 사이언스, LLM 파인튜닝을 통해 비즈니스 인사이트를 제공하고 자동화된 의사결정을 지원합니다.",
      features: [
        "데이터 분석 및 시각화 (DA)",
        "머신러닝 모델 개발 (DS)",
        "데이터 파이프라인 구축 (DE)",
        "ML 시스템 운영 (MLE)",
        "LLM 파인튜닝 및 최적화",
        "예측 분석 및 추천 시스템",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "Apache Spark", "MLflow"],
      price: "프로젝트별 견적",
    },
    {
      title: "Web Development",
      subtitle: "확장 가능한 웹 애플리케이션 개발",
      description: "최신 기술 스택을 활용하여 성능과 사용자 경험을 모두 만족시키는 웹 애플리케이션을 구축합니다.",
      features: [
        "React/Next.js 프론트엔드 개발",
        "Node.js/Python 백엔드 API",
        "데이터베이스 설계 및 최적화",
        "반응형 웹 디자인",
        "성능 최적화 및 SEO",
        "실시간 기능 구현",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
      price: "월 300만원부터",
    },
    {
      title: "System Architecture",
      subtitle: "견고하고 확장 가능한 시스템 설계",
      description: "클라우드 네이티브 아키텍처와 마이크로서비스를 통해 안정적이고 확장 가능한 시스템을 설계합니다.",
      features: [
        "클라우드 인프라 설계",
        "마이크로서비스 아키텍처",
        "DevOps 파이프라인 구축",
        "컨테이너화 및 오케스트레이션",
        "모니터링 및 로깅 시스템",
        "보안 및 성능 최적화",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      price: "컨설팅 시간당 15만원",
    },
    {
      title: "Custom Platforms",
      subtitle: "맞춤형 플랫폼 및 솔루션 개발",
      description: "비즈니스 요구사항에 완벽히 맞는 맞춤형 플랫폼과 통합 솔루션을 개발합니다.",
      features: [
        "E-commerce 플랫폼 구축",
        "CMS 및 관리 시스템",
        "모바일 애플리케이션",
        "API 통합 및 연동",
        "레거시 시스템 현대화",
        "커스텀 비즈니스 로직",
      ],
      technologies: ["React Native", "Flutter", "GraphQL", "Microservices", "REST API", "WebSocket"],
      price: "프로젝트별 견적",
    },
  ]

  const process = [
    { step: "01", title: "요구사항 분석", desc: "비즈니스 목표와 기술 요구사항을 정밀하게 분석합니다" },
    { step: "02", title: "설계 및 계획", desc: "최적의 아키텍처와 개발 계획을 수립합니다" },
    { step: "03", title: "개발 및 구현", desc: "애자일 방법론으로 단계별 개발을 진행합니다" },
    { step: "04", title: "테스트 및 배포", desc: "철저한 테스트와 안정적인 배포를 수행합니다" },
  ]

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
              Services
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]"
            >
              전문 서비스
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              정밀한 기술력과 완벽한 품질로 비즈니스 성공을 이끄는 차별화된 개발 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 px-6">
        <div className="max-w-[1120px] mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid lg:grid-cols-[1fr_1.2fr] gap-12 py-14 border-b last:border-b-0 border-warm-border"
            >
              <div>
                <span
                  className="text-sm font-medium mb-4 block text-copper font-serif"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-2xl mb-2 font-serif text-navy font-semibold"
                >
                  {service.title}
                </h3>
                <p className="text-sm font-medium mb-5 text-copper">
                  {service.subtitle}
                </p>
                <p className="text-[15px] leading-relaxed mb-6 text-warm-600">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-warm-100 text-warm-600 border border-warm-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <span className="text-xl font-bold text-navy">
                    {service.price}
                  </span>
                  <span className="text-sm ml-2 text-warm-500">부가세 별도</span>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 text-sm">
                  상담 문의하기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-5 text-warm-500">
                  주요 기능
                </h4>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-copper" />
                      <span className="text-[15px] text-warm-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              Process
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.5rem)] font-serif text-navy font-bold"
            >
              개발 프로세스
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {process.map((item) => (
              <div key={item.step}>
                <span
                  className="text-3xl font-bold block mb-4 font-serif text-warm-300"
                >
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-navy">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-[600px] mx-auto text-center">
          <h2
            className="text-[clamp(2rem,3.5vw,2.5rem)] mb-6 font-serif text-navy font-bold"
          >
            프로젝트를 시작하세요
          </h2>
          <p className="text-warm-600 leading-relaxed text-lg mb-10">
            무료 상담을 통해 최적의 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
              무료 상담 신청
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 hover:bg-warm-100">
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
