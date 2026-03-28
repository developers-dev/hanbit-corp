"use client"

import { useState } from "react"
import { User, ShoppingBag, Star, TrendingUp, Zap, ArrowLeft } from "lucide-react"
import { demoProjects } from "@/lib/demo-data"
import Link from "next/link"

export default function AIRecommendationDemo() {
  const [selectedUser, setSelectedUser] = useState(1)
  const demoData = demoProjects[1].data

  const selectedUserData = demoData.users.find((user) => user.id === selectedUser)
  const recommendedProductIds = (demoData.recommendations as Record<number, number[]>)[selectedUser] || []
  const recommendedProducts = demoData.products.filter((product) => recommendedProductIds.includes(product.id))

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Back Link */}
        <div className="mb-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm text-warm-500 hover:text-navy transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            포트폴리오로 돌아가기
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-copper mb-4">
            AI 추천 시스템 데모
          </p>
          <h1 className="text-4xl lg:text-5xl font-serif text-navy mb-4">
            개인화 상품 추천
          </h1>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            사용자의 선호도를 분석하여 맞춤형 상품을 추천하는 AI 시스템입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Selection */}
          <div>
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <h2 className="text-xl font-serif text-navy mb-6 flex items-center">
                <User className="w-5 h-5 mr-2.5 text-copper" />
                사용자 선택
              </h2>
              <div className="space-y-3">
                {demoData.users.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => setSelectedUser(user.id)}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      selectedUser === user.id
                        ? "bg-navy text-warm-50"
                        : "bg-warm-100 text-warm-600 hover:bg-warm-200"
                    }`}
                  >
                    <div className="font-medium mb-1">{user.name}</div>
                    <div className={`text-sm ${selectedUser === user.id ? "text-warm-200" : "text-warm-500"}`}>
                      {user.age}세 · {user.preferences.join(", ")}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div>
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <h2 className="text-xl font-serif text-navy mb-6">사용자 프로필</h2>
              {selectedUserData && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warm-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-copper" />
                    </div>
                    <h3 className="text-lg font-serif text-navy">{selectedUserData.name}</h3>
                    <p className="text-warm-500 text-sm">{selectedUserData.age}세</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-navy mb-3">관심 분야</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedUserData.preferences.map((pref, index) => (
                        <span
                          key={index}
                          className="bg-warm-100 text-warm-600 text-xs px-2.5 py-1 rounded"
                        >
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-warm-50 rounded-lg p-4 border border-warm-border">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 text-copper mr-2" />
                      <span className="text-sm font-medium text-navy">AI 분석 결과</span>
                    </div>
                    <p className="text-sm text-warm-600">
                      {selectedUserData.preferences.length}개 카테고리에 관심을 보이며, 개인화된 추천 정확도는{" "}
                      <span className="font-medium text-copper">87%</span>입니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="bg-white rounded-lg border border-warm-border p-6">
              <h2 className="text-xl font-serif text-navy mb-6 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2.5 text-copper" />
                추천 상품
              </h2>
              <div className="space-y-3">
                {recommendedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="p-4 bg-warm-50 rounded-lg border border-warm-border"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-navy">{product.name}</h3>
                        <p className="text-sm text-warm-500">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-navy">{product.price.toLocaleString()}원</div>
                        <div className="flex items-center text-sm text-warm-500">
                          <Star className="w-3.5 h-3.5 mr-1 text-copper fill-current" />
                          {product.rating}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-warm-100 text-warm-600 text-xs px-2.5 py-1 rounded">
                        추천도: {95 - index * 5}%
                      </span>
                      <button className="bg-navy hover:bg-navy-light text-warm-50 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors">
                        장바구니
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-warm-50 rounded-lg border border-warm-border">
                <div className="flex items-center mb-2">
                  <Zap className="w-4 h-4 text-copper mr-2" />
                  <span className="text-sm font-medium text-navy">AI 성능 지표</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-warm-500">정확도:</span>
                    <span className="font-medium text-copper ml-1">87%</span>
                  </div>
                  <div>
                    <span className="text-warm-500">응답시간:</span>
                    <span className="font-medium text-copper ml-1">45ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-16 text-center">
          <div className="border-t border-warm-border pt-8">
            <p className="text-sm text-warm-500 max-w-xl mx-auto">
              이 데모는 실제 AI 추천 시스템의 작동 방식을 시뮬레이션합니다. 사용자를 선택하여 개인화된 추천 결과를
              확인해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
