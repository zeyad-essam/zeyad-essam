import Layout from "@/components/Layout";
import "./globals.css";
import "./markdown.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Zeyad Essam</title>
        <meta name="description" content="Zeyad essam's portfolio website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#252734" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Zeyad" />
        <meta name="application-name" content="Zeyad" />
        <meta name="theme-color" content="#28323d" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={inter.className}>
        <div id="overlays"></div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
