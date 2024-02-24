import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutsProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutsProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <main className="w-full flex-1 scroll-smooth transition-all duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
}
