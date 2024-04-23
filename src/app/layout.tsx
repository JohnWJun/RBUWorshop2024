import React from "react";
import type { Metadata } from "next";
import pretendard from "next/font/local";
import "./globals.css";
import SakuraFalls from "@/app/_component/SakuraFalls";

const inter = pretendard({
  src: "../../public/fonts/woff2/Pretendard-Light.woff2"
});

export const metadata: Metadata = {
  title: "Park Systems AMM2024",
  description: "Global Marketing Meeting 2024 in Japan"
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
