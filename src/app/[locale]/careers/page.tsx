"use client"

import type React from "react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight, Loader2 } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import JobApplicationModal from "../components/job-application-modal"
import { submitJobApplication } from "../actions/career-actions"
import PhoneInput from "../components/phone-input"

const POSITION_KEYS = ["seniorFrontend", "backendEngineer", "aiMlEngineer", "devopsEngineer"] as const
const WHY_HANBIT_KEYS = ["workLifeBalance", "growth", "teamwork", "benefits"] as const

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const t = useTranslations("Careers")
  const tCommon = useTranslations("Common")

  const positions = POSITION_KEYS.map((key) => ({
    key,
    title: t(`positions.items.${key}.title`),
    department: t(`positions.items.${key}.department`),
    type: t(`positions.items.${key}.type`),
    location: t(`positions.items.${key}.location`),
    salary: t(`positions.items.${key}.salary`),
    description: t(`positions.items.${key}.description`),
    requirements: t.raw(`positions.items.${key}.requirements`) as string[],
    benefits: t.raw(`positions.items.${key}.benefits`) as string[],
  }))

  const handleJobApplication = (positionTitle: string) => {
    setSelectedPosition(positionTitle)
    setIsModalOpen(true)
  }

  const handleGeneralApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)

    if (!formData.get("name") || !formData.get("email") || !formData.get("phone") || !formData.get("position") || !formData.get("introduction")) {
      setMessage({ type: "error", text: tCommon("required") })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await submitJobApplication(formData)
      setMessage({ type: result.success ? "success" : "error", text: result.message })
      if (result.success) {
        const form = e.target as HTMLFormElement
        form.reset()
      }
    } catch {
      setMessage({ type: "error", text: tCommon("errorGeneric") })
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
              {t("hero.sectionLabel")}
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]"
            >
              {t.rich("hero.title", { br: () => <br /> })}
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Why HANBIT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {WHY_HANBIT_KEYS.map((key, i) => (
              <div key={key}>
                <span
                  className="text-3xl font-bold block mb-3 font-serif text-warm-300"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-navy">{t(`whyHanbit.items.${key}.title`)}</h3>
                <p className="text-sm leading-relaxed text-warm-600">{t(`whyHanbit.items.${key}.desc`)}</p>
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
              {t("positions.sectionLabel")}
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold"
            >
              {t("positions.title")}
            </h2>
          </div>

          <div className="space-y-0">
            {positions.map((position, index) => (
              <div
                key={position.key}
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
                      {t("positions.applyButton")}
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
              {t("applicationForm.sectionLabel")}
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.5rem)] mb-4 font-serif text-navy font-bold"
            >
              {t("applicationForm.title")}
            </h2>
            <p className="text-warm-600 leading-relaxed">{t("applicationForm.description")}</p>
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
                  {t("applicationForm.labels.name")}
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder={t("applicationForm.placeholders.name")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  {t("applicationForm.labels.email")}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder={t("applicationForm.placeholders.email")}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  {t("applicationForm.labels.phone")}
                </label>
                <PhoneInput name="phone" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  {t("applicationForm.labels.position")}
                </label>
                <select
                  name="position"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                >
                  <option value="">{t("applicationForm.placeholders.positionSelect")}</option>
                  {positions.map((p) => (
                    <option key={p.key} value={p.title}>{p.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                {t("applicationForm.labels.introduction")}
              </label>
              <textarea
                name="introduction"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors resize-none bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                placeholder={t("applicationForm.placeholders.introduction")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                {t("applicationForm.labels.portfolio")}
              </label>
              <input
                name="portfolio"
                className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                placeholder={t("applicationForm.placeholders.portfolio")}
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 w-full justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t("applicationForm.submitting")}
                </>
              ) : (
                <>
                  {t("applicationForm.submitButton")}
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
