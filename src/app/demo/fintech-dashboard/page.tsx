"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, Activity, BarChart3, PieChart, ArrowLeft } from "lucide-react"
import { demoProjects } from "@/lib/demo-data"
import Link from "next/link"

export default function FintechDashboardDemo() {
  const [activeTab, setActiveTab] = useState("portfolio")
  const demoData = demoProjects[2].data

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
        <div className="mb-8">
          <Link href="/portfolio" className="text-sm text-warm-500 hover:text-navy inline-flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            포트폴리오로 돌아가기
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4">
            <span className="bg-warm-100 text-warm-600 text-xs px-2.5 py-1 rounded inline-flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              핀테크 대시보드 데모
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-navy">
            투자 포트폴리오 관리
          </h1>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="mb-4">
              <DollarSign className="w-5 h-5 text-copper" />
            </div>
            <div className="text-2xl font-serif text-navy mb-1">
              {formatCurrency(demoData.portfolio.totalValue)}
            </div>
            <div className="text-sm text-warm-600">총 자산</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 text-sm font-medium">+{demoData.portfolio.dailyChange}%</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="mb-4">
              <TrendingUp className="w-5 h-5 text-copper" />
            </div>
            <div className="text-2xl font-serif text-navy mb-1">+{demoData.portfolio.dailyChange}%</div>
            <div className="text-sm text-warm-600">일일 수익률</div>
            <div className="text-green-600 text-sm mt-2">
              +{formatCurrency((demoData.portfolio.totalValue * demoData.portfolio.dailyChange) / 100)}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="mb-4">
              <BarChart3 className="w-5 h-5 text-copper" />
            </div>
            <div className="text-2xl font-serif text-navy mb-1">{demoData.portfolio.assets.length}</div>
            <div className="text-sm text-warm-600">보유 종목</div>
            <div className="text-warm-500 text-sm mt-2">다양한 포트폴리오</div>
          </div>

          <div className="bg-white rounded-lg border border-warm-border p-6">
            <div className="mb-4">
              <Activity className="w-5 h-5 text-copper" />
            </div>
            <div className="text-2xl font-serif text-navy mb-1">실시간</div>
            <div className="text-sm text-warm-600">데이터 업데이트</div>
            <div className="text-copper text-sm mt-2">지연시간 &lt; 100ms</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-10">
          {[
            { id: "portfolio", label: "포트폴리오", icon: PieChart },
            { id: "transactions", label: "거래내역", icon: Activity },
            { id: "chart", label: "차트", icon: BarChart3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded text-sm font-medium transition-colors inline-flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-navy text-warm-50"
                  : "bg-warm-100 text-warm-600 hover:bg-warm-200"
              }`}
            >
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === "portfolio" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-xl font-serif text-navy mb-6">보유 자산</h2>
                <div className="space-y-3">
                  {demoData.portfolio.assets.map((asset) => (
                    <div
                      key={asset.symbol}
                      className="flex items-center justify-between p-4 rounded-lg border border-warm-border"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-warm-100 rounded-lg flex items-center justify-center mr-4">
                          <span className="font-medium text-sm text-navy">{asset.symbol.slice(0, 2)}</span>
                        </div>
                        <div>
                          <div className="font-medium text-navy">{asset.symbol}</div>
                          <div className="text-sm text-warm-500">{asset.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-navy">{formatCurrency(asset.value)}</div>
                        <div className="text-sm text-warm-500">{asset.percentage}%</div>
                        <div
                          className={`text-sm flex items-center justify-end ${
                            asset.change >= 0 ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {asset.change >= 0 ? (
                            <TrendingUp className="w-3 h-3 mr-1" />
                          ) : (
                            <TrendingDown className="w-3 h-3 mr-1" />
                          )}
                          {asset.change >= 0 ? "+" : ""}
                          {asset.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-warm-border p-6">
                <h2 className="text-xl font-serif text-navy mb-6">자산 분배</h2>
                <div className="space-y-5">
                  {demoData.portfolio.assets.map((asset) => (
                    <div key={asset.symbol}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-navy">{asset.symbol}</span>
                        <span className="text-sm text-warm-500">{asset.percentage}%</span>
                      </div>
                      <div className="w-full bg-warm-100 rounded h-2">
                        <div
                          style={{ width: `${asset.percentage}%` }}
                          className="bg-navy h-2 rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <h2 className="text-xl font-serif text-navy mb-6">최근 거래내역</h2>
              <div className="space-y-3">
                {demoData.transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-warm-border"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                          transaction.type === "매수"
                            ? "bg-green-50"
                            : "bg-red-50"
                        }`}
                      >
                        {transaction.type === "매수" ? (
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-navy">
                          {transaction.type} {transaction.symbol}
                        </div>
                        <div className="text-sm text-warm-500">
                          {transaction.amount}주 × {formatCurrency(transaction.price)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-navy">{formatCurrency(transaction.total)}</div>
                      <div className="text-sm text-warm-500">{transaction.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "chart" && (
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <h2 className="text-xl font-serif text-navy mb-6">포트폴리오 가치 변화</h2>
              <div className="h-64 flex items-end space-x-4">
                {demoData.marketData.map((data) => (
                  <div
                    key={data.time}
                    style={{
                      height: `${(data.value / Math.max(...demoData.marketData.map((d) => d.value))) * 100}%`,
                    }}
                    className="flex-1 bg-navy rounded-t min-h-[20px] relative group"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy text-warm-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {formatCurrency(data.value)}
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-warm-500">
                      {data.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Demo Info */}
        <div className="mt-12">
          <div className="bg-white rounded-lg border border-warm-border p-6">
            <p className="text-sm text-warm-600 text-center">
              이 데모는 실시간 금융 데이터 처리와 시각화 기능을 보여줍니다. 실제 서비스에서는 WebSocket을 통한 실시간
              업데이트가 제공됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
