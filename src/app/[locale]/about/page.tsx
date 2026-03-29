"use client"

import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Link } from "@/i18n/navigation"

export default function AboutPage() {
  const t = useTranslations("About")

  const memberKeys = ["kimTaeHyun", "leeSuJin", "parkMinSu", "jungHaYoung"] as const
  const memberSkills: Record<string, string[]> = {
    kimTaeHyun: ["Kubernetes", "Kafka", "Airflow", "TensorFlow", "PyTorch", "Redis", "Spring Boot"],
    leeSuJin: ["Python", "TensorFlow", "Data Analysis"],
    parkMinSu: ["React", "TypeScript", "UI/UX"],
    jungHaYoung: ["Node.js", "Database", "Cloud"],
  }

  const timelineYears = ["2023", "2024", "2025", "2026"] as const

  const valueKeys = ["excellence", "collaboration", "innovation"] as const

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
              {t("hero.sectionLabel")}
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]">
              {t("hero.title")}
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
                {t("mission.sectionLabel")}
              </p>
              <h3 className="text-2xl mb-5 font-serif text-navy font-semibold">
                {t("mission.title")}
              </h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                {t("mission.description")}
              </p>
              <ul className="space-y-3">
                {(t.raw("mission.items") as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-warm-600">
                    <span className="w-1 h-1 rounded-full shrink-0 bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
                {t("vision.sectionLabel")}
              </p>
              <h3 className="text-2xl mb-5 font-serif text-navy font-semibold">
                {t("vision.title")}
              </h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                {t("vision.description")}
              </p>
              <ul className="space-y-3">
                {(t.raw("vision.items") as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-warm-600">
                    <span className="w-1 h-1 rounded-full shrink-0 bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              {t("team.sectionLabel")}
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold">
              {t("team.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {memberKeys.map((key) => (
              <div
                key={key}
                className="py-8 border-b border-warm-border"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-navy">
                    {t(`team.members.${key}.name`)}
                  </h3>
                  <span className="text-sm text-copper">
                    {t(`team.members.${key}.role`)}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed mb-4 text-warm-600">
                  {t(`team.members.${key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {memberSkills[key].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-warm-100 text-warm-600 border border-warm-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Advisory Board */}
          <div className="mt-16">
            <h3 className="text-lg font-bold text-navy mb-8">{t("team.advisoryTitle")}</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {(["kimYongHo", "kimSangGyeom"] as const).map((key) => (
                <div key={key} className="py-8 border-b border-warm-border">
                  <div className="flex items-baseline gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-navy">
                      {t(`team.advisors.${key}.name`)}
                    </h3>
                    <span className="text-sm text-copper">
                      {t(`team.advisors.${key}.role`)}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-warm-600">
                    {t(`team.advisors.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              {t("timeline.sectionLabel")}
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold">
              {t("timeline.title")}
            </h2>
          </div>

          <div className="space-y-0">
            {timelineYears.map((year) => (
              <div
                key={year}
                className="grid grid-cols-[80px_1fr] gap-8 py-7 border-b border-warm-border"
              >
                <span className="text-lg font-bold font-serif text-copper">
                  {year}
                </span>
                <div>
                  <h3 className="font-semibold mb-1 text-navy">
                    {t(`timeline.items.${year}.event`)}
                  </h3>
                  <p className="text-sm text-warm-600">
                    {t(`timeline.items.${year}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-warm-100">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              {t("values.sectionLabel")}
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold">
              {t("values.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {valueKeys.map((key, i) => (
              <div key={key}>
                <span className="text-4xl font-bold block mb-4 font-serif text-warm-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-3 text-navy">
                  {t(`values.items.${key}.title`)}
                </h3>
                <p className="text-[15px] leading-relaxed text-warm-600">
                  {t(`values.items.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] mb-6 font-serif text-navy font-bold">
            {t("cta.title")}
          </h2>
          <p className="text-warm-600 leading-relaxed text-lg mb-10">
            {t("cta.description")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
              {t("cta.ctaPrimary")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/careers" className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 hover:bg-warm-100">
              {t("cta.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
