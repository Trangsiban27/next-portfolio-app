import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";

// Font cho tiêu đề và tên (Syne)
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"], // Chọn các weight cần thiết
});

// Font cho nội dung phụ và menu (Inter)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trang Si Ban | Frontend Engineer",
  description: "Creative Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
