"use client"

import type React from "react"
import { useState } from "react"
import { X, ArrowRight, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { submitJobApplication } from "../actions/career-actions"
import PhoneInput from "./phone-input"

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  position: string
}

export default function JobApplicationModal({ isOpen, onClose, position }: JobApplicationModalProps) {
  const t = useTranslations("Careers")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    formData.set("position", position)

    if (!formData.get("name") || !formData.get("email") || !formData.get("phone") || !formData.get("introduction")) {
      setMessage({ type: "error", text: t("applicationForm.requiredError") })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await submitJobApplication(formData)
      setMessage({ type: result.success ? "success" : "error", text: result.message })
      if (result.success) {
        const form = e.target as HTMLFormElement
        form.reset()
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 3000)
      }
    } catch {
      setMessage({ type: "error", text: t("applicationForm.submitError") })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl border border-warm-border shadow-lg">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-copper block mb-2">
                {t("modal.applyFor")}
              </span>
              <h2 className="text-2xl font-bold text-navy">{position}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-warm-100 transition-colors"
            >
              <X className="w-5 h-5 text-warm-500" />
            </button>
          </div>

          {/* Message */}
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  {t("modal.labels.name")}
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-100 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder={t("modal.placeholders.name")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-warm-800">
                  {t("modal.labels.email")}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-100 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                  placeholder={t("modal.placeholders.email")}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                {t("modal.labels.phone")}
              </label>
              <PhoneInput name="phone" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                {t("modal.labels.introduction")}
              </label>
              <textarea
                name="introduction"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors resize-none bg-warm-100 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                placeholder={t("modal.placeholders.introduction")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-warm-800">
                {t("modal.labels.portfolio")}
              </label>
              <input
                name="portfolio"
                className="w-full px-4 py-3 rounded-lg text-[15px] outline-none transition-colors bg-warm-100 border-[1.5px] border-warm-300 text-warm-800 focus:border-navy"
                placeholder={t("modal.placeholders.portfolio")}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-lg font-medium text-[15px] border-[1.5px] border-warm-300 text-warm-700 hover:bg-warm-100 transition-colors"
              >
                {t("modal.cancel")}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-medium text-[15px] transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t("modal.submitting")}
                  </>
                ) : (
                  <>
                    {t("modal.submit")}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
