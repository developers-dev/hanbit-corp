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
  description: "Engineering your competitive edge in technology. Enterprise-grade AI, Cloud, Web Platform solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${sansKR.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-warm-800 font-sans">
        {children}
      </body>
    </html>
  )
}
