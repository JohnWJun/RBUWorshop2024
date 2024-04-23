import React from "react";
import type { Metadata } from "next";
import pretendard from "next/font/local";
import "./globals.css";
import SakuraFalls from "@/app/_component/SakuraFalls";

const inter = pretendard({
  src: "../../public/fonts/woff2/Pretendard-Light.woff2"
});

export const metadata: Metadata = {
  title: "Park Systems RBU Workshop 2024",
  description: "Research Equipment Business Unit Workshop 2024"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          {children}
          {/* <SakuraFalls/> */}
      </body>
    </html>
  );
}
