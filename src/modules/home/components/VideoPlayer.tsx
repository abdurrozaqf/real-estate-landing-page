import Image from "next/image";
import React from "react";

interface VideoPlayerProps {}

export default function VideoPlayer({}: VideoPlayerProps) {
  return (
    <section className="w-full h-auto relative "></section>

    // <section className="w-full h-auto relative">
    // <div className="w-full bg-[#0D0C1E] h-[360px]" />
    // <iframe
    //   src="https://www.youtube.com/embed/mJVuZiK9a6I?si=iENlhqHEgmWdaaai"
    //   allowFullScreen
    //   title="Real Estate"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   className="w-[1280px] h-[720px] absolute top-0 bottom-0 left-0 right-0"
    // />
    // <div className="w-full h-[360px] bg-[#F4F7FC]" />
    // </section>
  );
}
