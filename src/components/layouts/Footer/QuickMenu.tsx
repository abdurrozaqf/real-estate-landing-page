import Link from "next/link";
import React from "react";

import { MenuFooter } from "@/common/types/menu";

interface QuickMenuProps {
  data: MenuFooter[];
}

export default function QuickMenu({ data }: QuickMenuProps) {
  return (
    <div>
      <h1 className="font-medium text-base xl:text-lg mb-4 lg:mb-8">
        Quick Menu
      </h1>
      <div className="grid grid-cols-1 gap-y-2 lg:gap-y-6 text-[14px] xl:text-base text-neutral-300">
        {data.map((item, index) => (
          <Link key={index} href={item.href} aria-label={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
