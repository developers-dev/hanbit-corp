"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { name: "서비스", href: "/services" },
    { name: "포트폴리오", href: "/portfolio" },
    { name: "회사소개", href: "/about" },
    { name: "채용", href: "/careers" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-50/95 backdrop-blur-sm border-b border-warm-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-baseline gap-0.5 group">
            <span className="text-[22px] font-bold tracking-tight font-serif text-navy">
              HANBIT
            </span>
            <span className="w-1.5 h-1.5 rounded-full inline-block mb-0.5 bg-copper" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-warm-600 hover:text-navy transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              상담 문의
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-warm-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-warm-border bg-warm-50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[15px] font-medium px-3 py-3 rounded-lg text-warm-600 hover:text-navy transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full gap-2 bg-navy hover:bg-navy-light text-warm-50 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  상담 문의
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
