import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./fonts.css"
import { EB_Garamond } from "next/font/google"
import { GeistSans } from "geist/font/sans"

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
})

const geist = GeistSans

export const metadata: Metadata = {
  title: "Vernissage",
  description: "Una experiencia teatral inmersiva",
  generator: "v0.dev",
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${garamond.variable} ${geist.variable}`}>
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  )
}
