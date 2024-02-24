import Link from "next/link";
import React from "react";

import { MenuFooter } from "@/common/types/menu";

interface ContactInfoProps {
  data: MenuFooter[];
}

export default function ContactInfo({ data }: ContactInfoProps) {
  return (
    <div className="w-[280px]">
      <h1 className="font-medium text-lg mb-4 lg:mb-8">Contact Info</h1>
      <div className="flex flex-col gap-y-2 lg:gap-y-6 text-neutral-300">
        {data.map((item, index) => (
          <Link key={index} href={item.href} target="_blank">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
