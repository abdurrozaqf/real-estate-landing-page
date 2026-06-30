import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function VideoPlayer() {
  return (
    <section className="h-auto w-full">
      <div className="relative h-[80px] w-full bg-[#0D0C1E] lg:h-[180px] xl:h-[260px] 2xl:h-[360px]">
        <div className="absolute top-0 right-1/2 w-[320px] translate-x-1/2 overflow-hidden rounded-2xl md:-top-12 md:w-[420px] lg:top-0 lg:w-[620px] xl:w-[820px] 2xl:w-[1010px]">
          <Image
            src="/images/image-9.jpg"
            alt="image video player"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="relative h-auto w-full"
          />
          <Button
            asChild
            variant="secondary"
            size="icon-lg"
            aria-label="play-video"
            className="absolute top-1/2 right-1/2 translate-x-10 -translate-y-10 rounded-full p-6 lg:translate-x-16 lg:-translate-y-14 lg:p-10"
          >
            <Link
              href="https://www.youtube.com/embed/mJVuZiK9a6I?si=iENlhqHEgmWdaaai"
              aria-label="link-video"
              target="_blank"
            >
              <FaPlay color="blue" size={25} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="h-[80px] w-full bg-[#F4F7FC] md:h-[120px] lg:h-[180px] xl:h-[260px] 2xl:h-[360px]" />
    </section>
  );
}
