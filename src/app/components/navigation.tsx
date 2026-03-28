"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation({ transparent = false }: { transparent?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 투명모드(메인 히어로 위)에서만 스크롤 전 흰 글자, 그 외는 항상 다크 글자
  const isDark = !transparent || scrolled

  const navItems = [
    { name: "서비스", href: "/services" },
    { name: "구축 사례", href: "/portfolio" },
    { name: "회사소개", href: "/about" },
    { name: "채용", href: "/careers" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark
          ? "bg-white/95 backdrop-blur-sm border-b border-warm-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className={`text-lg font-bold tracking-tight ${isDark ? "text-navy" : "text-white"}`}>
              HANBIT
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${
                  isDark
                    ? "text-warm-600 hover:text-navy"
                    : "text-warm-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white px-5 py-2 rounded-md text-[13px] font-semibold transition-colors"
            >
              문의하기
            </Link>
          </div>

          <button
            className={`md:hidden p-2 ${isDark ? "text-navy" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-warm-border bg-white rounded-b-lg shadow-lg">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[14px] font-medium px-4 py-3 text-warm-700 hover:text-navy hover:bg-warm-100 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-copper hover:bg-copper-light text-white py-2.5 rounded-md text-[13px] font-semibold transition-colors"
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
