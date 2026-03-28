"use client"

import { useState } from "react"
import { ShoppingBag, Star, Plus, Minus, Heart, Filter, Search, ArrowLeft } from "lucide-react"
import { demoProjects } from "@/lib/demo-data"
import Link from "next/link"

export default function MobileCommerceDemo() {
  const [cart, setCart] = useState<any[]>([])
  const [favorites, setFavorites] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState("products")
  const demoData = demoProjects[4].data

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, change) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
          }
          return item
        })
        .filter((item) => item.quantity > 0),
    )
  }

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Back Button */}
      <div className="p-6">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-warm-500 hover:text-navy transition-colors">
          <ArrowLeft className="w-4 h-4" />
          포트폴리오로 돌아가기
        </Link>
      </div>

      {/* Mobile-like Container */}
      <div className="max-w-md mx-auto bg-white border border-warm-border rounded-lg overflow-hidden min-h-screen">
        {/* Header */}
        <div className="bg-navy p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-serif font-bold text-warm-50">Fashion Store</h1>
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-warm-50" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-copper text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-warm-500" />
              <input
                placeholder="상품 검색..."
                className="w-full pl-10 pr-4 py-2 bg-navy-light border border-warm-50/20 text-warm-50 placeholder:text-warm-50/60 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-warm-50/30"
              />
            </div>
            <button className="p-2 border border-warm-50/20 text-warm-50 hover:bg-navy-light rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center">
            <div className="text-sm text-warm-50/90">{demoData.user.name}</div>
            <div className="text-xs text-warm-50/70">
              {demoData.user.level} 등급 &middot; 적립금 {demoData.user.points.toLocaleString()}원
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 p-2 bg-warm-50">
          {[
            { id: "products", label: "상품" },
            { id: "cart", label: "장바구니" },
            { id: "orders", label: "주문내역" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                activeTab === tab.id ? "bg-navy text-warm-50" : "text-warm-600 hover:text-navy"
              }`}
            >
              {tab.label}
              {tab.id === "cart" && getTotalItems() > 0 && (
                <span className="ml-1 text-xs bg-copper text-white rounded-full px-1.5 py-0.5">
                  {getTotalItems()}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {activeTab === "products" && (
            <div className="space-y-4">
              {demoData.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-warm-border overflow-hidden">
                  <div className="flex">
                    <div className="w-24 h-24 bg-warm-50 flex items-center justify-center shrink-0">
                      <span className="text-2xl">👕</span>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-semibold text-navy">{product.name}</h3>
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className={`p-1 ${favorites.includes(product.id) ? "text-red-500" : "text-warm-500"}`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                        </button>
                      </div>
                      <div className="text-sm text-warm-500 mb-2">{product.category}</div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-copper">{product.price.toLocaleString()}원</div>
                          <div className="flex items-center text-xs text-warm-600">
                            <Star className="w-3 h-3 mr-1 fill-current text-amber-400" />
                            {product.rating} ({product.reviews})
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-navy hover:bg-navy-light text-warm-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "cart" && (
            <div className="space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-warm-500/30 mx-auto mb-4" />
                  <p className="text-warm-600">장바구니가 비어있습니다</p>
                </div>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg border border-warm-border p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-warm-50 rounded-lg flex items-center justify-center shrink-0">
                          <span className="text-xl">👕</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-semibold text-navy">{item.name}</h3>
                          <p className="text-sm text-warm-600">{item.price.toLocaleString()}원</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center border border-warm-border rounded-lg text-warm-600 hover:text-navy transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-navy">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center border border-warm-border rounded-lg text-warm-600 hover:text-navy transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-white rounded-lg border border-warm-border p-5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-serif font-semibold text-navy">총 결제금액</span>
                      <span className="text-2xl font-bold text-copper">{getTotalPrice().toLocaleString()}원</span>
                    </div>
                    <button className="w-full bg-navy hover:bg-navy-light text-warm-50 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
                      주문하기
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-4">
              {demoData.orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg border border-warm-border p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-serif font-semibold text-navy">주문 #{order.id}</div>
                      <div className="text-sm text-warm-500">{order.date}</div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "배송완료"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-600">{order.items}개 상품</span>
                    <span className="font-bold text-copper">{order.total.toLocaleString()}원</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Demo Info */}
        <div className="p-4 bg-warm-50 border-t border-warm-border">
          <p className="text-xs text-warm-500 text-center">모바일 커머스 앱 데모 - 실제 결제는 진행되지 않습니다</p>
        </div>
      </div>
    </div>
  )
}
