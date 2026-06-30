import CardRent from "@/components/elements/CardRent";
import { Button } from "@/components/ui/button";
import { MENU_RENT } from "@/common/mocks/rent";
import { MotionLi } from "@/utils/motion";

export default function Rent() {
  return (
    <section
      id="rent"
      className="flex min-h-screen w-full flex-col items-center gap-y-16 bg-[#F4F7FC] px-4 py-24 md:px-16 2xl:px-48"
    >
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-10 text-center text-3xl font-medium md:text-4xl xl:text-5xl">
          Our Popular Property
        </h2>
        <p className="text-center text-[12px] text-neutral-600 md:text-[14px] lg:w-[760px] xl:text-lg">
          Look For An Agency With A Proven Track Record Of Success In Buying,
          Selling, Or Renting Properties. You Want An Agency That Has Been In
          The Industry For A While
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {MENU_RENT.map((item, index) => (
          <MotionLi
            key={index}
            initial={{ opacity: 0.8, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CardRent data={item} />
          </MotionLi>
        ))}
      </ul>
      <Button variant="inverse" size="lg" aria-label="explore property">
        Explore All Property
      </Button>
    </section>
  );
}
