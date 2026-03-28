"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Link from "next/link"
import { demoProjects } from "@/lib/demo-data"

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      title: "AI 추천 시스템",
      category: "AI/ML",
      client: "이커머스 플랫폼",
      duration: "3개월",
      team: "4명",
      description: "머신러닝 기반 개인화 상품 추천 시스템을 구축하여 구매 전환율을 35% 향상시켰습니다.",
      detailedDescription:
        "대규모 이커머스 플랫폼을 위한 실시간 개인화 추천 시스템을 구축했습니다. 협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 추천 알고리즘을 구현하여 추천 정확도를 크게 향상시켰습니다.",
      technologies: ["Python", "TensorFlow", "Redis", "PostgreSQL", "Docker"],
      results: ["구매 전환율 35% 증가", "사용자 체류시간 50% 증가", "매출 25% 향상"],
      metrics: { performance: "99.5% 가용성", speed: "평균 응답시간 50ms", accuracy: "추천 정확도 85%" },
    },
    {
      id: 2,
      title: "핀테크 대시보드",
      category: "Web Development",
      client: "금융 스타트업",
      duration: "4개월",
      team: "5명",
      description: "실시간 금융 데이터 시각화와 거래 관리를 위한 웹 애플리케이션을 개발했습니다.",
      detailedDescription:
        "금융 스타트업을 위한 종합 대시보드 시스템을 구축했습니다. 실시간 주식, 암호화폐, 외환 데이터를 수집하고 시각화하여 사용자가 직관적으로 투자 포트폴리오를 관리할 수 있도록 했습니다.",
      technologies: ["React", "Next.js", "TypeScript", "Chart.js", "Node.js"],
      results: ["실시간 데이터 처리", "99.9% 가용성", "사용자 만족도 95%"],
      metrics: { users: "DAU 10,000+", transactions: "일일 거래량 1억원+", uptime: "99.9% 가동률" },
    },
    {
      id: 3,
      title: "클라우드 마이그레이션",
      category: "System Architecture",
      client: "제조업 대기업",
      duration: "6개월",
      team: "3명",
      description: "레거시 시스템을 AWS 클라우드로 마이그레이션하여 운영비용을 40% 절감했습니다.",
      detailedDescription:
        "20년 된 레거시 시스템을 현대적인 클라우드 아키텍처로 전환했습니다. 마이크로서비스 아키텍처 도입, 컨테이너화, CI/CD 파이프라인 구축을 통해 확장성과 유지보수성을 크게 개선했습니다.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      results: ["운영비용 40% 절감", "배포시간 80% 단축", "시스템 안정성 향상"],
      metrics: { cost: "운영비 40% 절감", deployment: "배포 2시간 → 20분", reliability: "99.99% 가용성" },
    },
    {
      id: 4,
      title: "모바일 커머스 앱",
      category: "Mobile",
      client: "패션 브랜드",
      duration: "5개월",
      team: "6명",
      description: "React Native로 크로스플랫폼 모바일 쇼핑 앱을 개발하여 모바일 매출을 60% 증가시켰습니다.",
      detailedDescription:
        "패션 브랜드를 위한 프리미엄 모바일 쇼핑 경험을 제공하는 앱을 개발했습니다. AR 기술을 활용한 가상 피팅, 개인화된 스타일링 추천 기능으로 차별화된 사용자 경험을 구현했습니다.",
      technologies: ["React Native", "Redux", "Firebase", "Stripe", "Push Notifications"],
      results: ["모바일 매출 60% 증가", "앱스토어 4.8점", "다운로드 10만+"],
      metrics: { downloads: "100,000+", rating: "4.8/5.0", retention: "월간 유지율 75%" },
    },
    {
      id: 5,
      title: "데이터 분석 플랫폼",
      category: "Data Engineering",
      client: "마케팅 에이전시",
      duration: "4개월",
      team: "4명",
      description: "빅데이터 수집, 처리, 분석을 위한 통합 플랫폼을 구축했습니다.",
      detailedDescription:
        "마케팅 캠페인의 효과를 실시간으로 분석하고 최적화할 수 있는 데이터 플랫폼을 구축했습니다. 다양한 소스에서 데이터를 수집하고, 실시간 처리를 통해 인사이트를 제공합니다.",
      technologies: ["Python", "Apache Spark", "Kafka", "Elasticsearch", "Kibana"],
      results: ["데이터 처리량 10배 증가", "분석 시간 70% 단축", "인사이트 정확도 향상"],
      metrics: { data: "일일 1TB+", speed: "지연시간 < 1초", accuracy: "예측 정확도 92%" },
    },
    {
      id: 6,
      title: "LLM 사내 챗봇",
      category: "AI/LLM",
      client: "대기업 본사",
      duration: "3개월",
      team: "3명",
      description: "대화형 AI를 활용한 사내 업무 지원 챗봇 시스템을 구축했습니다.",
      detailedDescription:
        "직원들의 다양한 업무 관련 질문에 24시간 즉시 답변하는 지능형 챗봇을 개발했습니다. RAG 기반 정보 검색과 사내 지식 베이스를 결합하여 정확한 정보를 제공합니다.",
      technologies: ["Python", "LangChain", "OpenAI GPT", "Vector DB", "FastAPI"],
      results: ["문의 처리시간 80% 단축", "직원 만족도 94%", "업무 효율성 향상"],
      metrics: { questions: "일일 1,500+", accuracy: "답변 정확도 96%", response: "응답 2.3초" },
    },
  ]

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
              Portfolio
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]"
            >
              완성된 프로젝트
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              HANBIT이 완성한 다양한 프로젝트들을 통해 우리의 기술력과 전문성을 확인해보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid lg:grid-cols-[1fr_1.5fr] gap-10 py-12 border-b cursor-pointer group border-warm-border"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="text-sm font-medium text-copper font-serif"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-copper-bg text-copper">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl mb-2 group-hover:translate-x-1 transition-transform duration-200 font-serif text-navy font-semibold"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-warm-500">
                    {project.client} · {project.duration} · {project.team}
                  </p>
                </div>

                <div>
                  <p className="text-[15px] leading-relaxed mb-5 text-warm-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-warm-100 text-warm-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {project.results.map((result) => (
                      <span key={result} className="text-sm font-medium text-navy">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "완료 프로젝트" },
              { value: "100%", label: "고객 만족도" },
              { value: "99.9%", label: "시스템 안정성" },
              { value: "24/7", label: "기술 지원" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-[2rem] font-bold mb-1 font-serif text-navy"
                >
                  {stat.value}
                </div>
                <div className="text-sm text-warm-500">{stat.label}</div>
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
            다음 프로젝트는 여러분과 함께
          </h2>
          <p className="text-warm-600 leading-relaxed text-lg mb-10">
            HANBIT의 전문성과 경험을 바탕으로 비즈니스를 성공으로 이끌겠습니다.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
            프로젝트 상담하기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl p-8 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-xs font-medium px-2.5 py-1 rounded mb-3 inline-block bg-copper-bg text-copper">
                  {selectedProject.category}
                </span>
                <h2
                  className="text-3xl font-serif text-navy font-bold"
                >
                  {selectedProject.title}
                </h2>
                <p className="text-sm mt-2 text-warm-500">
                  {selectedProject.client} · {selectedProject.duration} · {selectedProject.team}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg hover:bg-warm-100 transition-colors"
              >
                <X className="w-5 h-5 text-warm-500" />
              </button>
            </div>

            <p className="text-[15px] leading-relaxed mb-8 text-warm-600">
              {selectedProject.detailedDescription}
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-medium mb-3 text-warm-500">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-md bg-warm-100 text-warm-600 border border-warm-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {Object.entries(selectedProject.metrics).map(([key, value]) => (
                <div key={key} className="py-4 border-t border-warm-border">
                  <div className="text-lg font-bold text-navy">{String(value)}</div>
                  <div className="text-xs uppercase tracking-wider mt-1 text-warm-500">{key}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href={demoProjects[selectedProject.id]?.demoUrl || "#"} className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
                라이브 데모 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
