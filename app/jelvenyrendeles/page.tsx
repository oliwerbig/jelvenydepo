"use client";

import { Flowbite } from "flowbite-react";
import { Providers } from "../providers";
import { theme } from "./FlowbiteTheme";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Kituzok from "./Sections/Kituzok";
import Order from "./Sections/Order";
import Prices from "./Sections/Prices";
import Szalagos from "./Sections/Szalagos";

export default function Home() {
  return (
    <Providers>
      <Flowbite theme={{ theme: theme }}>
        <Hero />
        <Szalagos />
        <About />
        <Kituzok />
        <Prices />
        <Order />
        <Contact />
      </Flowbite>
    </Providers>
  );
}
