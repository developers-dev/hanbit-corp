import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"

const sansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans-kr",
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "HANBIT — Enterprise IT Solutions",
  description: "보이지 않는 곳까지, 완벽하게. AI, 클라우드, 웹 플랫폼 전 영역의 엔터프라이즈급 기술 솔루션.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${sansKR.variable} antialiased`}>
      <body className="min-h-screen bg-white text-warm-800 font-sans">
        {children}
      </body>
    </html>
  )
}
