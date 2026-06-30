"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "antd";

import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import Hero from "./Hero";

interface HeadlineProps {}

export default function Headline({}: HeadlineProps) {
  const ref = useRef(null);

  return (
    <motion.section
      id="home"
      ref={ref}
      className="w-full h-auto bg-[#F4F7FC] px-4 lg:px-20 pt-8 pb-20"
    >
      <div className="h-[720px] rounded-2xl relative image-headline">
        <Hero sectionRef={ref} />
        <div className="hidden lg:block absolute w-full -bottom-10 px-14 2xl:px-28">
          <div className="flex justify-between bg-white rounded-xl px-12 py-6">
            {MENU_ITEMS_HEADLINE.map((item, index) => (
              <div key={index} className="w-full flex justify-around">
                <div>
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="font-light text-sm">{item.subtitle}</p>
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
            <Button
              type="primary"
              aria-label="Search Property"
              className="h-auto bg-[#4C73FF] rounded-xl px-10 py-3 text-white font-medium text-base"
            >
              Search Property
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
