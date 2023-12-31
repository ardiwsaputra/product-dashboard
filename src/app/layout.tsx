import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Product Dashboard",
  description: "Ardi W Saputra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        <div className="flex flex-row px-4 mt-12 w-screen">
          <Sidebar />
          <div className="w-5/6">{children}</div>
        </div>
      </body>
    </html>
  );
}
