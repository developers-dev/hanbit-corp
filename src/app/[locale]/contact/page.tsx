"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { submitConsultation } from "../actions/contact-actions"
import PhoneInput from "../components/phone-input"

export default function ContactPage() {
  const t = useTranslations("Contact")
  const tCommon = useTranslations("Common")
  const locale = useLocale()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const serviceKeys = [0, 1, 2, 3, 4, 5] as const
  const budgetKeys = ["under10m", "10mTo30m", "30mTo50m", "50mTo100m", "over100m"] as const
  const stepKeys = ["01", "02", "03", "04"] as const
  const faqKeys = ["duration", "maintenance", "sourceCode", "remote"] as const
  const infoKeys = ["email", "phone", "address", "hours"] as const

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)

    if (!formData.get("name") || !formData.get("email") || !formData.get("phone") || !formData.get("description")) {
      setMessage({ type: "error", text: tCommon("required") })
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
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]">
              {t("hero.title")}
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-warm-border">
            {infoKeys.map((key) => (
              <div key={key}>
                <p className="text-xs font-medium uppercase tracking-wider mb-2 text-warm-500">
                  {t(`info.${key}.label`)}
                </p>
                <p className="text-sm font-medium mb-1 text-navy">{t(`info.${key}.value`)}</p>
                <p className="text-xs text-warm-500">{t(`info.${key}.sub`)}</p>
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
                {t("form.title")}
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
                    <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.company")}</label>
                    <input
                      name="company"
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                      placeholder={t("form.placeholders.company")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.name")}</label>
                    <input
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                      placeholder={t("form.placeholders.name")}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.email")}</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                      placeholder={t("form.placeholders.email")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.phone")}</label>
                    <PhoneInput name="phone" required defaultCountry={locale === "ko" ? "KR" : "US"} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 text-warm-800">{t("form.labels.services")}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceKeys.map((index) => {
                      const service = t(`form.serviceOptions.${index}`)
                      return (
                        <label key={index} className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="w-4 h-4 rounded accent-[var(--navy)]"
                          />
                          <span className="text-sm text-warm-600">{service}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.budget")}</label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                    >
                      <option value="">{t("form.budgetOptions.placeholder")}</option>
                      {budgetKeys.map((key) => (
                        <option key={key} value={t(`form.budgetOptions.${key}`)}>
                          {t(`form.budgetOptions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.startDate")}</label>
                    <input
                      name="startDate"
                      type="date"
                      className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-warm-800">{t("form.labels.description")}</label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors resize-none bg-warm-50 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                    placeholder={t("form.placeholders.description")}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 w-full justify-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("form.submitting")}
                    </>
                  ) : (
                    <>
                      {t("form.submitButton")}
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
                  {t("process.sectionLabel")}
                </h3>
                <div className="space-y-6">
                  {stepKeys.map((step) => (
                    <div key={step} className="flex gap-4">
                      <span className="text-sm font-bold shrink-0 mt-0.5 text-warm-300 font-serif">
                        {step}
                      </span>
                      <div>
                        <h4 className="font-medium text-[15px] mb-0.5 text-navy">{t(`process.steps.${step}.title`)}</h4>
                        <p className="text-sm text-warm-500">{t(`process.steps.${step}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-warm-100 border border-warm-border">
                <h3 className="font-semibold text-sm mb-4 text-navy">{t("tips.title")}</h3>
                <ul className="space-y-3 text-sm text-warm-600">
                  {[0, 1, 2].map((index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-copper" />
                      {t(`tips.items.${index}`)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
                  {t("faq.sectionLabel")}
                </h3>
                <div className="space-y-6">
                  {faqKeys.map((key) => (
                    <div
                      key={key}
                      className="pb-5 border-b border-warm-border"
                    >
                      <h4 className="text-[15px] font-medium mb-2 text-navy">{t(`faq.items.${key}.q`)}</h4>
                      <p className="text-sm text-warm-600">{t(`faq.items.${key}.a`)}</p>
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
