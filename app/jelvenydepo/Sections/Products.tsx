"use client";

import { Badge, Button, Carousel } from "flowbite-react";
import Image from "next/image";
import ParallaxVideo from "../../ParallaxVideo";

const Products = () => {
  return (
    <section
      id="products"
      className="bg-slate-100 bg-opacity-80 dark:bg-gray-900/75"
    >
      <ParallaxVideo zIndex={-10} />
      <div className="mx-auto max-w-7xl items-center gap-16 py-12 px-8 lg:py-16 lg:px-20 xl:grid xl:grid-cols-2">
        <Carousel className="mt-10 xl:mt-0">
          <figure className="cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <div className="relative h-96 w-full">
              <Image
                className="rounded-lg"
                src="/media/jelvenydepo/10.webp"
                alt=""
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
              <p>Présszerszámok</p>
            </figcaption>
          </figure>
          <div className="relative h-96 w-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <Image
              className="rounded-lg"
              src="/media/jelvenydepo/11.webp"
              alt=""
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <figure className="cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <div className="relative h-96 w-full">
              <Image
                className="rounded-lg"
                src="/media/jelvenydepo/6.webp"
                alt=""
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
              <p>Présgépek</p>
            </figcaption>
          </figure>
          <div className="relative h-96 w-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <Image
              className="rounded-lg"
              src="/media/jelvenydepo/7.webp"
              alt=""
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <figure className="cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <div className="relative h-96 w-full">
              <Image
                className="rounded-lg"
                src="/media/jelvenydepo/8.webp"
                alt=""
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
              <p>Alkatrészek</p>
            </figcaption>
          </figure>
          <div className="relative h-96 w-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <Image
              className="rounded-lg"
              src="/media/jelvenydepo/9.webp"
              alt=""
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Carousel>
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Mivel szolgálhatunk?
          </h2>
          <p className="mb-4">
            Saját gyártású kitűző alkatrészek, behúzható gomb alkatrészek,
            szerszámok és présgépek.
          </p>
          <p>
            Gyártunk és árulunk kör, és téglalap kitűzőalkatrészeket. Ebben
            benne van a kitűző felső és alsó része, valamint a tű.
            <br />
            <br />
            Köralakú kitűzőalapok elérhetőek:
            <br />
          </p>
          <div className="flex gap-2">
            <Badge color="info" size="sm">
              26mm
            </Badge>
            <Badge color="info" size="sm">
              32mm
            </Badge>
            <Badge color="info" size="sm">
              40mm
            </Badge>
            <Badge color="info" size="sm">
              55mm
            </Badge>
            <Badge color="info" size="sm">
              70mm
            </Badge>
          </div>
          <p>
            <br />
            Téglalap kitűzőalapok elérhetőek:
            <br />
          </p>
          <div className="flex gap-2">
            <Badge color="info" size="sm" className="mr-2 w-fit">
              40x28mm
            </Badge>
            <Badge color="info" size="sm" className="mr-2 w-fit">
              55x38mm
            </Badge>
            <Badge color="info" size="sm" className="mr-2 w-fit">
              35x35mm
            </Badge>
          </div>
          <div className="flex flex-row gap-2 pt-20 pb-2">
            <Button color="light" href="#prices">
              Árlista
            </Button>
            <Button gradientDuoTone="cyanToBlue" href="#order">
              Rendelés
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
