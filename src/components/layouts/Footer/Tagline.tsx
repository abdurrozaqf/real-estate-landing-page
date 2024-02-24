import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TaglineProps {}

export default function Tagline({}: TaglineProps) {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-0 lg:justify-between">
      <Link href="#home" aria-label="home">
        <Image
          src="/logo-2.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[180px] h-auto"
        />
      </Link>
      <h1 className="text-base xl:text-lg">
        Investing In Your Future One <br />
        Home At A Time
      </h1>
      <div className="border rounded-xl overflow-hidden flex items-center justify-between p-1">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2.5 xl:p-5 outline-none bg-black"
        />
        <button
          type="button"
          aria-label="Subscribe"
          className="rounded-lg p-2.5 xl:p-5 bg-[#4B73FF]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
