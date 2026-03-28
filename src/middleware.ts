import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { NextRequest } from "next/server"

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  // Vercel 헤더로 국가 감지 → 로케일 자동 설정
  const country = request.headers.get("x-vercel-ip-country")

  if (country && !request.cookies.get("NEXT_LOCALE")) {
    const locale = country === "KR" ? "ko" : "en"
    request.headers.set("x-default-locale", locale)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
