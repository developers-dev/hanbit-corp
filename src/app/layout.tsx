import type { Metadata } from "next"
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google"
import "./globals.css"

const sansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans-kr",
  weight: ["300", "400", "500", "700"],
})

const serifKR = Noto_Serif_KR({
  subsets: ["latin"],
  variable: "--font-serif-kr",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "HANBIT — Every Bit Matters",
  description: "보이지 않는 곳까지, 완벽하게. AI, 웹, 시스템 아키텍처 전문 개발 스튜디오 HANBIT.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${sansKR.variable} ${serifKR.variable} antialiased`}>
      <body className="min-h-screen bg-warm-50 text-warm-800 font-sans">
        {children}
      </body>
    </html>
  )
}
