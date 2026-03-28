"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { submitConsultation } from "../actions/contact-actions"
import PhoneInput from "../components/phone-input"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const serviceOptions = [
    "AI & Data Solutions",
    "Web Development",
    "System Architecture",
    "Custom Platforms",
    "Mobile Development",
    "Consulting",
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)

    if (!formData.get("name") || !formData.get("email") || !formData.get("phone") || !formData.get("description")) {
      setMessage({ type: "error", text: "필수 항목을 모두 입력해주세요." })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await submitConsultation(formData)
      setMessage({ type: result.success ? "success" : "error", text: result.message })
      if (result.success) {
        const form = e.target as HTMLFormElement
        form.reset()
      }
    } catch {
      setMessage({ type: "error", text: "전송 중 오류가 발생했습니다. 다시 시도해주세요." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
              Contact
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]">
              프로젝트 상담
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              완벽한 솔루션을 위한 첫 걸음을 함께 시작하겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-warm-border">
            {[
              { label: "이메일", value: "hello@hanbit.dev", sub: "24시간 내 답변" },
              { label: "전화", value: "+82 2-1234-5678", sub: "평일 09:00-18:00" },
              { label: "주소", value: "서울시 강남구 테헤란로 123", sub: "HANBIT 빌딩 10층" },
              { label: "운영시간", value: "월-금 09:00 - 18:00", sub: "토요일 예약 상담 가능" },
            ].map((info) => (
              <div key={info.label}>
                <p className="text-xs font-medium uppercase tracking-wider mb-2 text-warm-500">
                  {info.label}
                </p>
                <p className="text-sm font-medium mb-1 text-navy">{info.value}</p>
                <p className="text-xs text-warm-500">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Process */}
      <section className="py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl mb-8 font-serif text-navy font-semibold">
                무료 상담 신청
              </h2>

              {message && (
                <div
                  className={`mb-6 p-4 rounded-lg text-sm ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">회사명</label>
                    <input
                      name="company"
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                      placeholder="회사명"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">담당자명 *</label>
                    <input
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                      placeholder="성함"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">이메일 *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                      placeholder="이메일"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">연락처 *</label>
                    <PhoneInput name="phone" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 text-warm-800">관심 서비스</label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="w-4 h-4 rounded accent-[var(--navy)]"
                        />
                        <span className="text-sm text-warm-600">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">예산 범위</label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                    >
                      <option value="">선택해주세요</option>
                      <option value="1,000만원 미만">1,000만원 미만</option>
                      <option value="1,000만원 - 3,000만원">1,000 ~ 3,000만원</option>
                      <option value="3,000만원 - 5,000만원">3,000 ~ 5,000만원</option>
                      <option value="5,000만원 - 1억원">5,000만원 ~ 1억원</option>
                      <option value="1억원 이상">1억원 이상</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">희망 시작일</label>
                    <input
                      name="startDate"
                      type="date"
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-warm-800">프로젝트 설명 *</label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors resize-none bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                    placeholder="프로젝트에 대해 설명해주세요"
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
                      상담 신청하기
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Process + Tips */}
            <div className="space-y-12 lg:pt-12">
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
                  Process
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "상담 신청", desc: "온라인 폼 작성 또는 전화 상담" },
                    { step: "02", title: "요구사항 분석", desc: "프로젝트 목표와 요구사항 상세 분석" },
                    { step: "03", title: "제안서 작성", desc: "맞춤형 솔루션과 견적서 제공" },
                    { step: "04", title: "프로젝트 시작", desc: "계약 체결 후 착수" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-sm font-bold shrink-0 mt-0.5 text-warm-300 font-serif">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-medium text-[15px] mb-0.5 text-navy">{item.title}</h4>
                        <p className="text-sm text-warm-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-warm-100 border border-warm-border">
                <h3 className="font-semibold text-sm mb-4 text-navy">상담 팁</h3>
                <ul className="space-y-3 text-sm text-warm-600">
                  {[
                    "구체적인 요구사항을 미리 정리해주시면 더 정확한 상담이 가능합니다",
                    "기존 시스템이 있다면 관련 자료를 준비해주세요",
                    "예산과 일정에 대한 대략적인 계획을 알려주세요",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-copper" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
                  FAQ
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: "프로젝트 기간은 얼마나 걸리나요?",
                      a: "웹 개발은 2-4개월, AI 프로젝트는 3-6개월 정도 소요됩니다.",
                    },
                    {
                      q: "개발 후 유지보수는?",
                      a: "3개월 무상 A/S 후, 월 단위 유지보수 계약으로 지속 지원합니다.",
                    },
                    {
                      q: "소스코드 소유권은?",
                      a: "최종 결제 완료 시점에 모든 소스코드의 소유권이 고객에게 이전됩니다.",
                    },
                    {
                      q: "원격 개발이 가능한가요?",
                      a: "네, 정기적인 화상회의와 협업 도구를 통해 효율적으로 진행합니다.",
                    },
                  ].map((faq) => (
                    <div
                      key={faq.q}
                      className="pb-5 border-b border-warm-border"
                    >
                      <h4 className="text-[15px] font-medium mb-2 text-navy">{faq.q}</h4>
                      <p className="text-sm text-warm-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
