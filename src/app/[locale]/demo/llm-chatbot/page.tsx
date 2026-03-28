"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, BookOpen, Clock, ArrowLeft } from "lucide-react"
import { demoProjects } from "@/lib/demo-data"
import Link from "next/link"

export default function LLMChatbotDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "안녕하세요! HANBIT 사내 챗봇입니다. 궁금한 것이 있으시면 언제든 물어보세요.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const demoData = demoProjects[6].data

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses = {
    휴가: "휴가 신청은 다음과 같이 진행하시면 됩니다:\n\n1. 인사시스템에 로그인\n2. '휴가신청' 메뉴 선택\n3. 휴가 종류, 기간, 사유 입력\n4. 직속상관 승인 요청\n\n연차는 최소 3일 전에 신청해주세요.",
    회의실:
      "회의실 예약은 다음 단계로 진행됩니다:\n\n1. 사내 포털 → 시설예약\n2. 원하는 날짜/시간 선택\n3. 회의실 선택 (수용인원 확인)\n4. 회의 목적 및 참석자 입력\n5. 예약 완료\n\n취소는 2시간 전까지 가능합니다.",
    급여: "급여 관련 문의사항은 다음과 같습니다:\n\n• 급여명세서: 인사시스템 → 급여정보\n• 급여일: 매월 25일 (주말/공휴일시 전일 지급)\n• 연말정산: 매년 1-2월 진행\n• 급여 문의: 인사팀 (내선 1234)\n\n자세한 사항은 인사팀에 문의해주세요.",
    비밀번호:
      "비밀번호 변경 방법:\n\n1. 사내 포털 로그인\n2. 우측 상단 '내정보' 클릭\n3. '비밀번호 변경' 선택\n4. 현재 비밀번호 입력\n5. 새 비밀번호 입력 (8자 이상, 영문+숫자+특수문자)\n6. 변경 완료\n\n비밀번호를 잊으셨다면 IT팀(내선 5678)에 문의하세요.",
    출장: "출장 신청 절차:\n\n1. 출장신청서 작성 (인사시스템)\n2. 출장 목적, 일정, 예산 입력\n3. 팀장 승인 요청\n4. 승인 후 항공/숙박 예약\n5. 출장 완료 후 정산서 제출\n\n국외 출장은 2주 전 신청 필수입니다.",
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // 응답 시뮬레이션
    setTimeout(() => {
      const keyword = Object.keys(predefinedResponses).find((key) => inputValue.includes(key))
      const response = keyword
        ? (predefinedResponses as Record<string, string>)[keyword]
        : "죄송합니다. 해당 질문에 대한 정보를 찾을 수 없습니다. 더 구체적으로 질문해주시거나 관련 부서에 직접 문의해주세요.\n\n• 인사 관련: 인사팀 (내선 1234)\n• IT 관련: IT팀 (내선 5678)\n• 총무 관련: 총무팀 (내선 9012)"

      const assistantMessage = {
        role: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
  }

  const quickQuestions = [
    "휴가 신청 방법이 궁금해요",
    "회의실 예약은 어떻게 하나요?",
    "급여명세서는 어디서 확인하나요?",
    "비밀번호를 변경하고 싶어요",
    "출장 신청 절차를 알려주세요",
  ]

  return (
    <div className="min-h-screen bg-warm-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/portfolio" className="text-sm text-warm-500 hover:text-navy inline-flex items-center gap-1.5 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            포트폴리오로 돌아가기
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-warm-100 border border-warm-border mb-6">
            <Bot className="w-5 h-5 mr-2 text-copper" />
            <span className="text-sm font-medium text-warm-600">LLM 사내 챗봇 데모</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            AI 기반 사내 지원 시스템
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            직원들의 다양한 질문에 24시간 즉시 답변하는 지능형 챗봇 시스템입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-warm-border rounded-lg mb-6">
              <div className="p-6">
                <h2 className="text-lg font-serif font-bold text-navy mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-copper" />
                  지식 베이스
                </h2>
                <div className="space-y-3">
                  {demoData.knowledgeBase.map((category, index) => (
                    <div
                      key={category.category}
                      className="p-3 bg-warm-100 rounded-lg border border-warm-border"
                    >
                      <div className="font-semibold text-navy mb-2">{category.category}</div>
                      <div className="flex flex-wrap gap-1">
                        {category.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-warm-50 text-warm-700 text-xs rounded border border-warm-border"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-warm-border rounded-lg">
              <div className="p-6">
                <h2 className="text-lg font-serif font-bold text-navy mb-4">시스템 통계</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-600">총 질문수</span>
                    <span className="font-bold text-copper">{demoData.stats.totalQuestions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-600">해결률</span>
                    <span className="font-bold text-navy">
                      {((demoData.stats.resolvedQuestions / demoData.stats.totalQuestions) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-600">평균 응답시간</span>
                    <span className="font-bold text-copper">{demoData.stats.avgResponseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-600">만족도</span>
                    <span className="font-bold text-navy">{demoData.stats.satisfactionRate}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div
              className="bg-white border border-warm-border rounded-lg flex flex-col"
              style={{ height: "700px" }}
            >
              <div className="p-6 flex-1 flex flex-col min-h-0">
                {/* Chat Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm-border flex-shrink-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-warm-100 rounded-full flex items-center justify-center mr-3">
                      <Bot className="w-6 h-6 text-copper" />
                    </div>
                    <div>
                      <div className="font-serif font-semibold text-navy">HANBIT 챗봇</div>
                      <div className="text-sm text-copper flex items-center">
                        <div className="w-2 h-2 bg-copper rounded-full mr-2 animate-pulse"></div>
                        온라인
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-warm-500">
                    <Clock className="w-4 h-4" />
                    <span>평균 응답시간: {demoData.stats.avgResponseTime}</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2" style={{ maxHeight: "calc(100% - 200px)" }}>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] ${
                          message.role === "user"
                            ? "bg-navy text-warm-50 rounded-lg rounded-tr-none p-4"
                            : "bg-warm-100 text-warm-800 rounded-lg rounded-tl-none p-4"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {message.role === "assistant" && (
                            <div className="w-6 h-6 bg-warm-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <Bot className="w-4 h-4 text-copper" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="whitespace-pre-wrap break-words">{message.content}</div>
                            <div
                              className={`text-xs mt-2 ${
                                message.role === "user" ? "text-warm-300" : "text-warm-500"
                              }`}
                            >
                              {message.timestamp}
                            </div>
                          </div>
                          {message.role === "user" && (
                            <div className="w-6 h-6 bg-navy-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <User className="w-4 h-4 text-warm-50" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-warm-100 text-warm-800 rounded-lg rounded-tl-none p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-warm-200 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-copper" />
                          </div>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-warm-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-warm-500 rounded-full animate-bounce [animation-delay:150ms]"></div>
                            <div className="w-2 h-2 bg-warm-500 rounded-full animate-bounce [animation-delay:300ms]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                <div className="mb-4 flex-shrink-0">
                  <div className="text-sm text-warm-500 mb-2">자주 묻는 질문:</div>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="bg-warm-100 hover:bg-warm-200 text-warm-700 text-sm px-3 py-2 rounded-lg transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex space-x-3 flex-shrink-0">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="궁금한 것을 물어보세요..."
                    className="flex-1 bg-white border border-warm-border text-navy placeholder:text-warm-400 focus:border-navy focus:outline-none rounded-lg px-4 py-2.5 transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-navy hover:bg-navy-light text-warm-50 p-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-12 text-center">
          <div className="bg-white border border-warm-border rounded-lg">
            <div className="p-6">
              <p className="text-warm-600">
                이 데모는 실제 LLM 기반 사내 챗봇 시스템을 시뮬레이션합니다. "휴가", "회의실", "급여", "비밀번호",
                "출장" 등의 키워드로 질문해보세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
