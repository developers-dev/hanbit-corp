"use client"

import { useTranslations } from "next-intl"
import { ArrowRight, CheckCircle } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Link } from "@/i18n/navigation"

export default function ServicesPage() {
  const t = useTranslations("Services")

  const serviceKeys = ["aiData", "webDev", "systemArch", "customPlatforms", "managed"] as const
  const serviceTechnologies: Record<string, string[]> = {
    aiData: ["Python", "TensorFlow", "PyTorch", "Pandas", "Apache Spark", "MLflow"],
    webDev: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
    systemArch: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    customPlatforms: ["React Native", "Flutter", "GraphQL", "Microservices", "REST API", "WebSocket"],
    managed: ["Linux", "Nginx", "Apache", "DNS", "SSL/TLS", "CDN"],
  }

  const processSteps = ["01", "02", "03", "04"] as const

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
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]"
            >
              {t("hero.title")}
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 px-6">
        <div className="max-w-[1120px] mx-auto space-y-16">
          {serviceKeys.map((key, index) => (
            <div
              key={key}
              className="grid lg:grid-cols-[1fr_1.2fr] gap-12 py-14 border-b last:border-b-0 border-warm-border"
            >
              <div>
                <span
                  className="text-sm font-medium mb-4 block text-copper font-serif"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-2xl mb-2 font-serif text-navy font-semibold"
                >
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm font-medium mb-5 text-copper">
                  {t(`items.${key}.subtitle`)}
                </p>
                <p className="text-[15px] leading-relaxed mb-6 text-warm-600">
                  {t(`items.${key}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {serviceTechnologies[key].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-warm-100 text-warm-600 border border-warm-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <span className="text-xl font-bold text-navy">
                    {t(`items.${key}.price`)}
                  </span>
                  <span className="text-sm ml-2 text-warm-500">{t("taxNote")}</span>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 text-sm">
                  {t("consultButton")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-5 text-warm-500">
                  {t("featuresLabel")}
                </h4>
                <div className="space-y-3">
                  {(t.raw(`items.${key}.features`) as string[]).map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-copper" />
                      <span className="text-[15px] text-warm-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              {t("process.sectionLabel")}
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,2.5rem)] font-serif text-navy font-bold"
            >
              {t("process.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {processSteps.map((step) => (
              <div key={step}>
                <span
                  className="text-3xl font-bold block mb-4 font-serif text-warm-300"
                >
                  {step}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-navy">
                  {t(`process.steps.${step}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-warm-600">
                  {t(`process.steps.${step}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-[600px] mx-auto text-center">
          <h2
            className="text-[clamp(2rem,3.5vw,2.5rem)] mb-6 font-serif text-navy font-bold"
          >
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
            <Link href="/portfolio" className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 hover:bg-warm-100">
              {t("cta.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
