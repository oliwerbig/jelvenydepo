import { Providers } from "../providers";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Order from "./Sections/Order";
import Prices from "./Sections/Prices";
import Products from "./Sections/Products";

export default function Home() {
  return (
    <Providers>
      <Hero />
      <Products />
      <About />
      <Prices />
      <Order />
      <Contact />
    </Providers>
  );
}
