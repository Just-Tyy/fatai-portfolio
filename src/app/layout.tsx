import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./polish.css";
import "./brand-polish.css";
import "./responsive-polish.css";
import "./space-utilization.css";
import "./smart-navbar.css";
import "./final-density-polish.css";
import "./link-polish.css";
import "./scroll-fix.css";
import "./finetuning.css";
import "./ux-intelligence.css";
import "./premium-hover-system.css";
import "./responsive-lock.css";
import "./responsive-hotfix.css";
import "./content-formatting-polish.css";
import "./about-readability-fix.css";
import "./about-final-fix.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { CommandPalette } from "@/components/navigation/command-palette";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fa-komolafe.vercel.app"),
  title: {
    default: "Komolafe Fatai Abiodun — Data Scientist",
    template: "%s | Komolafe",
  },
  description:
    "Data Scientist building production-oriented machine learning and applied AI systems across predictive analytics, intelligent retrieval, and decision-support applications.",
  openGraph: {
    title: "Komolafe Fatai Abiodun — Data Scientist",
    description:
      "I build intelligent systems that turn messy information into useful decisions.",
    url: "https://fa-komolafe.vercel.app",
    siteName: "Komolafe",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#090c0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <CommandPalette />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
