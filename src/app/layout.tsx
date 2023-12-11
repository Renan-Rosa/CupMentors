import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "CupMentors | Academy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="text-zinc-50 antialiased scrollbar scrollbar-track-transparent ">
        <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8 ">
          {children}
        </div>
      </body>
    </html>
  )
}
