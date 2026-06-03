import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans, Syne } from "next/font/google";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Font Sans-serif hiện đại cho toàn bộ nội dung
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist", // Biến CSS để Tailwind sử dụng
  display: "swap",
});

// Cấu hình font JetBrains Mono cho Label
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // Biến CSS cho Label/Code
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trang Si Ban",
  description: "Trang Si Ban - Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex flex-col w-full">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
