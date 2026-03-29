"use client"

import { ArrowRight, ChevronRight } from "lucide-react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations("Home")

  const metricKeys = ["projects", "availability", "experience", "engineers"] as const
  const industryKeys = ["finance", "manufacturing", "retail", "public", "healthcare", "media"] as const
  const capabilityKeys = ["aiData", "webPlatform", "cloudInfra", "customSolution"] as const
  const projectKeys = ["aiRisk", "smartFactory", "commerce"] as const
  const diffKeys = ["domain", "endToEnd", "partnership"] as const
  const clientKeys = ["finance", "manufacturing", "retail", "it", "public", "global"] as const

  return (
    <div className="min-h-screen bg-white">
      <Navigation transparent />

      {/* Hero */}
      <section className="bg-navy text-white pt-36 pb-28 lg:pb-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-[860px]">
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.25] font-bold mb-8 text-white tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-[17px] text-warm-400 leading-relaxed mb-10 max-w-[640px]">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-warm-800 px-7 py-3 rounded font-medium text-[14px] transition-colors"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-warm-600 hover:border-warm-400 text-warm-300 hover:text-white px-7 py-3 rounded font-medium text-[14px] transition-colors"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-warm-border py-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-semibold text-warm-500 tracking-wider uppercase shrink-0">
              {t("trustIndicators.label")}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {clientKeys.map((key) => (
                <span key={key} className="text-sm font-medium text-warm-400 tracking-wide">
                  {t(`trustIndicators.clients.${key}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metricKeys.map((key) => (
              <div key={key}>
                <div className="text-[2.75rem] font-bold text-navy mb-2 tracking-tight">{t(`metrics.${key}.value`)}</div>
                <div className="text-[14px] font-semibold text-navy mb-1">{t(`metrics.${key}.label`)}</div>
                <div className="text-xs text-warm-500">{t(`metrics.${key}.sub`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="bg-warm-100 py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
            <div>
              <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">{t("industries.sectionLabel")}</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-navy">
                {t("industries.title")}
              </h2>
            </div>
            <p className="text-sm text-warm-600 max-w-md leading-relaxed">
              {t("industries.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryKeys.map((key) => (
              <div key={key} className="bg-white p-8 rounded-lg border border-warm-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-navy">{t(`industries.items.${key}.sector`)}</h3>
                  <span className="text-xs font-semibold text-copper">{t(`industries.items.${key}.projects`)}</span>
                </div>
                <p className="text-sm text-warm-600 leading-relaxed">{t(`industries.items.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">{t("capabilities.sectionLabel")}</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-navy">
              {t("capabilities.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-warm-border rounded-lg overflow-hidden border border-warm-border">
            {capabilityKeys.map((key) => {
              const tags = t.raw(`capabilities.items.${key}.tags`) as string[]
              return (
                <div key={key} className="bg-white p-10 hover:bg-warm-100 transition-colors group">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs font-bold text-copper">{t(`capabilities.items.${key}.num`)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-copper transition-colors">
                    {t(`capabilities.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-warm-600 leading-relaxed mb-6">{t(`capabilities.items.${key}.desc`)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs text-warm-500 bg-warm-200 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-right">
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline">
              {t("capabilities.viewAll")}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-navy-dark text-white py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
            <div>
              <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">{t("projects.sectionLabel")}</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-white">
                {t("projects.title")}
              </h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline">
              {t("projects.viewAll")}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projectKeys.map((key) => {
              const results = t.raw(`projects.items.${key}.results`) as string[]
              return (
                <Link
                  key={key}
                  href="/portfolio"
                  className="p-8 rounded-lg border border-white/10 hover:border-copper/40 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <span className="text-xs font-semibold text-copper mb-4 block">{t(`projects.items.${key}.category`)}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-copper transition-colors">
                    {t(`projects.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-warm-500 mb-6">{t(`projects.items.${key}.client`)}</p>
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {results.map((result) => (
                      <div key={result} className="flex items-center gap-2 text-sm text-warm-400">
                        <span className="w-1 h-1 rounded-full bg-copper shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-copper tracking-wider uppercase mb-3">{t("differentiators.sectionLabel")}</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-navy">
              {t("differentiators.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {diffKeys.map((key, i) => (
              <div key={key} className="text-center lg:text-left">
                <div className="text-4xl font-bold text-warm-300 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{t(`differentiators.items.${key}.title`)}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{t(`differentiators.items.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white mb-2">
              {t("cta.title")}
            </h2>
            <p className="text-warm-400 text-[15px]">
              {t("cta.description")}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white px-8 py-3.5 rounded font-semibold text-[14px] transition-colors shrink-0"
          >
            {t("cta.button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
