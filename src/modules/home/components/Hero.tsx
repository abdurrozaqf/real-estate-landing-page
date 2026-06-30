import { useScroll, useTransform } from "framer-motion";
import React from "react";

import { Button } from "@/components/ui/button";
import { MotionDiv, MotionH1, MotionP } from "@/utils/motion";

const Hero: React.FC<{ sectionRef: React.RefObject<HTMLElement | null> }> = ({
  sectionRef,
}) => {
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
          className="text-2xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl"
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
          className="mb-4 text-2xl font-semibold md:mb-8 md:text-4xl lg:text-5xl xl:text-6xl"
        >
          One Home At A Time
        </MotionH1>
      </MotionDiv>
      <MotionP
        style={{ opacity, translateY: desc }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-4 w-[260px] text-[11px] md:mb-8 md:w-[360px] md:text-base lg:w-[520px]"
      >
        We&apos;all help you find the key to your dream home. Experience the joy
        of homeownership. Let us make your home buying journey simple
      </MotionP>
      <Button variant="outline" size="lg" aria-label="Get-Started" className="mt-10">
        Get Started
      </Button>
    </div>
  );
};

export default Hero;
