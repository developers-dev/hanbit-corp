"use client"

import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-navy-dark text-warm-500">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-16">
          <div>
            <span className="text-lg font-bold text-white block mb-4">{t("brand")}</span>
            <p className="text-sm leading-relaxed max-w-xs mb-6 text-warm-600">
              {t("tagline")}
              <br />
              {t("taglineSub")}
            </p>
            <div className="flex flex-col gap-1 text-sm text-warm-600">
              <span>{t("email")}</span>
              <span>{t("phone")}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-warm-400 mb-4">{t("servicesTitle")}</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">{t("serviceLinks.aiData")}</Link>
              <Link href="/services" className="hover:text-white transition-colors">{t("serviceLinks.webPlatform")}</Link>
              <Link href="/services" className="hover:text-white transition-colors">{t("serviceLinks.cloudInfra")}</Link>
              <Link href="/services" className="hover:text-white transition-colors">{t("serviceLinks.customSolution")}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-warm-400 mb-4">{t("companyTitle")}</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">{t("companyLinks.about")}</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">{t("companyLinks.portfolio")}</Link>
              <Link href="/careers" className="hover:text-white transition-colors">{t("companyLinks.careers")}</Link>
              <Link href="/contact" className="hover:text-white transition-colors">{t("companyLinks.contact")}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-warm-400 mb-4">{t("contactTitle")}</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <span>{t("address1")}</span>
              <span>{t("address2")}</span>
              <span>{t("hours")}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-xs text-warm-600 space-y-1">
          <div>{t("corpInfo")}</div>
          <div>{t("corpInfo2")}</div>
          <div>&copy; {new Date().getFullYear()} {t("copyright")}</div>
        </div>
      </div>
    </footer>
  )
}
