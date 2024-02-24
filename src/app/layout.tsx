import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import { METADATA } from "@/common/constant/metadata";
import Layout from "@/components/layouts";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Real Estate",
    template: "%s | Real Estate",
  },
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  description: METADATA.description,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
