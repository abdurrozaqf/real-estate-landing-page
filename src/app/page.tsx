import { Metadata } from "next";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: `Real Estate`,
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
