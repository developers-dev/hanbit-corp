"use client"

import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-warm-100">
      <Navigation />

      {/* Hero */}
      <section className="bg-warm-800 pt-32 pb-20 text-center">
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-mono font-light tracking-[0.35em] text-white mb-5">
          HANBIT
        </h1>
        <p className="font-mono text-[11px] font-light tracking-[0.4em] uppercase text-warm-600">
          Brand Identity System
        </p>
      </section>

      <div className="max-w-[960px] mx-auto px-7">
        {/* 01 — Primary Wordmark */}
        <section className="pt-12">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">01 — Primary Wordmark</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-6 max-w-[560px]">
            IBM Plex Mono Light, letter-spacing 18px. 모노스페이스의 정직함 위에 Light 웨이트의 우아함. 넓은 자간이 각 글자에 존재감을 부여합니다.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { size: "text-[48px] tracking-[16px]", label: "PRIMARY — 48px", weight: "font-light" },
              { size: "text-[32px] tracking-[14px]", label: "SECONDARY — 32px", weight: "font-light" },
              { size: "text-[20px] tracking-[12px]", label: "COMPACT — 20px", weight: "font-light" },
              { size: "text-[13px] tracking-[8px]", label: "MICRO — 13px (Regular)", weight: "font-normal" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-warm-200 rounded-2xl p-10 flex flex-col items-center justify-center gap-4">
                <span className={`font-mono ${item.weight} ${item.size} text-warm-800`}>HANBIT</span>
                <span className="font-mono text-[9px] tracking-[2px] text-warm-400">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 02 — Color Applications */}
        <section className="pt-12">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">02 — Color Applications</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-6 max-w-[560px]">
            4가지 핵심 배경에서의 워드마크. 어디서든 선명하게 읽히면서 톤을 유지합니다.
          </p>
          <div className="grid grid-cols-4 gap-px rounded-2xl overflow-hidden">
            {[
              { bg: "bg-white", text: "text-warm-800", hex: "#FFFFFF", hexColor: "text-warm-800" },
              { bg: "bg-warm-800", text: "text-white", hex: "#1A1A1A", hexColor: "text-white" },
              { bg: "bg-copper", text: "text-white", hex: "#C8B090", hexColor: "text-white" },
              { bg: "bg-navy", text: "text-[#c8ddf0]", hex: "#0D1B2A", hexColor: "text-[#c8ddf0]" },
            ].map((item) => (
              <div key={item.hex} className={`${item.bg} h-40 flex flex-col items-center justify-center gap-3`}>
                <span className={`font-mono text-[22px] font-light tracking-[10px] ${item.text}`}>HANBIT</span>
                <span className={`font-mono text-[9px] tracking-[1px] opacity-50 ${item.hexColor}`}>{item.hex}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Lockup Variations */}
        <section className="pt-12">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">03 — Lockup Variations</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-6 max-w-[560px]">
            태그라인, 한글 표기, 서브 브랜드 결합시의 레이아웃.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-warm-200 rounded-2xl p-9 flex flex-col items-center justify-center gap-2">
              <span className="font-mono text-[32px] font-light tracking-[14px] text-warm-800">HANBIT</span>
              <span className="font-mono text-[9px] font-light tracking-[5px] text-warm-500">ONE BIT CHANGES EVERYTHING</span>
            </div>
            <div className="bg-white border border-warm-200 rounded-2xl p-9 flex flex-col items-center justify-center gap-2">
              <span className="font-mono text-[32px] font-light tracking-[14px] text-warm-800">HANBIT</span>
              <span className="text-[11px] font-light tracking-[8px] text-warm-500">한비트</span>
            </div>
            <div className="bg-warm-800 rounded-2xl p-9 flex flex-col items-center justify-center gap-2">
              <span className="font-mono text-[32px] font-light tracking-[14px] text-white">HANBIT</span>
              <span className="font-mono text-[9px] font-light tracking-[5px] text-warm-600">ONE BIT CHANGES EVERYTHING</span>
            </div>
            <div className="bg-warm-800 rounded-2xl p-9 flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-extralight tracking-[10px] text-warm-600 mb-1">한비트</span>
              <span className="font-mono text-[32px] font-light tracking-[14px] text-white">HANBIT</span>
            </div>
          </div>
        </section>

        {/* 04 — App Icon & Favicon */}
        <section className="pt-12">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">04 — App Icon & Favicon</p>
          <p className="text-[13px] text-warm-500 leading-relaxed mb-6 max-w-[560px]">
            축소 사용시 &quot;Hb&quot; 또는 &quot;H&quot; 모노그램으로 전환. 같은 서체, 같은 웨이트.
          </p>
          <div className="bg-white border border-warm-200 rounded-2xl p-10 flex justify-center">
            <div className="flex gap-5 items-end">
              {[
                { size: "w-24 h-24", font: "text-[36px] tracking-[2px]", label: "96px", char: "Hb", bg: "bg-warm-800" },
                { size: "w-16 h-16", font: "text-[24px] tracking-[1px]", label: "64px", char: "Hb", bg: "bg-warm-800" },
                { size: "w-11 h-11", font: "text-[17px]", label: "44px", char: "Hb", bg: "bg-warm-800" },
                { size: "w-8 h-8", font: "text-[15px]", label: "32px", char: "H", bg: "bg-warm-800" },
              ].map((icon) => (
                <div key={icon.label} className="flex flex-col items-center gap-2">
                  <div className={`${icon.size} ${icon.bg} rounded-[22%] flex items-center justify-center font-mono font-light ${icon.font} text-white`}>
                    {icon.char}
                  </div>
                  <span className="font-mono text-[9px] text-warm-400 tracking-[2px]">{icon.label}</span>
                </div>
              ))}
              <div className="w-px h-20 bg-warm-200 mx-3" />
              {[
                { bg: "bg-copper", text: "text-white", label: "GOLD" },
                { bg: "bg-white border border-warm-200", text: "text-warm-800", label: "LIGHT" },
                { bg: "bg-navy", text: "text-[#c8ddf0]", label: "NAVY" },
              ].map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <div className={`w-16 h-16 ${v.bg} rounded-[22%] flex items-center justify-center font-mono font-light text-[24px] tracking-[1px] ${v.text}`}>
                    Hb
                  </div>
                  <span className="font-mono text-[9px] text-warm-400 tracking-[2px]">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — Brand Colors */}
        <section className="pt-12">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">05 — Brand Colors</p>
          <div className="bg-white border border-warm-200 rounded-2xl p-8 flex gap-4 flex-wrap">
            {[
              { color: "bg-warm-800", name: "PRIMARY", hex: "#1A1A1A" },
              { color: "bg-copper", name: "ACCENT", hex: "#C8B090" },
              { color: "bg-navy", name: "NAVY", hex: "#0D1B2A" },
              { color: "bg-warm-100 border border-warm-200", name: "SURFACE", hex: "#F5F3F0" },
              { color: "bg-white border border-warm-200", name: "WHITE", hex: "#FFFFFF" },
            ].map((c) => (
              <div key={c.hex} className="text-center">
                <div className={`w-20 h-20 rounded-2xl ${c.color} mb-2`} />
                <div className="font-mono text-[9px] text-warm-400 tracking-[1px]">{c.name}</div>
                <div className="font-mono text-[10px] text-warm-500">{c.hex}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — Typography */}
        <section className="pt-12">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">06 — Typography Pairing</p>
          <div className="bg-white border border-warm-200 rounded-2xl p-10">
            <div className="mb-8">
              <span className="font-mono text-[9px] text-warm-400 tracking-[2px]">LOGO FONT</span>
              <div className="font-mono text-[36px] font-light tracking-[12px] text-warm-800 mt-2">HANBIT</div>
              <div className="font-mono text-[12px] font-light text-warm-500 mt-1.5 tracking-[1px]">IBM Plex Mono Light — AaBbCc 0123456789</div>
            </div>
            <div className="border-t border-warm-200 pt-6 mb-7">
              <span className="font-mono text-[9px] text-warm-400 tracking-[2px]">HEADING FONT</span>
              <div className="text-[28px] font-medium text-warm-800 mt-2" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>The quick brown fox</div>
              <div className="font-mono text-[12px] font-light text-warm-500 mt-1.5 tracking-[1px]">IBM Plex Sans Medium</div>
            </div>
            <div className="border-t border-warm-200 pt-6">
              <span className="font-mono text-[9px] text-warm-400 tracking-[2px]">BODY FONT</span>
              <div className="text-[15px] font-light text-warm-600 mt-2 leading-relaxed max-w-[480px]">
                한비트는 하나의 비트에서 시작합니다. 가장 작은 단위가 가장 큰 변화를 만든다고 믿습니다. One bit changes everything.
              </div>
              <div className="font-mono text-[12px] font-light text-warm-500 mt-1.5 tracking-[1px]">IBM Plex Sans Light</div>
            </div>
          </div>
        </section>

        {/* 07 — Business Card */}
        <section className="pt-12 pb-16">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-warm-400 mb-5">07 — Business Card Mockup</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-warm-800 rounded-xl p-9 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[24px] font-light tracking-[12px] text-white">HANBIT</span>
              <span className="font-mono text-[8px] font-light tracking-[4px] text-warm-600">ONE BIT CHANGES EVERYTHING</span>
            </div>
            <div className="bg-white border border-warm-200 rounded-xl p-9 flex flex-col justify-between h-[200px]">
              <div>
                <div className="text-[14px] font-normal text-warm-800 mb-1">김진한</div>
                <div className="font-mono text-[10px] font-light text-warm-500 tracking-[1px]">CEO & Platform Architect</div>
              </div>
              <div className="font-mono text-[10px] font-light leading-[1.8] tracking-[0.5px] text-warm-500">
                hanbit@hanbit.xyz<br />
                +82-1670-0247<br />
                hanbit.xyz
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="text-center py-14 font-mono text-[9px] text-warm-400 tracking-[3px]">
        HANBIT BRAND IDENTITY SYSTEM — IBM Plex Mono Light<br />
        <span className="text-warm-500 mt-1 inline-block">One bit changes everything.</span>
      </div>
    </div>
  )
}
