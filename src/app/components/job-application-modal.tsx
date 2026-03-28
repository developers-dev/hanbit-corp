"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  position: string
}

export default function JobApplicationModal({ isOpen, onClose, position }: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      position: position,
      introduction: formData.get("introduction") as string,
      portfolio: formData.get("portfolio") as string,
    }

    // 기본 검증
    if (!data.name || !data.email || !data.phone || !data.introduction) {
      setMessage({ type: "error", text: "필수 항목을 모두 입력해주세요." })
      setIsSubmitting(false)
      return
    }

    // 시뮬레이션 (실제로는 여기서 API 호출)
    setTimeout(() => {
      console.log("Job Application Data:", data)
      setMessage({
        type: "success",
        text: "지원서가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      })
      setIsSubmitting(false)

      // 3초 후 모달 닫기
      setTimeout(() => {
        onClose()
        setMessage(null)
      }, 3000)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {position} 지원하기
                    </span>
                  </h2>
                  <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-slate-100">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {message && (
                  <div
                    className={`mb-6 p-4 rounded-xl ${
                      message.type === "success"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">이름 *</label>
                      <Input
                        name="name"
                        required
                        className="bg-white/60 border-white/20 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 rounded-xl"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">이메일 *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="bg-white/60 border-white/20 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 rounded-xl"
                        placeholder="이메일을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">연락처 *</label>
                    <Input
                      name="phone"
                      required
                      className="bg-white/60 border-white/20 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 rounded-xl"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">자기소개 *</label>
                    <Textarea
                      name="introduction"
                      required
                      className="bg-white/60 border-white/20 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 min-h-[120px] rounded-xl"
                      placeholder="간단한 자기소개와 지원 동기를 작성해주세요..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">포트폴리오 URL</label>
                    <Input
                      name="portfolio"
                      className="bg-white/60 border-white/20 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 rounded-xl"
                      placeholder="GitHub, 개인 사이트 등의 URL을 입력해주세요"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1 py-3 rounded-xl"
                      disabled={isSubmitting}
                    >
                      취소
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          제출 중...
                        </>
                      ) : (
                        <>
                          지원서 제출
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
