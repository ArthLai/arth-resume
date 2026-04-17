import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://arth-resume.zeabur.app",
  ),
  title: "Arth Lai — Full-stack Marketer",
  description:
    "橫跨營運、產品、行銷三個領域的 full-stack marketer。把複雜商業問題拆成可落地的系統。",
  openGraph: {
    title: "Arth Lai — Full-stack Marketer",
    description: "橫跨營運、產品、行銷的 full-stack marketer。",
    type: "website",
  },
};

const themeInitScript = `(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('light');
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${nunito.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
