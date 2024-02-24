import { Metadata } from "next";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Helping You Get More For Your Real Estate",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
