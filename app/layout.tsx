import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import { siteConfig } from "@/lib/site-config";
import { ogImage } from "@/lib/assets";

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northgrove.example"),
  title: {
    default: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s · ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  openGraph: {
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    type: "website",
    images: ogImage ? [{ url: ogImage }] : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <EditorBridge />
      </body>
    </html>
  );
}
