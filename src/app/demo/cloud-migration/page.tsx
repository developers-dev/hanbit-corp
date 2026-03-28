"use client"

import { useState, useEffect } from "react"
import { Server, Activity, DollarSign, Clock, CheckCircle, Cloud, Zap, ArrowLeft } from "lucide-react"
import { demoProjects } from "@/lib/demo-data"
import Link from "next/link"

export default function CloudMigrationDemo() {
  const [activeTab, setActiveTab] = useState("infrastructure")
  const [realTimeData, setRealTimeData] = useState(demoProjects[3].data)

  // 실시간 데이터 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        ...prev,
        infrastructure: {
          ...prev.infrastructure,
          servers: prev.infrastructure.servers.map((server) => ({
            ...server,
            cpu: Math.max(10, Math.min(90, server.cpu + (Math.random() - 0.5) * 10)),
            memory: Math.max(20, Math.min(95, server.memory + (Math.random() - 0.5) * 8)),
          })),
          metrics: {
            ...prev.infrastructure.metrics,
            totalRequests: prev.infrastructure.metrics.totalRequests + Math.floor(Math.random() * 100),
            avgResponseTime: Math.max(
              20,
              Math.min(80, prev.infrastructure.metrics.avgResponseTime + (Math.random() - 0.5) * 5),
            ),
          },
        },
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "text-green-600 bg-green-50"
      case "warning":
        return "text-amber-600 bg-amber-50"
      case "error":
        return "text-red-600 bg-red-50"
      default:
        return "text-warm-600 bg-warm-100"
    }
  }

  const getCpuColor = (cpu: number) => {
    if (cpu > 80) return "bg-red-500"
    if (cpu > 60) return "bg-amber-500"
    return "bg-green-500"
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-warm-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/portfolio" className="inline-flex items-center text-sm text-warm-500 hover:text-navy transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            포트폴리오로 돌아가기
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-warm-border mb-6">
            <Cloud className="w-4 h-4 mr-2 text-copper" />
            <span className="text-sm font-medium text-warm-600">클라우드 마이그레이션 데모</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            AWS 클라우드 인프라 관리
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            실시간 서버 모니터링과 비용 최적화를 통한 클라우드 인프라 관리 시스템입니다.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">
              {realTimeData.infrastructure.metrics.uptime}%
            </div>
            <div className="text-sm text-warm-600">시스템 가동률</div>
            <div className="text-green-600 text-sm mt-2">99.9% SLA 달성</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-warm-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">
              {realTimeData.infrastructure.metrics.totalRequests.toLocaleString()}
            </div>
            <div className="text-sm text-warm-600">총 요청 수</div>
            <div className="text-copper text-sm mt-2">실시간 업데이트</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-warm-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">
              {Math.round(realTimeData.infrastructure.metrics.avgResponseTime)}ms
            </div>
            <div className="text-sm text-warm-600">평균 응답시간</div>
            <div className="text-warm-500 text-sm mt-2">목표: &lt; 100ms</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">{realTimeData.infrastructure.costs.savings}%</div>
            <div className="text-sm text-warm-600">비용 절감</div>
            <div className="text-copper text-sm mt-2">
              {formatCurrency(realTimeData.infrastructure.costs.previous - realTimeData.infrastructure.costs.current)}{" "}
              절약
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-3 mb-8">
          {[
            { id: "infrastructure", label: "인프라 현황", icon: Server },
            { id: "deployments", label: "배포 이력", icon: Zap },
            { id: "costs", label: "비용 분석", icon: DollarSign },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-navy text-warm-50"
                  : "bg-warm-100 text-warm-600 hover:bg-warm-200"
              }`}
            >
              {tab.icon && <tab.icon className="w-4 h-4 mr-2" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === "infrastructure" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-xl font-serif font-bold text-navy mb-6 flex items-center">
                  <Server className="w-5 h-5 mr-3 text-copper" />
                  서버 현황
                </h2>
                <div className="space-y-4">
                  {realTimeData.infrastructure.servers.map((server) => (
                    <div
                      key={server.id}
                      className="p-4 bg-warm-50 rounded-lg border border-warm-border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                          <div>
                            <div className="font-medium text-navy">{server.name}</div>
                            <div className="text-sm text-warm-500">{server.region}</div>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(server.status)}`}
                        >
                          {server.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-warm-600">CPU 사용률</span>
                            <span className="font-medium text-navy">{Math.round(server.cpu)}%</span>
                          </div>
                          <div className="w-full bg-warm-200 rounded-full h-2">
                            <div
                              style={{ width: `${server.cpu}%` }}
                              className={`h-2 rounded-full transition-all duration-500 ${getCpuColor(server.cpu)}`}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-warm-600">메모리 사용률</span>
                            <span className="font-medium text-navy">{Math.round(server.memory)}%</span>
                          </div>
                          <div className="w-full bg-warm-200 rounded-full h-2">
                            <div
                              style={{ width: `${server.memory}%` }}
                              className="bg-navy h-2 rounded-full transition-all duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-xl font-serif font-bold text-navy mb-6 flex items-center">
                  <Activity className="w-5 h-5 mr-3 text-copper" />
                  실시간 메트릭
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">총 요청 수</span>
                      <span className="text-2xl font-bold text-navy">
                        {realTimeData.infrastructure.metrics.totalRequests.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">실시간으로 업데이트되는 API 요청 수</div>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">평균 응답시간</span>
                      <span className="text-2xl font-bold text-navy">
                        {Math.round(realTimeData.infrastructure.metrics.avgResponseTime)}ms
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">API 응답 시간 평균값</div>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">에러율</span>
                      <span className="text-2xl font-bold text-red-600">
                        {realTimeData.infrastructure.metrics.errorRate}%
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">시스템 에러 발생률</div>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">가동률</span>
                      <span className="text-2xl font-bold text-green-600">
                        {realTimeData.infrastructure.metrics.uptime}%
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">시스템 안정성 지표</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "deployments" && (
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <h2 className="text-xl font-serif font-bold text-navy mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-3 text-copper" />
                최근 배포 이력
              </h2>
              <div className="space-y-3">
                {realTimeData.deployments.map((deployment) => (
                  <div
                    key={deployment.id}
                    className="flex items-center justify-between p-4 bg-warm-50 rounded-lg border border-warm-border"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-navy">{deployment.version}</div>
                        <div className="text-sm text-warm-500">{deployment.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 rounded text-xs font-medium text-green-600 bg-green-50">
                          {deployment.status}
                        </span>
                      </div>
                      <div className="text-sm text-warm-500">{deployment.duration}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-warm-50 rounded-lg border border-warm-border">
                <h3 className="text-lg font-serif font-bold text-navy mb-4">배포 성과</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy">80%</div>
                    <div className="text-sm text-warm-600">배포시간 단축</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-warm-600">성공률</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-copper">0</div>
                    <div className="text-sm text-warm-600">롤백 횟수</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "costs" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-xl font-serif font-bold text-navy mb-6 flex items-center">
                  <DollarSign className="w-5 h-5 mr-3 text-copper" />
                  비용 분석
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">이전 비용 (레거시)</span>
                      <span className="text-2xl font-bold text-red-600">
                        {formatCurrency(realTimeData.infrastructure.costs.previous)}
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">월간 운영비용</div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">현재 비용 (클라우드)</span>
                      <span className="text-2xl font-bold text-green-600">
                        {formatCurrency(realTimeData.infrastructure.costs.current)}
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">월간 운영비용</div>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-warm-600 font-medium">절약 금액</span>
                      <span className="text-2xl font-bold text-navy">
                        {formatCurrency(
                          realTimeData.infrastructure.costs.previous - realTimeData.infrastructure.costs.current,
                        )}
                      </span>
                    </div>
                    <div className="text-sm text-warm-500">
                      월간 절약액 ({realTimeData.infrastructure.costs.savings}% 절감)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-xl font-serif font-bold text-navy mb-6">비용 절감 효과</h2>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-warm-50 rounded-lg border border-warm-border">
                    <div className="text-4xl font-bold text-navy mb-2">
                      {realTimeData.infrastructure.costs.savings}%
                    </div>
                    <div className="text-lg text-warm-600 font-medium">총 비용 절감률</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-warm-50 rounded-lg">
                      <span className="text-warm-600">서버 운영비</span>
                      <span className="font-bold text-green-600">-45%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-warm-50 rounded-lg">
                      <span className="text-warm-600">네트워크 비용</span>
                      <span className="font-bold text-green-600">-35%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-warm-50 rounded-lg">
                      <span className="text-warm-600">스토리지 비용</span>
                      <span className="font-bold text-green-600">-50%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-warm-50 rounded-lg">
                      <span className="text-warm-600">관리 비용</span>
                      <span className="font-bold text-green-600">-60%</span>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg border border-warm-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-copper mb-1">
                        {formatCurrency(
                          (realTimeData.infrastructure.costs.previous - realTimeData.infrastructure.costs.current) *
                            12,
                        )}
                      </div>
                      <div className="text-sm text-warm-600">연간 예상 절약액</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg border border-warm-border p-6">
            <p className="text-warm-600">
              이 데모는 실제 클라우드 마이그레이션 프로젝트의 모니터링 시스템을 시뮬레이션합니다. 실시간 데이터
              업데이트와 비용 분석 기능을 확인해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
