import Head from "next/head";

import Hero from "../components/Hero";
import Slider from "@/components/Slider";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Portfolio</title>
      </Head>
      <Hero
        heading="Creative Photography"
        message="Capturing moments, preserving memories - one shot at a time."
      />
      <Slider />
      <Instagram />
    </div>
  );
}
