import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/utils/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex h-screen w-full flex-col px-4 py-20 md:px-20"
    >
      <div className="mb-16 hidden w-full justify-between lg:flex">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image
            key={index}
            src={"/dummy-logo.png"}
            alt="logos"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-[120px] xl:w-[200px]"
          />
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-around gap-y-36 lg:flex-row">
        <MotionDiv
          className="w-full lg:w-[460px] 2xl:w-[500px]"
          initial={{ translateX: -100, opacity: 0.3 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl 2xl:text-5xl">
            Navigating Your Real Estate Journey
          </h2>
          <p className="mb-8 text-[12px] md:text-base lg:mb-16 lg:text-[14px]">
            Look For An Agency With A Proven Track Record Of Success In Buying,
            Selling, Or Renting Properties. You Want An Agency That Has Been In
            The Industry For A While And Has Experience Dealing With Various
            Types Of Properties.
          </p>
          <Button variant="inverse" size="lg" aria-label="Contact Us" className="px-12">
            Contact Us
          </Button>
        </MotionDiv>
        <MotionDiv
          className="relative"
          initial={{ translateX: 100, opacity: 0.3 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={"/images/image-2.jpg"}
            alt="image contact us"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="h-[480px] w-auto rounded-3xl object-cover xl:h-[580px]"
          />
          <div className="absolute -top-14 left-24 z-1 block w-[180px] rounded-xl bg-white px-8 py-4 drop-shadow-sm lg:hidden">
            <h3 className="mb-2 text-4xl font-black text-primary">22K+</h3>
            <p className="text-sm">Property ready to buy and sell</p>
          </div>
          <div className="absolute bottom-16 -left-24 z-1 hidden w-[180px] rounded-xl bg-white px-8 py-4 drop-shadow-sm lg:block xl:bottom-40">
            <h3 className="mb-2 text-4xl font-black text-primary">22K+</h3>
            <p className="text-sm">Property ready to buy and sell</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
