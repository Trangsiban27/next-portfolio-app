import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

// Font Sans-serif hiện đại cho toàn bộ nội dung
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Font Mono cho các phần mang tính "code" hoặc số liệu kỹ thuật
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trang Si Ban | Frontend Engineer",
  description: "Results-driven Frontend Engineer with 2 years of experience specializing in React and TypeScript. [cite: 3]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
