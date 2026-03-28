import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-warm-400">
      <div className="max-w-[1120px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">
          <div>
            <div className="mb-5">
              <span className="text-[22px] font-bold tracking-tight text-white font-serif">
                HANBIT
              </span>
              <span className="w-1.5 h-1.5 rounded-full inline-block mb-0.5 ml-0.5 bg-copper" />
            </div>
            <p className="text-[15px] leading-relaxed max-w-sm mb-6 text-warm-500">
              보이지 않는 곳까지, 완벽하게.
              <br />
              타협 없는 개발 파트너십을 약속합니다.
            </p>
            <p className="text-sm text-warm-600">
              &copy; {new Date().getFullYear()} HANBIT. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-5 tracking-wide">서비스</h4>
            <div className="flex flex-col gap-3 text-[15px] text-warm-500">
              <Link href="/services" className="hover:text-white transition-colors">AI & Data</Link>
              <Link href="/services" className="hover:text-white transition-colors">Web Development</Link>
              <Link href="/services" className="hover:text-white transition-colors">System Architecture</Link>
              <Link href="/services" className="hover:text-white transition-colors">Custom Platform</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-5 tracking-wide">회사</h4>
            <div className="flex flex-col gap-3 text-[15px] text-warm-500">
              <Link href="/about" className="hover:text-white transition-colors">회사 소개</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link>
              <Link href="/careers" className="hover:text-white transition-colors">채용</Link>
              <Link href="/contact" className="hover:text-white transition-colors">연락처</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-light/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-warm-600">
            <span>hello@hanbit.dev</span>
            <span>서울특별시 강남구</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
