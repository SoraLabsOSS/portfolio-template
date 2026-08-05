import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BottomFade } from "@/components/bottom-fade";
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
    "Design lead at Wealthsimple. Previously at Stripe and Shopify. Building thoughtful products through design.",
  title: "Danny Williams — Product Designer",
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
        <BottomFade />
        <SiteMenu />
      </body>
    </html>
  );
}
