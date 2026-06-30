"use client";
import React from "react";
import { motion } from "framer-motion";

interface TextAnimationProps {
  index: number;
  item: {
    count: string;
    decs: string;
  };
}

const TextAnimation = ({ item, index }: TextAnimationProps) => {
  return (
    <div style={{ overflow: "hidden", height: "60px" }}>
      <motion.div
        initial={{ y: 55 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col lg:flex-row items-center gap-x-8"
      >
        <h1 className="font-black text-3xl 2xl:text-6xl">{item.count}</h1>
        <p className="text-neutral-300 w-auto xl:w-[200px]">{item.decs}</p>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
