"use client"

import { ArrowRight, ChevronRight } from "lucide-react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero — full-width dark */}
      <section className="bg-navy text-white pt-32 pb-24 lg:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-[800px]">
            <p className="text-copper text-sm font-semibold tracking-wider uppercase mb-6">
              Enterprise IT Solutions
            </p>
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.2] font-bold mb-8 text-white">
              기술의 본질에 집중하여
              <br />
              비즈니스의 미래를 설계합니다
            </h1>
            <p className="text-lg text-warm-400 leading-relaxed mb-10 max-w-[600px]">
              AI, 클라우드, 웹 플랫폼 전 영역에서 검증된 기술력으로
              엔터프라이즈급 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] transition-colors"
              >
                프로젝트 문의
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-warm-600 hover:border-warm-400 text-warm-300 hover:text-white px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors"
              >
                구축 사례 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="border-b border-warm-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: "50+", label: "프로젝트 수행", sub: "다양한 산업 분야" },
              { value: "99.9%", label: "시스템 가용성", sub: "엔터프라이즈급 안정성" },
              { value: "40%", label: "비용 절감 효과", sub: "클라우드 마이그레이션 평균" },
              { value: "24/7", label: "기술 지원 체계", sub: "전담 엔지니어 배치" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 lg:py-14 ${i < 3 ? "border-r border-warm-border" : ""} ${i % 2 === 0 && i < 2 ? "max-lg:border-r" : ""} ${i < 2 ? "max-lg:border-b max-lg:border-warm-border" : ""} px-6 lg:px-10`}
              >
                <div className="text-[2.5rem] font-bold text-navy mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-navy mb-1">{stat.label}</div>
                <div className="text-xs text-warm-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <p className="text-sm font-semibold text-copper tracking-wider uppercase mb-3">Core Services</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy">
                사업 영역
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline">
              전체 서비스 보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-warm-border rounded-xl overflow-hidden">
            {[
              {
                num: "01",
                title: "AI & Data",
                desc: "머신러닝 모델 개발, 데이터 파이프라인 구축, LLM 파인튜닝 등 데이터 기반 의사결정 체계를 구현합니다.",
                tags: ["ML/DL", "Data Engineering", "LLM"],
              },
              {
                num: "02",
                title: "Web Platform",
                desc: "대규모 트래픽을 처리하는 확장 가능한 웹 애플리케이션과 관리 시스템을 설계·개발합니다.",
                tags: ["React/Next.js", "Node.js", "TypeScript"],
              },
              {
                num: "03",
                title: "Cloud & Infra",
                desc: "클라우드 마이그레이션, 컨테이너 오케스트레이션, CI/CD 파이프라인 등 인프라 현대화를 수행합니다.",
                tags: ["AWS", "Kubernetes", "Terraform"],
              },
              {
                num: "04",
                title: "Custom Solution",
                desc: "E-commerce, CMS, 모바일 앱 등 비즈니스 요구사항에 최적화된 맞춤형 솔루션을 개발합니다.",
                tags: ["E-commerce", "Mobile", "API"],
              },
            ].map((service, i) => (
              <div
                key={service.num}
                className={`p-8 lg:p-10 ${i < 3 ? "lg:border-r border-warm-border" : ""} ${i < 2 ? "max-lg:border-b border-warm-border" : ""} ${i === 2 ? "max-lg:border-b border-warm-border" : ""} hover:bg-warm-100 transition-colors group`}
              >
                <span className="text-xs font-bold text-copper mb-6 block">{service.num}</span>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-warm-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs text-warm-500 bg-warm-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HANBIT — dark section */}
      <section className="bg-navy-dark text-white py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-semibold text-copper tracking-wider uppercase mb-3">Why HANBIT</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-8">
                왜 HANBIT과
                <br />
                함께해야 할까요
              </h2>
              <p className="text-warm-400 leading-relaxed mb-10">
                보이지 않는 곳까지 완벽을 추구하는 개발 철학으로,
                코드 한 줄부터 시스템 아키텍처까지 타협 없는 품질을 보장합니다.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline"
              >
                회사 소개 보기
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "검증된 기술력",
                  desc: "50건 이상의 프로젝트를 통해 검증된 엔지니어링 역량과 산업별 도메인 전문성을 보유하고 있습니다.",
                },
                {
                  num: "02",
                  title: "엔터프라이즈급 품질",
                  desc: "99.9% 가용성, 체계적인 테스트, 보안 표준 준수 등 대기업 수준의 품질 기준을 적용합니다.",
                },
                {
                  num: "03",
                  title: "전담 기술 지원",
                  desc: "프로젝트 완료 후에도 전담 엔지니어 배치를 통해 24/7 기술 지원과 유지보수를 제공합니다.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 p-6 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-sm font-bold text-copper shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-warm-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <p className="text-sm font-semibold text-copper tracking-wider uppercase mb-3">Case Studies</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy">
                주요 구축 사례
              </h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline">
              전체 사례 보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "AI/ML",
                title: "AI 추천 시스템 구축",
                client: "대형 이커머스 플랫폼",
                result: "구매 전환율 35% 향상",
              },
              {
                category: "Cloud",
                title: "클라우드 마이그레이션",
                client: "제조업 대기업",
                result: "운영비용 40% 절감",
              },
              {
                category: "Web",
                title: "핀테크 대시보드 개발",
                client: "금융 스타트업",
                result: "DAU 10,000+ 달성",
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/portfolio"
                className="bg-white rounded-xl p-8 border border-warm-border hover:border-copper/30 hover:shadow-lg transition-all group"
              >
                <span className="text-xs font-semibold text-copper mb-4 block">{project.category}</span>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-copper transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-warm-600 mb-6">{project.client}</p>
                <div className="pt-4 border-t border-warm-border">
                  <span className="text-sm font-bold text-navy">{project.result}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-copper tracking-wider uppercase mb-3">Process</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy">
              체계적인 개발 프로세스
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { step: "01", title: "요구사항 분석", desc: "비즈니스 목표와 기술 요구사항을 정밀 분석합니다" },
              { step: "02", title: "아키텍처 설계", desc: "최적의 시스템 구조와 기술 스택을 설계합니다" },
              { step: "03", title: "애자일 개발", desc: "스프린트 기반 반복 개발로 빠르게 가치를 전달합니다" },
              { step: "04", title: "배포 및 운영", desc: "안정적인 배포와 지속적인 모니터링을 수행합니다" },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center px-6 py-10">
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-warm-300" />
                )}
                <div className="text-3xl font-bold text-warm-300 mb-4">{item.step}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-24 px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-6">
            프로젝트를 함께 시작하세요
          </h2>
          <p className="text-warm-400 text-lg mb-10 leading-relaxed">
            HANBIT의 전문 엔지니어가 귀사의 기술 과제에 대한 최적의 솔루션을 제안드립니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] transition-colors"
            >
              프로젝트 문의하기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-warm-600 hover:border-warm-400 text-warm-300 hover:text-white px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors"
            >
              서비스 소개 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
