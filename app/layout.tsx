import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blueprintmedia.lk"),
  title: {
    default: "Blueprint Media | Premier Creative & Printing Agency in Sri Lanka",
    template: "%s | Blueprint Media"
  },
  description: "Blueprint Media specializes in high-quality academic scrolls, certificate printing, 360° rotating video platforms, and premium branding solutions for educational institutions and businesses in Sri Lanka.",
  keywords: ["academic scrolls", "graduation certificates", "360 video experience", "printing agency sri lanka", "branding solutions", "blueprint media"],
  authors: [{ name: "Blueprint Media" }],
  creator: "Blueprint Media",
  publisher: "Blueprint Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.blueprintmedia.lk",
    siteName: "Blueprint Media",
    title: "Blueprint Media | Premier Creative & Printing Agency in Sri Lanka",
    description: "Expert creative and printing solutions including academic scrolls, 360° video, and premium branding.",
    images: [
      {
        url: "/blue-print-logo.png",
        width: 800,
        height: 600,
        alt: "Blueprint Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueprint Media | Premier Creative & Printing Agency in Sri Lanka",
    description: "Expert creative and printing solutions including academic scrolls, 360° video, and premium branding.",
    images: ["/blue-print-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69ca5bb045372f1c4ad3ea93/1jkv7cb82';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
