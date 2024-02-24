import React from "react";
import {
  MENU_ABOUT_US,
  MENU_CONTACT_INFO,
  MENU_QUICK,
} from "@/common/constant/menu";

import ContactInfo from "./ContactInfo";
import QuickMenu from "./QuickMenu";
import AboutUs from "./AboutUs";
import Tagline from "./Tagline";

export default function Footer() {
  return (
    <footer className="w-full px-4 lg:px-10 xl:px-36 py-4 lg:py-8 bg-black text-white flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <Tagline />
        <div className="ml-0 xl:ml-24 2xl:ml-36 w-full flex flex-wrap justify-between items-start gap-y-8">
          <QuickMenu data={MENU_QUICK} />
          <AboutUs data={MENU_ABOUT_US} />
          <ContactInfo data={MENU_CONTACT_INFO} />
        </div>
      </div>
      <hr className="my-6" />
      <div className="text-center text-sm text-neutral-300">
        @ 2023 UiXSHUVO All Rights Reserved
      </div>
    </footer>
  );
}
