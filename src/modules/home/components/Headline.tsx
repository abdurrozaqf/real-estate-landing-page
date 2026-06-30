"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";
import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import Hero from "./Hero";

export default function Headline() {
  const ref = useRef(null);

  return (
    <motion.section
      id="home"
      ref={ref}
      className="h-auto w-full bg-[#F4F7FC] px-4 pt-8 pb-20 lg:px-20"
    >
      <div className="image-headline relative h-[720px] rounded-2xl">
        <Hero sectionRef={ref} />
        <div className="absolute -bottom-10 hidden w-full px-14 lg:block 2xl:px-28">
          <div className="flex items-center justify-between rounded-xl bg-white px-12 py-6">
            {MENU_ITEMS_HEADLINE.map((item, index) => (
              <div key={index} className="flex w-full justify-around">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm font-light">{item.subtitle}</p>
                </div>
                <div
                  className={
                    index === MENU_ITEMS_HEADLINE.length - 1
                      ? "border-none"
                      : "border"
                  }
                />
              </div>
            ))}
            <Button size="lg" aria-label="Search Property" className="px-10">
              Search Property
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
