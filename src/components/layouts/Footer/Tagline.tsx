import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Tagline() {
  return (
    <div className="flex flex-col gap-y-6 lg:justify-between lg:gap-y-0">
      <Link href="#home" aria-label="home">
        <Image
          src="/logo-2.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-[180px]"
        />
      </Link>
      <h2 className="text-base xl:text-lg">
        Investing In Your Future One <br />
        Home At A Time
      </h2>
      <div className="flex items-center justify-between overflow-hidden rounded-xl border p-1">
        <Input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          className="flex-1 border-0 bg-transparent text-white shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
        />
        <Button aria-label="Subscribe" size="lg" className="shrink-0">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
