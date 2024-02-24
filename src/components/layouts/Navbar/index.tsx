import React from "react";

import MenuItem from "./MenuItem";
import Auth from "./Auth";

import { MENU_ITEMS } from "@/common/constant/menu";

export default function Navbar() {
  return (
    <header className="w-full px-4 lg:px-10 xl:px-36 py-4 xl:py-10 sticky top-0 z-10 bg-[#F4F7FC] backdrop-blur flex items-center">
      <nav className="w-full flex justify-between items-center">
        <MenuItem items={MENU_ITEMS} />
        <Auth />
      </nav>
    </header>
  );
}
