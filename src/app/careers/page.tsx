"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import JobApplicationModal from "../components/job-application-modal"

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "개발팀",
      type: "정규직",
      location: "서울 강남구",
      salary: "6,000만 ~ 8,000만원",
      description: "React/Next.js 기반의 프론트엔드 개발을 담당하며, 사용자 경험을 최우선으로 하는 개발자를 찾습니다.",
      requirements: [
        "React/Next.js 3년 이상 경험",
        "TypeScript 능숙",
        "반응형 웹 개발 경험",
        "Git 협업 경험",
        "UI/UX에 대한 이해",
      ],
      benefits: ["유연근무제", "재택근무", "교육비 지원", "건강검진", "팀 워크샵"],
    },
    {
      title: "Backend Engineer",
      department: "개발팀",
      type: "정규직",
      location: "서울 강남구",
      salary: "5,500만 ~ 7,500만원",
      description: "확장 가능한 백엔드 시스템을 설계하고 구현하는 엔지니어를 모집합니다.",
      requirements: [
        "Node.js 또는 Python 3년 이상",
        "데이터베이스 설계 경험",
        "RESTful API 개발",
        "클라우드 서비스 경험",
        "마이크로서비스 아키텍처 이해",
      ],
      benefits: ["성과급", "스톡옵션", "컨퍼런스 참가비", "도서구입비", "점심 제공"],
    },
    {
      title: "AI/ML Engineer",
      department: "AI팀",
      type: "정규직",
      location: "서울 강남구",
      salary: "7,000만 ~ 9,000만원",
      description: "머신러닝 모델 개발과 LLM 파인튜닝을 담당할 AI 엔지니어를 찾습니다.",
      requirements: [
        "Python, TensorFlow/PyTorch 경험",
        "머신러닝 프로젝트 경험",
        "데이터 전처리 및 분석",
        "LLM 파인튜닝 경험 우대",
        "논문 작성 경험 우대",
      ],
      benefits: ["연구개발비", "논문 발표 지원", "GPU 서버 제공", "학회 참석비", "특허 보상금"],
    },
    {
      title: "DevOps Engineer",
      department: "인프라팀",
      type: "정규직",
      location: "서울 강남구",
      salary: "6,500만 ~ 8,500만원",
      description: "클라우드 인프라 구축과 CI/CD 파이프라인 관리를 담당합니다.",
      requirements: [
        "AWS/GCP/Azure 경험",
        "Docker/Kubernetes 운영",
        "CI/CD 파이프라인 구축",
        "모니터링 시스템 구축",
        "Infrastructure as Code",
      ],
      benefits: ["클라우드 자격증 지원", "온콜 수당", "장비 지원", "교육 과정", "인센티브"],
    },
  ]

  const handleJobApplication = (positionTitle: string) => {
    setSelectedPosition(positionTitle)
    setIsModalOpen(true)
  }

  const handleGeneralApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      position: formData.get("position") as string,
      introduction: formData.get("introduction") as string,
      portfolio: formData.get("portfolio") as string,
    }

    if (!data.name || !data.email || !data.phone || !data.position || !data.introduction) {
      setMessage({ type: "error", text: "필수 항목을 모두 입력해주세요." })
      setIsSubmitting(false)
      return
    }

    setTimeout(() => {
      console.log("Application Data:", data)
      setMessage({ type: "success", text: "지원서가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다." })
      setIsSubmitting(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
              Careers
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]"
            >
              함께 성장할
              <br />
              동료를 찾습니다
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              완벽한 코드와 혁신적인 솔루션을 만들어가는 HANBIT에서 함께 도전할 개발자를 기다립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why HANBIT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { title: "워라밸", desc: "유연근무제와 재택근무로 일과 삶의 균형" },
              { title: "성장 지원", desc: "교육비, 컨퍼런스, 도서구입비 지원" },
              { title: "팀워크", desc: "수평적 문화와 열린 소통" },
              { title: "복리후생", desc: "경쟁력 있는 연봉과 다양한 복지" },
            ].map((item, i) => (
              <div key={item.title}>
                <span
                  className="text-3xl font-bold block mb-3 font-serif text-warm-300"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-warm-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              Open Positions
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold"
            >
              채용 포지션
            </h2>
          </div>

          <div className="space-y-0">
            {positions.map((position, index) => (
              <div
                key={position.title}
                className="py-10 border-b border-warm-border"
              >
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm text-copper font-serif">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded bg-copper-bg text-copper">
                        {position.type}
                      </span>
                    </div>
                    <h3
                      className="text-xl mb-2 font-serif text-navy font-semibold"
                    >
                      {position.title}
                    </h3>
                    <p className="text-sm mb-1 text-warm-500">
                      {position.department} · {position.location}
                    </p>
                    <p className="text-sm font-medium text-navy">
                      {position.salary}
                    </p>
                  </div>

                  <div>
                    <p className="text-[15px] leading-relaxed mb-5 text-warm-600">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {position.requirements.slice(0, 3).map((req) => (
                        <span key={req} className="text-xs px-2.5 py-1 rounded bg-warm-100 text-warm-600">
                          {req}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleJobApplication(position.title)}
                      className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-sm transition-colors duration-200"
                    >
                      지원하기
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[720px] mx-auto">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              Apply
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.5rem)] mb-4 font-serif text-navy font-bold"
            >
              지원서 작성
            </h2>
            <p className="text-warm-600 leading-relaxed">간단한 정보를 입력하시면 빠르게 연락드리겠습니다.</p>
          </div>

          {message && (
            <div
              className="mb-6 p-4 rounded-lg text-sm"
              style={{
                backgroundColor: message.type === "success" ? "#f0faf0" : "#fef0f0",
                color: message.type === "success" ? "#2d6a2d" : "#8b2020",
                border: `1px solid ${message.type === "success" ? "#c8e6c8" : "#f0c0c0"}`,
              }}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleGeneralApplicationSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  이름 *
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder="성함을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  이메일 *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  연락처 *
                </label>
                <input
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder="연락처를 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  지원 포지션 *
                </label>
                <select
                  name="position"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                >
                  <option value="">포지션을 선택해주세요</option>
                  {positions.map((p) => (
                    <option key={p.title} value={p.title}>{p.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                자기소개 *
              </label>
              <textarea
                name="introduction"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors resize-none bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                placeholder="간단한 자기소개와 지원 동기를 작성해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                포트폴리오 URL
              </label>
              <input
                name="portfolio"
                className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                placeholder="GitHub, 개인 사이트 등의 URL"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 w-full justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  제출 중...
                </>
              ) : (
                <>
                  지원서 제출하기
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <Footer />

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={selectedPosition || ""}
      />
    </div>
  )
}
