"use client"

import Navigation from "../components/navigation"

export default function BrandPage() {
  const Dot = ({ size = 7, color = "#1a1a1a", className = "" }: { size?: number; color?: string; className?: string }) => (
    <span
      className={`inline-block rounded-sm ${className}`}
      style={{ width: size, height: size, background: color, marginLeft: size * 0.7, marginBottom: size * 4 }}
    />
  )

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-warm-800 pt-32 pb-24 text-center">
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-mono font-light tracking-[0.35em] text-white inline-block">
          HANBIT<Dot size={8} color="#fff" className="mb-10" />
        </h1>
        <p className="font-mono text-[10px] font-light tracking-[0.5em] uppercase text-warm-700 mt-8">
          Monochrome Identity System
        </p>
      </section>

      <div className="max-w-[900px] mx-auto px-7">
        {/* 01 — Primary Wordmark */}
        <section className="pt-16">
          <p className="font-mono text-[9px] tracking-[4px] text-warm-400 mb-1.5">01</p>
          <p className="font-mono text-[13px] font-normal tracking-[4px] uppercase text-warm-800 mb-2">Primary Wordmark</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-7 max-w-[520px]">
            IBM Plex Mono Light + 마침표 위치의 작은 사각 도트. 이 도트 하나가 &quot;한 비트(1)&quot;이며, 한비트의 유일한 그래픽 요소입니다.
          </p>

          <div className="border border-warm-200 rounded-[14px] overflow-hidden mb-4">
            <div className="grid grid-cols-[1fr_280px] gap-px bg-warm-200">
              <div className="bg-white p-12 flex items-center justify-center">
                <span className="font-mono text-[48px] font-light tracking-[16px] text-warm-800">
                  HANBIT<Dot size={7} />
                </span>
              </div>
              <div className="bg-warm-100 p-7 flex flex-col justify-center gap-4 text-[12px] leading-relaxed text-warm-500">
                <div><strong className="text-warm-800 font-normal">도트(■) = 1 bit</strong><br />로고 끝의 작은 사각형. 마침표도, 장식도 아닌 — &quot;하나의 비트&quot;.</div>
                <div><strong className="text-warm-800 font-normal">위치 = 우상단</strong><br />T 다음, 베이스라인 위. 항상 같은 위치.</div>
                <div><strong className="text-warm-800 font-normal">크기 = 스트로크 굵기</strong><br />서체의 획 두께와 같은 크기. 비율 고정.</div>
              </div>
            </div>
            <div className="flex items-center gap-5 px-8 py-7 border-t border-warm-200 text-[12px] text-warm-500">
              <span className="font-mono text-[24px] font-light tracking-[10px] text-warm-800">
                HANBIT<Dot size={5} />
              </span>
              <span className="ml-auto font-mono text-[9px] text-warm-400 tracking-[1px]">← 이 점이 한비트의 전부입니다</span>
            </div>
          </div>
        </section>

        {/* 02 — Sizes */}
        <section className="pt-16">
          <p className="font-mono text-[9px] tracking-[4px] text-warm-400 mb-1.5">02</p>
          <p className="font-mono text-[13px] font-normal tracking-[4px] uppercase text-warm-800 mb-7">Size Variants</p>
          <div className="border border-warm-200 rounded-[14px] overflow-hidden">
            {[
              { label: "LARGE", size: "text-[48px] tracking-[16px]", dot: 7, mb: 28 },
              { label: "MEDIUM", size: "text-[32px] tracking-[14px]", dot: 5, mb: 18 },
              { label: "SMALL", size: "text-[20px] tracking-[10px]", dot: 3.5, mb: 12 },
              { label: "MICRO", size: "text-[13px] font-normal tracking-[6px]", dot: 2.5, mb: 8 },
            ].map((item, i) => (
              <div key={item.label} className={`flex items-center px-8 py-8 gap-5 ${i < 3 ? "border-b border-warm-200" : ""}`}>
                <span className="font-mono text-[9px] text-warm-400 tracking-[2px] w-[72px] shrink-0">{item.label}</span>
                <span className={`font-mono font-light ${item.size} text-warm-800`}>
                  HANBIT
                  <span className="inline-block rounded-sm bg-warm-800" style={{ width: item.dot, height: item.dot, marginLeft: item.dot * 0.7, marginBottom: item.mb }} />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Applications */}
        <section className="pt-16">
          <p className="font-mono text-[9px] tracking-[4px] text-warm-400 mb-1.5">03</p>
          <p className="font-mono text-[13px] font-normal tracking-[4px] uppercase text-warm-800 mb-2">Applications</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-7 max-w-[520px]">
            블랙 위의 화이트, 화이트 위의 블랙. 이 두 가지가 전부입니다.
          </p>
          <div className="grid grid-cols-3 gap-px bg-warm-200 rounded-[14px] overflow-hidden">
            <div className="bg-white h-44 flex flex-col items-center justify-center gap-3">
              <span className="font-mono text-[20px] font-light tracking-[10px] text-warm-800">HANBIT<Dot size={3.5} /></span>
              <span className="font-mono text-[8px] tracking-[1px] text-warm-800 opacity-30">WHITE</span>
            </div>
            <div className="bg-warm-800 h-44 flex flex-col items-center justify-center gap-3">
              <span className="font-mono text-[20px] font-light tracking-[10px] text-white">HANBIT<Dot size={3.5} color="#fff" /></span>
              <span className="font-mono text-[8px] tracking-[1px] text-white opacity-30">BLACK</span>
            </div>
            <div className="bg-warm-100 h-44 flex flex-col items-center justify-center gap-3">
              <span className="font-mono text-[20px] font-light tracking-[10px] text-warm-800">HANBIT<Dot size={3.5} /></span>
              <span className="font-mono text-[8px] tracking-[1px] text-warm-800 opacity-30">LIGHT GRAY</span>
            </div>
          </div>
        </section>

        {/* 04 — Brand Colors */}
        <section className="pt-16">
          <p className="font-mono text-[9px] tracking-[4px] text-warm-400 mb-1.5">04</p>
          <p className="font-mono text-[13px] font-normal tracking-[4px] uppercase text-warm-800 mb-2">Brand Colors</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-7 max-w-[520px]">
            블랙, 화이트, 그리고 3단계 그레이. 끝. 이 5개로 모든 것을 만듭니다.
          </p>
          <div className="border border-warm-200 rounded-[14px] p-8 flex gap-5 flex-wrap">
            {[
              { bg: "bg-warm-800", name: "BLACK", hex: "#1A1A1A", use: "로고 · 텍스트 · 배경" },
              { bg: "bg-white border border-warm-200", name: "WHITE", hex: "#FFFFFF", use: "로고 · 배경" },
              { bg: "bg-warm-700", name: "DARK GRAY", hex: "#555555", use: "서브텍스트 · 보조" },
              { bg: "bg-warm-200", name: "LIGHT GRAY", hex: "#E8E8E8", use: "구분선 · 보더" },
              { bg: "bg-warm-100 border border-warm-200", name: "SURFACE", hex: "#F7F7F7", use: "카드 · 서피스" },
            ].map((c) => (
              <div key={c.hex} className="text-center">
                <div className={`w-20 h-20 rounded-2xl ${c.bg} mb-2.5`} />
                <div className="font-mono text-[9px] text-warm-400 tracking-[1px] mb-0.5">{c.name}</div>
                <div className="font-mono text-[10px] text-warm-500">{c.hex}</div>
                <div className="font-mono text-[8px] text-warm-400 mt-1">{c.use}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Business Card */}
        <section className="pt-16 pb-16">
          <p className="font-mono text-[9px] tracking-[4px] text-warm-400 mb-1.5">05</p>
          <p className="font-mono text-[13px] font-normal tracking-[4px] uppercase text-warm-800 mb-7">Business Card</p>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-warm-800 rounded-xl p-7 flex flex-col justify-between h-[188px]">
              <span className="font-mono text-[20px] font-light tracking-[12px] text-white">
                HANBIT<Dot size={3.5} color="#fff" />
              </span>
              <span className="font-mono text-[8px] font-light tracking-[4px] text-warm-700">ONE BIT CHANGES EVERYTHING</span>
            </div>
            <div className="bg-white border border-warm-200 rounded-xl p-7 flex flex-col justify-between h-[188px]">
              <div>
                <div className="text-[14px] font-normal text-warm-800 mb-1">김진한</div>
                <div className="font-mono text-[10px] font-light text-warm-500 tracking-[1px]">CEO & Platform Architect</div>
              </div>
              <div className="font-mono text-[10px] font-light leading-[1.9] tracking-[0.5px] text-warm-500">
                hanbit@hanbit.xyz<br />
                +82-1670-0247<br />
                hanbit.xyz
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-warm-200 max-w-[900px] mx-auto" />
      <div className="text-center py-16">
        <span className="font-mono text-[18px] font-light tracking-[10px] text-warm-800">
          HANBIT<Dot size={4} className="mb-2.5" />
        </span>
        <div className="font-mono text-[10px] font-light tracking-[3px] text-warm-400 mt-2">
          One bit changes everything.
        </div>
      </div>
    </div>
  )
}
