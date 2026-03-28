import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"

const sansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans-kr",
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "HANBIT — Every Bit Matters",
  description: "한 비트의 차이가 결과를 바꿉니다. AI, 웹, 시스템 아키텍처 전문 개발 스튜디오.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${sansKR.variable} antialiased`}>
      <body className="min-h-screen bg-warm-50 text-warm-800 font-sans">
        {children}
      </body>
    </html>
  )
}
