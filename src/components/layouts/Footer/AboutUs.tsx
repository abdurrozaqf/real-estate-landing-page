import Link from "next/link";
import React from "react";

import { MenuFooter } from "@/common/types/menu";

type AboutUsProps = {
  data: MenuFooter[];
};

export default function AboutUs({ data }: AboutUsProps) {
  return (
    <div>
      <h1 className="font-medium text-base xl:text-lg mb-4 lg:mb-8">
        About Us
      </h1>
      <div className="grid grid-cols-1 gap-y-2 lg:gap-y-6 text-[14px] xl:text-base text-neutral-300 capitalize">
        {data.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
