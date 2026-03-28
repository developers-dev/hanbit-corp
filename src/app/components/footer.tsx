import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-warm-500">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-16">
          <div>
            <span className="text-lg font-bold text-white block mb-4">HANBIT</span>
            <p className="text-sm leading-relaxed max-w-xs mb-6 text-warm-600">
              보이지 않는 곳까지, 완벽하게.
              <br />
              엔터프라이즈급 기술 솔루션 파트너.
            </p>
            <div className="flex flex-col gap-1 text-sm text-warm-600">
              <span>hello@hanbit.dev</span>
              <span>+82 2-1234-5678</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-warm-400 mb-4">서비스</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">AI & Data</Link>
              <Link href="/services" className="hover:text-white transition-colors">Web Platform</Link>
              <Link href="/services" className="hover:text-white transition-colors">Cloud & Infra</Link>
              <Link href="/services" className="hover:text-white transition-colors">Custom Solution</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-warm-400 mb-4">회사</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">회사 소개</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">구축 사례</Link>
              <Link href="/careers" className="hover:text-white transition-colors">채용</Link>
              <Link href="/contact" className="hover:text-white transition-colors">문의</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-warm-400 mb-4">연락처</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <span>서울특별시 강남구</span>
              <span>테헤란로 123</span>
              <span>평일 09:00 - 18:00</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-xs text-warm-600">
          &copy; {new Date().getFullYear()} HANBIT Corp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
