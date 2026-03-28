"use client"

import { ArrowRight } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "김태현",
      role: "CEO & Lead Developer",
      description: "10년 경력의 풀스택 개발자로, 완벽한 코드에 대한 철학을 가지고 있습니다.",
      skills: ["React", "Node.js", "System Architecture"],
    },
    {
      name: "이수진",
      role: "AI/ML Engineer",
      description: "데이터 사이언스와 머신러닝 전문가로, 비즈니스 인사이트를 제공합니다.",
      skills: ["Python", "TensorFlow", "Data Analysis"],
    },
    {
      name: "박민수",
      role: "Frontend Specialist",
      description: "사용자 경험에 집중하는 프론트엔드 전문가입니다.",
      skills: ["React", "TypeScript", "UI/UX"],
    },
    {
      name: "정하영",
      role: "Backend Engineer",
      description: "확장 가능한 백엔드 시스템 설계 전문가입니다.",
      skills: ["Node.js", "Database", "Cloud"],
    },
  ]

  const timeline = [
    { year: "2019", event: "HANBIT 설립", description: "완벽한 코드를 추구하는 개발 스튜디오 시작" },
    { year: "2020", event: "첫 AI 프로젝트", description: "머신러닝 기반 추천 시스템 개발 성공" },
    { year: "2021", event: "팀 확장", description: "전문 개발자 4명으로 팀 구성 완료" },
    { year: "2022", event: "대기업 파트너십", description: "주요 기업들과 장기 계약 체결" },
    { year: "2023", event: "기술 혁신", description: "LLM 파인튜닝 서비스 출시" },
    { year: "2024", event: "글로벌 진출", description: "해외 클라이언트 서비스 시작" },
  ]

  return (
    <div className="min-h-screen bg-warm-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium tracking-widest uppercase mb-6 text-copper">
              About
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-serif text-navy font-bold leading-[1.15]">
              우리는 HANBIT입니다
            </h1>
            <div className="w-12 h-0.5 bg-copper mb-8" />
            <p className="text-lg leading-relaxed text-warm-600">
              단 하나의 비트도 소중히 여기며, 완벽한 코드로 클라이언트의 꿈을 현실로 만드는 개발 스튜디오입니다.
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
                Mission
              </p>
              <h3 className="text-2xl mb-5 font-serif text-navy font-semibold">
                완벽한 코드, 완벽한 결과
              </h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                완벽한 코드와 정밀한 설계로 클라이언트의 비즈니스 성공을 이끌어내는 것이 우리의 사명입니다.
              </p>
              <ul className="space-y-3">
                {["코드 품질 100%", "고객 만족 최우선", "지속적인 혁신"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-warm-600">
                    <span className="w-1 h-1 rounded-full shrink-0 bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
                Vision
              </p>
              <h3 className="text-2xl mb-5 font-serif text-navy font-semibold">
                기술로 만드는 더 나은 세상
              </h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                기술과 창의성을 결합하여 세상을 더 나은 곳으로 만드는 혁신적인 솔루션을 제공합니다.
              </p>
              <ul className="space-y-3">
                {["글로벌 기술 리더", "혁신적 솔루션", "지속 가능한 성장"].map((item) => (
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
              Team
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold">
              우리 팀
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="py-8 border-b border-warm-border"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-navy">
                    {member.name}
                  </h3>
                  <span className="text-sm text-copper">
                    {member.role}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed mb-4 text-warm-600">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
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
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-copper">
              History
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold">
              우리의 여정
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[80px_1fr] gap-8 py-7 border-b border-warm-border"
              >
                <span className="text-lg font-bold font-serif text-copper">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-semibold mb-1 text-navy">
                    {item.event}
                  </h3>
                  <p className="text-sm text-warm-600">
                    {item.description}
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
              Values
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-serif text-navy font-bold">
              핵심 가치
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Excellence", desc: "모든 프로젝트에서 최고의 품질을 추구합니다" },
              { title: "Collaboration", desc: "팀워크와 소통을 통해 최상의 결과를 만듭니다" },
              { title: "Innovation", desc: "끊임없는 혁신으로 새로운 가치를 창출합니다" },
            ].map((value, i) => (
              <div key={value.title}>
                <span className="text-4xl font-bold block mb-4 font-serif text-warm-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-3 text-navy">
                  {value.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-warm-600">
                  {value.desc}
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
            함께 만들어갈 미래
          </h2>
          <p className="text-warm-600 leading-relaxed text-lg mb-10">
            HANBIT과 함께 완벽한 솔루션을 만들어보세요.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-warm-50 px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200">
              프로젝트 상담하기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/careers" className="inline-flex items-center gap-2 border-[1.5px] border-warm-300 hover:border-navy text-navy px-8 py-3.5 rounded-lg font-medium text-[15px] transition-colors duration-200 hover:bg-warm-100">
              팀 합류하기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
