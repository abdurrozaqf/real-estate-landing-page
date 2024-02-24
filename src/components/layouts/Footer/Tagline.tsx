import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Tagline() {
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
        <Input
          placeholder="Enter your email"
          variant="borderless"
          className="w-auto placeholder:text-white focus:text-white"
        />
        <Button
          type="primary"
          aria-label="Subscribe"
          className="h-auto rounded-lg font-medium py-2 px-4 xl:py-4 xl:px-6 bg-[#4B73FF]"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
