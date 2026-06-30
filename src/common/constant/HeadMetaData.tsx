import Head from "next/head";
import React from "react";

export const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
}> = ({
  title = "Helping You Get More For Your Real Estate",
  metaDescription = "Helping You Get More For Your Real Estate",
  ogImageUrl = "/realestate-page.png",
  pathname = "",
}) => {
  const defaultTitle = "Real Estate - Landing Page";

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://realestate-landingpage.vercel.app";

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{title + "|" + defaultTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title + "|" + defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="realestate.vercel.app" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title + "|" + defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      <meta
        property="og:url"
        content="https://realestate-landingpage.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Real Estate - Landing Page" />
      <meta
        property="og:description"
        content="Helping You Get More For Your Real Estate"
      />
      <meta property="og:image" content="/realestate-page.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="realestate-landingpage.vercel.app"
      />
      <meta
        property="twitter:url"
        content="https://realestate-landingpage.vercel.app/"
      />
      <meta name="twitter:title" content="Real Estate - Landing Page" />
      <meta
        name="twitter:description"
        content="Helping You Get More For Your Real Estate"
      />
      <meta name="twitter:image" content="/realestate-page.png" />
    </Head>
  );
};
