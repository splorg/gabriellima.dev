import type { Metadata, Viewport } from "next";
import { PT_Sans, PT_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { absoluteUrl, constructMetadata } from "@/lib/utils";
import { Providers } from "./providers";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata({
  title: siteConfig.authorName,
  description: siteConfig.fullDescription,
  image: absoluteUrl("/og"),
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${ptSans.variable} ${ptSerif.variable} antialiased bg-background scroll-smooth`}
      >
        <Providers>
          <Background />
          <main className="mx-auto max-w-2xl my-10 sm:my-20 px-4 sm:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
