"use client"

import { ArrowRight, ChevronRight } from "lucide-react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-navy text-white pt-36 pb-28 lg:pb-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-[860px]">
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.25] font-bold mb-8 text-white tracking-tight">
              기업의 기술 경쟁력을 설계합니다
            </h1>
            <p className="text-[17px] text-warm-400 leading-relaxed mb-10 max-w-[640px]">
              HANBIT은 AI, 클라우드, 데이터, 플랫폼 전 영역에 걸쳐
              국내외 기업의 디지털 전환과 시스템 고도화를 수행하고 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white px-7 py-3 rounded font-semibold text-[14px] transition-colors"
              >
                솔루션 도입 문의
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-warm-600 hover:border-warm-400 text-warm-300 hover:text-white px-7 py-3 rounded font-medium text-[14px] transition-colors"
              >
                구축 실적 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-warm-border py-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-semibold text-warm-500 tracking-wider uppercase shrink-0">
              주요 고객사 및 파트너
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {["금융그룹 A사", "제조 대기업 B사", "유통 C사", "IT 플랫폼 D사", "공공기관 E기관", "글로벌 F사"].map((name) => (
                <span key={name} className="text-sm font-medium text-warm-400 tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "200+", label: "누적 프로젝트", sub: "금융·제조·유통·공공 등" },
              { value: "99.9%", label: "서비스 가용성", sub: "SLA 기반 운영 보장" },
              { value: "8년", label: "업력", sub: "2019년 설립, 지속 성장" },
              { value: "30+", label: "전문 엔지니어", sub: "분야별 시니어급 인력" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[2.75rem] font-bold text-navy mb-2 tracking-tight">{stat.value}</div>
                <div className="text-[14px] font-semibold text-navy mb-1">{stat.label}</div>
                <div className="text-xs text-warm-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="bg-warm-100 py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
            <div>
              <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">Industries</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-navy">
                산업별 전문 솔루션
              </h2>
            </div>
            <p className="text-sm text-warm-600 max-w-md leading-relaxed">
              각 산업의 규제 환경, 비즈니스 프로세스, 기술 요구사항에 대한 깊은 이해를 바탕으로 최적화된 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { sector: "금융·핀테크", desc: "실시간 거래 시스템, 리스크 관리, 규제 준수 플랫폼 구축", projects: "45건+" },
              { sector: "제조·물류", desc: "스마트팩토리, 공급망 최적화, 예지보전 시스템 개발", projects: "38건+" },
              { sector: "유통·커머스", desc: "옴니채널 플랫폼, AI 추천, 대규모 트래픽 처리 시스템", projects: "52건+" },
              { sector: "공공·교육", desc: "행정 시스템 현대화, 데이터 포털, 교육 플랫폼 구축", projects: "28건+" },
              { sector: "헬스케어", desc: "의료 데이터 분석, EMR 연동, 원격 진료 플랫폼 개발", projects: "15건+" },
              { sector: "미디어·콘텐츠", desc: "콘텐츠 관리 시스템, 실시간 스트리밍, AI 기반 개인화", projects: "22건+" },
            ].map((item) => (
              <div key={item.sector} className="bg-white p-8 rounded-lg border border-warm-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-navy">{item.sector}</h3>
                  <span className="text-xs font-semibold text-copper">{item.projects}</span>
                </div>
                <p className="text-sm text-warm-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">Capabilities</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-navy">
              핵심 사업 영역
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-warm-border rounded-lg overflow-hidden border border-warm-border">
            {[
              {
                num: "01",
                title: "AI & Data Intelligence",
                desc: "머신러닝 모델 개발부터 MLOps 파이프라인 구축, LLM 파인튜닝, 데이터 레이크 설계까지 데이터 기반 의사결정 체계를 구현합니다.",
                tags: ["ML/DL 모델링", "Data Pipeline", "LLM Fine-tuning", "MLOps"],
              },
              {
                num: "02",
                title: "Enterprise Web Platform",
                desc: "대규모 동시접속 처리, 마이크로서비스 아키텍처 기반의 확장 가능한 웹 플랫폼과 백오피스 시스템을 설계·개발합니다.",
                tags: ["React/Next.js", "MSA", "실시간 처리", "관리 시스템"],
              },
              {
                num: "03",
                title: "Cloud & Infrastructure",
                desc: "레거시 시스템 클라우드 마이그레이션, 컨테이너 오케스트레이션, IaC 기반 인프라 자동화, 보안 체계 구축을 수행합니다.",
                tags: ["AWS/GCP", "Kubernetes", "Terraform", "CI/CD"],
              },
              {
                num: "04",
                title: "Custom Solution Development",
                desc: "E-commerce, CMS, ERP 연동, 모바일 앱 등 비즈니스 요구사항에 최적화된 맞춤형 솔루션을 개발합니다.",
                tags: ["E-commerce", "CMS/ERP", "Mobile App", "API 연동"],
              },
            ].map((service) => (
              <div key={service.num} className="bg-white p-10 hover:bg-warm-100 transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-bold text-copper">{service.num}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-warm-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs text-warm-500 bg-warm-200 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline">
              전체 서비스 상세 보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-navy-dark text-white py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
            <div>
              <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">Projects</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-white">
                대표 구축 실적
              </h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline">
              전체 실적 보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                category: "AI/ML · 금융",
                title: "실시간 AI 리스크 분석 시스템",
                client: "국내 주요 금융그룹",
                results: ["리스크 탐지 정확도 94%", "처리 지연시간 50ms 이하", "연간 손실 방지 효과 120억원"],
              },
              {
                category: "Cloud · 제조",
                title: "스마트팩토리 클라우드 전환",
                client: "매출 5조원 이상 제조 대기업",
                results: ["인프라 운영비 40% 절감", "배포 주기 2주 → 1일", "시스템 가용성 99.99%"],
              },
              {
                category: "Platform · 유통",
                title: "통합 커머스 플랫폼 구축",
                client: "국내 Top 10 유통기업",
                results: ["일 주문처리 50만건+", "모바일 전환율 60% 향상", "피크 트래픽 10배 대응"],
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/portfolio"
                className="p-8 rounded-lg border border-white/10 hover:border-copper/40 bg-white/5 hover:bg-white/10 transition-all group"
              >
                <span className="text-xs font-semibold text-copper mb-4 block">{project.category}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-copper transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-warm-500 mb-6">{project.client}</p>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {project.results.map((result) => (
                    <div key={result} className="flex items-center gap-2 text-sm text-warm-400">
                      <span className="w-1 h-1 rounded-full bg-copper shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">Why HANBIT</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-navy">
              HANBIT을 선택하는 이유
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "산업별 도메인 전문성",
                desc: "금융, 제조, 유통, 공공 등 각 산업의 규제 환경과 비즈니스 프로세스에 대한 깊은 이해를 기반으로 실질적인 솔루션을 제공합니다.",
              },
              {
                title: "엔드투엔드 기술 역량",
                desc: "요구사항 분석부터 설계, 개발, 테스트, 배포, 운영까지 전 단계를 자체 인력으로 수행하여 일관된 품질과 책임을 보장합니다.",
              },
              {
                title: "장기적 기술 파트너십",
                desc: "단발성 프로젝트가 아닌 지속적인 시스템 고도화와 기술 지원을 통해 고객사의 기술 경쟁력 강화에 기여합니다.",
              },
            ].map((item, i) => (
              <div key={item.title} className="text-center lg:text-left">
                <div className="text-4xl font-bold text-warm-300 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white mb-2">
              기술 과제에 대해 상담받으세요
            </h2>
            <p className="text-warm-400 text-[15px]">
              담당 엔지니어가 귀사의 환경에 맞는 최적의 아키텍처와 구현 방안을 제안드립니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white px-8 py-3.5 rounded font-semibold text-[14px] transition-colors shrink-0"
          >
            도입 문의하기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
