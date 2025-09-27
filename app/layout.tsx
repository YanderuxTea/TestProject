import type { Metadata } from "next";
import "./globals.css";
import React from 'react'
import {montserrat} from '@/public/font'
import {ThemeProvider} from 'next-themes'



export const metadata: Metadata = {
  title: "TestProject",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${montserrat.className} bg-white dark:bg-[#181818]`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
