"use client"

import { useState } from "react"
import { BarChart3, TrendingUp, Eye, MousePointer, Target, DollarSign, Calendar, Filter, ArrowLeft } from "lucide-react"
import { demoProjects } from "@/lib/demo-data"
import Link from "next/link"

export default function DataAnalyticsDemo() {
  const [activeTab, setActiveTab] = useState("overview")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const demoData = demoProjects[5].data

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num.toString()
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
          <Link href="/portfolio" className="text-sm text-warm-500 hover:text-navy inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            포트폴리오로 돌아가기
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-lg border border-warm-border bg-white mb-6">
            <BarChart3 className="w-5 h-5 mr-2 text-copper" />
            <span className="text-sm font-medium text-warm-600">데이터 분석 플랫폼 데모</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif text-navy mb-4">
            마케팅 캠페인 분석
          </h1>
          <p className="text-xl text-warm-600 max-w-2xl mx-auto">
            실시간 데이터 수집과 분석을 통한 마케팅 성과 최적화 플랫폼입니다.
          </p>
        </div>

        {/* Analytics Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warm-200 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy font-serif mb-1">
              {formatNumber(demoData.analytics.totalImpressions)}
            </div>
            <div className="text-sm text-warm-600">총 노출수</div>
            <div className="text-green-600 text-sm mt-2">+12.5% vs 지난달</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warm-200 rounded-lg flex items-center justify-center">
                <MousePointer className="w-6 h-6 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy font-serif mb-1">
              {formatNumber(demoData.analytics.totalClicks)}
            </div>
            <div className="text-sm text-warm-600">총 클릭수</div>
            <div className="text-green-600 text-sm mt-2">CTR {demoData.analytics.avgCTR}%</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warm-200 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy font-serif mb-1">
              {formatNumber(demoData.analytics.totalConversions)}
            </div>
            <div className="text-sm text-warm-600">총 전환수</div>
            <div className="text-copper text-sm mt-2">CVR {demoData.analytics.avgCVR}%</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warm-200 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy font-serif mb-1">{demoData.analytics.roas}x</div>
            <div className="text-sm text-warm-600">ROAS</div>
            <div className="text-copper text-sm mt-2">{formatCurrency(demoData.analytics.totalCost)} 투입</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8">
          {[
            { id: "overview", label: "캠페인 개요", icon: BarChart3 },
            { id: "trends", label: "트렌드 분석", icon: TrendingUp },
            { id: "performance", label: "성과 분석", icon: Target },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-navy text-warm-50 rounded-lg px-4 py-2"
                  : "text-warm-600 hover:text-navy px-4 py-2"
              }`}
            >
              {tab.icon && <tab.icon className="w-4 h-4 mr-2" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-warm-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-navy font-serif">캠페인 목록</h2>
                  <button className="inline-flex items-center text-sm text-warm-600 hover:text-navy border border-warm-border rounded-lg px-3 py-1.5">
                    <Filter className="w-4 h-4 mr-2" />
                    필터
                  </button>
                </div>
                <div className="space-y-4">
                  {demoData.campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      onClick={() => setSelectedCampaign(campaign)}
                      className="p-4 bg-warm-50 rounded-lg border border-warm-border cursor-pointer hover:border-navy transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-navy">{campaign.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-green-600 font-medium">CTR {campaign.ctr}%</span>
                          <span className="text-sm text-copper font-medium">CVR {campaign.cvr}%</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-warm-500">노출수</div>
                          <div className="font-bold text-navy">{formatNumber(campaign.impressions)}</div>
                        </div>
                        <div>
                          <div className="text-warm-500">클릭수</div>
                          <div className="font-bold text-navy">{formatNumber(campaign.clicks)}</div>
                        </div>
                        <div>
                          <div className="text-warm-500">전환수</div>
                          <div className="font-bold text-navy">{formatNumber(campaign.conversions)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-2xl font-bold text-navy font-serif mb-6">
                  {selectedCampaign ? selectedCampaign.name : "캠페인을 선택하세요"}
                </h2>
                {selectedCampaign ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                        <div className="text-sm text-warm-500 mb-1">총 비용</div>
                        <div className="text-2xl font-bold text-navy font-serif">
                          {formatCurrency(selectedCampaign.cost)}
                        </div>
                      </div>
                      <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                        <div className="text-sm text-warm-500 mb-1">ROAS</div>
                        <div className="text-2xl font-bold text-navy font-serif">
                          {((selectedCampaign.conversions * 50000) / selectedCampaign.cost).toFixed(1)}x
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-warm-600">클릭률 (CTR)</span>
                          <span className="font-medium text-navy">{selectedCampaign.ctr}%</span>
                        </div>
                        <div className="w-full bg-warm-200 rounded-full h-3">
                          <div
                            style={{ width: `${(selectedCampaign.ctr / 10) * 100}%` }}
                            className="bg-navy h-3 rounded-full transition-all duration-500"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-warm-600">전환율 (CVR)</span>
                          <span className="font-medium text-navy">{selectedCampaign.cvr}%</span>
                        </div>
                        <div className="w-full bg-warm-200 rounded-full h-3">
                          <div
                            style={{ width: `${(selectedCampaign.cvr / 10) * 100}%` }}
                            className="bg-navy h-3 rounded-full transition-all duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                      <h4 className="font-semibold text-navy mb-2">성과 요약</h4>
                      <div className="text-sm text-warm-600 space-y-1">
                        <div>• 노출수: {formatNumber(selectedCampaign.impressions)}</div>
                        <div>• 클릭수: {formatNumber(selectedCampaign.clicks)}</div>
                        <div>• 전환수: {formatNumber(selectedCampaign.conversions)}</div>
                        <div>• 예상 매출: {formatCurrency(selectedCampaign.conversions * 50000)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-warm-200 mx-auto mb-4" />
                    <p className="text-warm-500">왼쪽에서 캠페인을 선택하여 상세 정보를 확인하세요</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "trends" && (
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy font-serif flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-copper" />
                  주간 트렌드 분석
                </h2>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-warm-500" />
                  <span className="text-sm text-warm-500">2024.01.01 - 2024.01.07</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                  <div className="text-sm text-warm-500 mb-1">평균 일일 노출수</div>
                  <div className="text-2xl font-bold text-navy font-serif">
                    {formatNumber(
                      demoData.trends.reduce((sum, day) => sum + day.impressions, 0) / demoData.trends.length,
                    )}
                  </div>
                  <div className="text-sm text-green-600 mt-1">+8.5% 증가</div>
                </div>
                <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                  <div className="text-sm text-warm-500 mb-1">평균 일일 클릭수</div>
                  <div className="text-2xl font-bold text-navy font-serif">
                    {formatNumber(demoData.trends.reduce((sum, day) => sum + day.clicks, 0) / demoData.trends.length)}
                  </div>
                  <div className="text-sm text-green-600 mt-1">+12.3% 증가</div>
                </div>
                <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                  <div className="text-sm text-warm-500 mb-1">평균 일일 전환수</div>
                  <div className="text-2xl font-bold text-navy font-serif">
                    {formatNumber(
                      demoData.trends.reduce((sum, day) => sum + day.conversions, 0) / demoData.trends.length,
                    )}
                  </div>
                  <div className="text-sm text-green-600 mt-1">+15.7% 증가</div>
                </div>
              </div>

              <div className="h-64 flex items-end space-x-4">
                {demoData.trends.map((day) => (
                  <div key={day.date} className="flex-1 flex flex-col items-center">
                    <div className="w-full space-y-1">
                      <div
                        style={{
                          height: `${(day.impressions / Math.max(...demoData.trends.map((d) => d.impressions))) * 60}px`,
                        }}
                        className="bg-navy rounded-t-lg min-h-[10px] relative group"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy text-warm-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {formatNumber(day.impressions)}
                        </div>
                      </div>
                      <div
                        style={{
                          height: `${(day.clicks / Math.max(...demoData.trends.map((d) => d.clicks))) * 40}px`,
                        }}
                        className="bg-copper rounded-t-lg min-h-[8px] relative group"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy text-warm-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {formatNumber(day.clicks)}
                        </div>
                      </div>
                      <div
                        style={{
                          height: `${(day.conversions / Math.max(...demoData.trends.map((d) => d.conversions))) * 20}px`,
                        }}
                        className="bg-warm-400 rounded-t-lg min-h-[6px] relative group"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy text-warm-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {formatNumber(day.conversions)}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-warm-500 mt-2">{day.date.slice(-2)}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-6 mt-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-navy rounded mr-2"></div>
                  <span className="text-sm text-warm-600">노출수</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-copper rounded mr-2"></div>
                  <span className="text-sm text-warm-600">클릭수</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-warm-400 rounded mr-2"></div>
                  <span className="text-sm text-warm-600">전환수</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-2xl font-bold text-navy font-serif mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-copper" />
                  캠페인 성과 순위
                </h2>
                <div className="space-y-4">
                  {demoData.campaigns
                    .sort((a, b) => b.conversions - a.conversions)
                    .map((campaign, index) => (
                      <div
                        key={campaign.id}
                        className="flex items-center justify-between p-4 bg-warm-50 rounded-lg border border-warm-border"
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-warm-50 font-bold mr-4 ${
                              index === 0
                                ? "bg-navy"
                                : index === 1
                                  ? "bg-copper"
                                  : index === 2
                                    ? "bg-warm-400"
                                    : "bg-warm-300"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-navy">{campaign.name}</div>
                            <div className="text-sm text-warm-500">
                              CTR {campaign.ctr}% • CVR {campaign.cvr}%
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-navy">{formatNumber(campaign.conversions)}</div>
                          <div className="text-sm text-warm-500">전환수</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-2xl font-bold text-navy font-serif mb-6">성과 분석 인사이트</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <h3 className="font-semibold text-navy mb-2 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                      최고 성과 캠페인
                    </h3>
                    <p className="text-sm text-warm-600">
                      <strong>리타겟팅 캠페인</strong>이 가장 높은 전환율(5.0%)을 기록했습니다. 기존 고객 대상
                      마케팅의 효과가 입증되었습니다.
                    </p>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <h3 className="font-semibold text-navy mb-2 flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-copper" />
                      개선 포인트
                    </h3>
                    <p className="text-sm text-warm-600">
                      <strong>브랜드 인지도 캠페인</strong>의 CTR이 3.0%로 상대적으로 낮습니다. 크리에이티브 최적화가
                      필요합니다.
                    </p>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <h3 className="font-semibold text-navy mb-2 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-copper" />
                      ROI 분석
                    </h3>
                    <p className="text-sm text-warm-600">
                      전체 ROAS {demoData.analytics.roas}x로 목표(3.0x)를 달성했습니다. 특히 리타겟팅 캠페인의 ROI가
                      우수합니다.
                    </p>
                  </div>

                  <div className="p-4 bg-warm-50 rounded-lg border border-warm-border">
                    <h3 className="font-semibold text-navy mb-2">추천 액션</h3>
                    <div className="text-sm text-warm-600 space-y-1">
                      <div>• 리타겟팅 캠페인 예산 확대</div>
                      <div>• 브랜드 캠페인 크리에이티브 A/B 테스트</div>
                      <div>• 소셜미디어 캠페인 타겟팅 최적화</div>
                      <div>• 신제품 캠페인 키워드 확장</div>
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
              이 데모는 실제 마케팅 데이터 분석 플랫폼의 기능을 시뮬레이션합니다. 실시간 데이터 수집, 분석, 인사이트
              제공 기능을 확인해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
