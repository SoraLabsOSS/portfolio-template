import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BottomFade } from "@/components/bottom-fade";
import { SiteFooter } from "@/components/site-footer";
import { SiteMenu } from "@/components/site-menu";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  description:
    "Truong Giang (Axyl) — full-stack / creative developer based in Ho Chi Minh City. Building Sora UI, motion-first interfaces, and tools that bridge design and technology.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://nguyentruonggiang.id.vn"
  ),
  openGraph: {
    description:
      "Full-stack / creative developer building Sora UI and motion-first interfaces that feel alive.",
    locale: "en_US",
    siteName: "Axyl",
    title: "Axyl — Building interfaces that feel alive",
    type: "website",
  },
  title: {
    default: "Axyl — Building interfaces that feel alive",
    template: "%s — Axyl",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Full-stack / creative developer building Sora UI and motion-first interfaces that feel alive.",
    title: "Axyl — Building interfaces that feel alive",
  },
};

const themeBootstrap = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else{document.documentElement.removeAttribute("data-theme")}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: FOUC-free theme bootstrap from localStorage */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="relative min-h-dvh font-sans">
        {children}
        <SiteFooter />
        <BottomFade />
        <SiteMenu />
      </body>
    </html>
  );
}
