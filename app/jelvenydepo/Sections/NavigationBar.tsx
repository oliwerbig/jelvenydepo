"use client";

import { Button } from "flowbite-react";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="relative z-10">
        <Navbar.Brand href="/">
          <div
            className="mr-3 aspect-[4/1] h-6 sm:h-9"
            style={{ position: "relative" }}
          >
            <Image src="/logo-05.svg" fill alt="logo" />
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button gradientDuoTone="cyanToBlue" href="#order">
            Rendelj most!
          </Button>
          <Navbar.Toggle></Navbar.Toggle>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#products">Termékeink</Navbar.Link>
          <Navbar.Link href="#prices">Árlista</Navbar.Link>
          <Navbar.Link href="#about">Rólunk</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
