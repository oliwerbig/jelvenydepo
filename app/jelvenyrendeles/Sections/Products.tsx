"use client";

import { range } from "@/app/range";
import { Badge, Button, Carousel } from "flowbite-react";
import Image from "next/image";
const Products = () => {
  const badgeImages = range(10, 1);
  const szalagosImages = range(12, 1);
  const szalagokImages = ["1", "2", "4", "5", "6", "8", "11", "14", "15"];

  return (
    <section
      id="products"
      className="bg-slate-100 bg-opacity-80 dark:bg-gray-900/75"
    >
      <div className="mx-auto max-w-7xl items-center gap-16 py-12 px-8 lg:py-16 lg:px-20 xl:grid xl:grid-cols-2">
        <Carousel className="mt-10 xl:mt-0">
          {badgeImages.map((imageId) => (
            <figure
              key={imageId}
              className="cursor-pointer grayscale-[25%] filter transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-96 w-full">
                <Image
                  className="rounded-lg"
                  src={`/media/jelvenyrendeles/products/badge (${imageId}).jpg`}
                  alt=""
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
                <p></p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Kitűzők és jelvények
          </h2>
          <p>
            Köralakú kitűzők elérhetőek:
            <br />
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="failure" size="sm">
              26mm
            </Badge>
            <Badge color="failure" size="sm">
              32mm
            </Badge>
            <Badge color="failure" size="sm">
              40mm
            </Badge>
            <Badge color="failure" size="sm">
              55mm
            </Badge>
            <Badge color="failure" size="sm">
              70mm
            </Badge>
          </div>
          <p>
            <br />
            Téglalap kitűzők elérhetőek:
            <br />
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="failure" size="sm" className="mr-2 w-fit">
              40x28mm
            </Badge>
            <Badge color="failure" size="sm" className="mr-2 w-fit">
              55x38mm
            </Badge>
            <Badge color="failure" size="sm" className="mr-2 w-fit">
              35x35mm
            </Badge>
          </div>
          <div className="flex flex-row gap-2 pt-10 pb-2">
            <Button color="light" href="#prices">
              Árlista
            </Button>
            <Button gradientDuoTone="pinkToOrange" href="#order">
              Rendelés
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl items-center gap-16 py-12 px-8 lg:py-16 lg:px-20 xl:grid xl:grid-cols-2">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 flex items-center gap-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Szalagos kitűzők{" "}
            <span className="font-large mr-2 rounded-full border border-yellow-300 bg-yellow-100 px-5  py-2.5 text-xs text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
              Új!
            </span>
          </h2>
          <p>
            A szalagavató jelvény 4 cm átmérőjű, fém alapú. A jelvényen szerepel
            az iskola neve, a névadó arcképe, vagy az iskola logója. A szalag
            anyaga selyem szatén. A szalag szélessége 15 mm. A jelvényből kilógó
            szalag hossza 7.5 cm. <br></br>
            <br></br>A jelvénybe bepréseljük a szalagot. A szalagokból széles
            színválasztékot kínálunk. <br></br>
            <br></br>A szalag minták mellett látható szám az egyértelmű szín
            megjelölésére szolgál. Kérésünk, hogy megrendeléskor a kiválasztott
            szalag mellett látható számot írja meg, így elkerülhető, hogy más
            színárnyalatot kapjon. Szalag vége le van hegesztve, így nem
            rojtolódik.<br></br>
            <br></br> A szalagavató jelvény ára 450 Ft/db. Az ár nem tartalmazza
            az áfá-t. Más költség, felár nincs. <br></br>
            <br></br>Ha átutalással kéri a fizetést, kérjük, hogy megrendeléskor
            ezt előre jelezze és adja meg a számlázási címet, minden más esetben
            az iskola nevére állítom ki a számlát. Előleget nem kérek.<br></br>
            <br></br> Köszönjük a figyelmét.
          </p>
          <div className="flex flex-row gap-2 pt-10 pb-2">
            <Button color="light" href="#prices">
              Árlista
            </Button>
            <Button gradientDuoTone="pinkToOrange" href="#order">
              Rendelés
            </Button>
          </div>
        </div>{" "}
        <Carousel className="mt-10 xl:mt-0">
          {szalagosImages.map((imageId) => (
            <figure
              key={imageId}
              className="cursor-pointer grayscale-[25%] filter transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-[50rem] w-full">
                <Image
                  className="rounded-lg"
                  src={`/media/jelvenyrendeles/products/szalagos (${imageId}).jpg`}
                  alt=""
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
                <p></p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
      <Carousel className="mx-auto mt-10 h-[20rem] w-[60%] xl:mt-0">
        {szalagokImages.map((imageId) => (
          <>
            <p className="absolute top-[6rem] left-[1rem] z-[99] m-0 p-0 text-3xl text-white">
              Szalag {imageId}
            </p>
            <figure
              key={imageId}
              className="cursor-pointer grayscale-[25%] filter transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-96 w-full">
                <Image
                  className="rounded-lg"
                  src={`/media/jelvenyrendeles/products/szalagok_${imageId}.png`}
                  alt=""
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
                <p>Szalag {imageId}</p>
              </figcaption>
            </figure>
          </>
        ))}
      </Carousel>
    </section>
  );
};

export default Products;
