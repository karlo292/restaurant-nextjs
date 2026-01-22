"use client";
import { Inter } from "next/font/google";
import { ReactLenis, useLenis } from 'lenis/react'
import "./globals.css";



const interFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const lenis = useLenis((lenis) => {
        // called every scroll
        console.log(lenis)
    })
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased overflow-y-hidden`}
      >
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
