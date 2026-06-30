import React, { lazy } from "react";

import VideoPlayer from "./VideoPlayer";
import Contact from "./Contact";
import About from "./About";

const Customers = lazy(() => import("./Customers"));
const Headline = lazy(() => import("./Headline"));
const Rent = lazy(() => import("./Rent"));

export default function Home() {
  return (
    <>
      <Headline />
      <Contact />
      <About />
      <VideoPlayer />
      <Rent />
      <Customers />
    </>
  );
}
