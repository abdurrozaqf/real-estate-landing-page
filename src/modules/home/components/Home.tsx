import React from "react";

import VideoPlayer from "./VideoPlayer";
import Customers from "./Customers";
import Headline from "./Headline";
import Contact from "./Contact";
import About from "./About";
import Rent from "./Rent";

interface Props {}

export default function Home({}: Props) {
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
