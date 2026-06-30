import { useScroll, useTransform } from "framer-motion";
import { Button } from "antd";
import React from "react";

import { MotionDiv, MotionH1, MotionP } from "@/utils/motion";

const Hero: React.FC<{ sectionRef: any }> = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end center", "end end"],
  });

  const paraphOne = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const paraphTwo = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const desc = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-28" />
      <MotionDiv style={{ overflow: "hidden", height: "70px", width: "100%" }}>
        <MotionH1
          style={{ translateX: paraphOne, opacity }}
          initial={{ y: 70 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Investing In Your Future
        </MotionH1>
      </MotionDiv>
      <MotionDiv style={{ overflow: "hidden", height: "70px", width: "100%" }}>
        <MotionH1
          style={{ translateX: paraphTwo, opacity }}
          initial={{ y: 70 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-8"
        >
          One Home At A Time
        </MotionH1>
      </MotionDiv>
      <MotionP
        style={{ opacity, translateY: desc }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[11px] md:text-base w-[260px] md:w-[360px] lg:w-[520px] mb-4 md:mb-8"
      >
        We&apos;all help you find the key to your dream home. Experience the joy
        of homeownership. Let us make your home buying journey simple
      </MotionP>
      <Button
        aria-label="Get-Started"
        className="h-auto px-6 py-2 border border-black rounded-lg font-bold mt-10"
      >
        <p className="text-base lg:text-lg">Get Started</p>
      </Button>
    </div>
  );
};

export default Hero;
