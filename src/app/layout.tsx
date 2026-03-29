import type { Metadata } from "next"
import { Noto_Sans_KR, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const sansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans-kr",
  weight: ["300", "400", "500", "700"],
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["200", "300", "400", "500", "600"],
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-ibm",
  weight: ["200", "300", "400", "500"],
})

export const metadata: Metadata = {
  title: "HANBIT — One Bit Changes Everything",
  description: "Enterprise IT Solutions. AI, Cloud, Web Platform. One bit changes everything.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${sansKR.variable} ${plexSans.variable} ${plexMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-warm-50 text-warm-800 font-sans">
        {children}
      </body>
    </html>
  )
}
