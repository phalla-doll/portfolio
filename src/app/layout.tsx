import type { Metadata } from "next";
import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/element/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mantha - Portfolio",
  description: "My personal portfolio website showcasing my projects and skills.",
  metadataBase: new URL('https://mantha.vercel.app'),
  keywords: "software engineer, frontend developer, portfolio, web developer, designer, mantha, cambodia",
  authors: [{ name: "Mantha", url: "https://mantha.vercel.app" }],
  openGraph: {
    title: "Mantha - Portfolio",
    description: "My personal portfolio website showcasing my projects and skills.",
    // The 'url' here can be relative or absolute, metadataBase helps resolve it
    url: "https://mantha.vercel.app",
    siteName: "Mantha - Portfolio",
    images: [
      {
        // This relative path '/mantha-profile-thumbnail.png' will be resolved against metadataBase
        url: "/mantha-profile-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Mantha - Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="IAb9sDlZU39cpGmLLIX_0C0SdZ1bsYOiBG-6T5iRnRY" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${kantumruyPro.variable} antialiased`}>
        {children}
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
