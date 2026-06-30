import Image from "next/image";
import { Button } from "antd";

import { MotionDiv } from "@/utils/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col w-full h-screen px-4 py-20 md:px-20"
    >
      <div className="justify-between hidden w-full mb-16 lg:flex">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image
            key={index}
            src={"/dummy-logo.png"}
            alt="logos"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-[120px] xl:w-[200px] h-auto"
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-around w-full lg:flex-row gap-y-36">
        <MotionDiv
          className="w-full lg:w-[460px] 2xl:w-[500px]"
          initial={{ translateX: -100, opacity: 0.3 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-3xl font-bold lg:text-4xl 2xl:text-5xl">
            Navigating Your Real Estate Journey
          </h1>
          <p className="text-[12px] md:text-base lg:text-[14px] mb-8 lg:mb-16">
            Look For An Agency With A Proven Track Record Of Success In Buying,
            Selling, Or Renting Properties. You Want An Agency That Has Been In
            The Industry For A While And Has Experience Dealing With Various
            Types Of Properties.
          </p>
          <Button
            type="primary"
            aria-label="Contact Us"
            className="h-auto px-12 py-4 text-base font-medium text-white bg-black rounded-xl"
          >
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
            className="w-auto h-[480px] xl:h-[580px] object-cover rounded-3xl"
          />
          <div className="w-[180px] absolute z-1 -top-14 left-24 bg-white rounded-xl px-8 py-4 drop-shadow-sm block lg:hidden">
            <h1 className="mb-2 text-4xl font-black text-blue-600">22K+</h1>
            <p className="text-sm">Property ready to buy and sell</p>
          </div>
          <div className="w-[180px] absolute z-1 bottom-16 xl:bottom-40 -left-24 bg-white rounded-xl px-8 py-4 drop-shadow-sm hidden lg:block">
            <h1 className="mb-2 text-4xl font-black text-blue-600">22K+</h1>
            <p className="text-sm">Property ready to buy and sell</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
