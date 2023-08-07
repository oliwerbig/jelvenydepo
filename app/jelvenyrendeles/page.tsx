"use client";

import { Flowbite } from "flowbite-react";
import { Providers } from "../providers";
import { theme } from "./FlowbiteTheme";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Order from "./Sections/Order";
import Prices from "./Sections/Prices";
import Products from "./Sections/Products";

export default function Home() {
  return (
    <Providers>
      <Flowbite theme={{ theme: theme }}>
        <Hero />
        <Products />
        <About />
        <Prices />
        <Order />
        <Contact />
      </Flowbite>
    </Providers>
  );
}
