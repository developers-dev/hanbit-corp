"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight, X } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Link } from "@/i18n/navigation"
import { demoProjects } from "@/lib/demo-data"

const PROJECT_KEYS = [
  "aiRecommendation",
  "fintechDashboard",
  "cloudMigration",
  "mobileCommerce",
  "dataAnalytics",
  "llmChatbot",
] as const

const TECHNOLOGIES: Record<string, string[]> = {
  aiRecommendation: ["Python", "TensorFlow", "Redis", "PostgreSQL", "Docker"],
  fintechDashboard: ["React", "Next.js", "TypeScript", "Chart.js", "Node.js"],
  cloudMigration: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
  mobileCommerce: ["React Native", "Redux", "Firebase", "Stripe", "Push Notifications"],
  dataAnalytics: ["Python", "Apache Spark", "Kafka", "Elasticsearch", "Kibana"],
  llmChatbot: ["Python", "LangChain", "OpenAI GPT", "Vector DB", "FastAPI"],
}

const STAT_KEYS = ["completedProjects", "satisfaction", "stability", "support"] as const

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const t = useTranslations("Portfolio")

  const projects = PROJECT_KEYS.map((key, index) => ({
    id: index + 1,
    key,
    title: t(`projects.${key}.title`),
    category: t(`projects.${key}.category`),
    client: t(`projects.${key}.client`),
    duration: t(`projects.${key}.duration`),
    team: t(`projects.${key}.team`),
    description: t(`projects.${key}.description`),
    detailedDescription: t(`projects.${key}.detailedDescription`),
    technologies: TECHNOLOGIES[key],
    results: t.raw(`projects.${key}.results`) as string[],
    metrics: t.raw(`projects.${key}.metrics`) as Record<string, string>,
  }))

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.key === selectedProject)
    : null

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

      {/* Projects */}
      <section className="pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid lg:grid-cols-[1fr_1.5fr] gap-10 py-12 border-b cursor-pointer group border-warm-border"
                onClick={() => setSelectedProject(project.key)}
              >
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="text-sm font-medium text-copper font-serif"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-copper-bg text-copper">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl mb-2 group-hover:translate-x-1 transition-transform duration-200 font-serif text-navy font-semibold"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-warm-500">
                    {project.client} · {project.duration} · {project.team}
                  </p>
                </div>

                <div>
                  <p className="text-[15px] leading-relaxed mb-5 text-warm-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-warm-100 text-warm-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {project.results.map((result) => (
                      <span key={result} className="text-sm font-medium text-navy">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STAT_KEYS.map((key) => (
              <div key={key} className="text-center">
                <div
                  className="text-[2rem] font-bold mb-1 font-serif text-navy"
                >
                  {t(`stats.${key}.value`)}
                </div>
                <div className="text-sm text-warm-500">{t(`stats.${key}.label`)}</div>
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
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
            {t("cta.button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedProjectData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl p-8 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-xs font-medium px-2.5 py-1 rounded mb-3 inline-block bg-copper-bg text-copper">
                  {selectedProjectData.category}
                </span>
                <h2
                  className="text-3xl font-serif text-navy font-bold"
                >
                  {selectedProjectData.title}
                </h2>
                <p className="text-sm mt-2 text-warm-500">
                  {selectedProjectData.client} · {selectedProjectData.duration} · {selectedProjectData.team}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg hover:bg-warm-100 transition-colors"
              >
                <X className="w-5 h-5 text-warm-500" />
              </button>
            </div>

            <p className="text-[15px] leading-relaxed mb-8 text-warm-600">
              {selectedProjectData.detailedDescription}
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-medium mb-3 text-warm-500">{t("modal.techStackLabel")}</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProjectData.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-md bg-warm-100 text-warm-600 border border-warm-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {Object.entries(selectedProjectData.metrics).map(([key, value]) => (
                <div key={key} className="py-4 border-t border-warm-border">
                  <div className="text-lg font-bold text-navy">{String(value)}</div>
                  <div className="text-xs uppercase tracking-wider mt-1 text-warm-500">{key}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href={demoProjects[selectedProjectData.id]?.demoUrl || "#"} className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
                {t("modal.liveDemo")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
