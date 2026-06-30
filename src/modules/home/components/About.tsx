import { MENU_ABOUT } from "@/common/mocks/about";
import { MotionDiv, MotionH1, MotionP } from "@/utils/motion";
import TextAnimation from "./Text";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <section
      id="about"
      className="w-full bg-[#0D0C1E] text-white px-8 lg:px-20 2xl:px-48 py-28 "
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {MENU_ABOUT.map((item, index) => (
          <TextAnimation key={index} index={index} item={item} />
        ))}
      </div>
      <hr className="my-16 lg:my-24" />
      <div className="w-full flex flex-col lg:flex-row gap-y-4 justify-between px-0 md:px-16 lg:px-0">
        <MotionH1
          className="flex-1 font-medium text-3xl xl:text-4xl leading-normal lg:leading-[1.8] xl:leading-normal"
          initial={{ translateX: -100, opacity: 0.3 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Where Comfort Meets <br />
          Convenience
        </MotionH1>
        <MotionP
          className="flex-1 text-[14px] xl:text-base leading-[2] xl:leading-loose text-neutral-300"
          initial={{ translateX: 100, opacity: 0.3 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Look for an agency with a proven track record of success in buying,
          selling, or renting properties. you want an agency that has been in
          the industry for a while and has experience dealing with various types
          of properties.
        </MotionP>
      </div>
    </section>
  );
}
