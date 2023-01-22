import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <section
      id="products"
      className="relative bg-slate-100 bg-opacity-90 dark:bg-gray-900"
    >
      <div className="absolute -z-10 h-[100%] w-[100%]">
        <Image
          src="/media/jelvenydepo/7.webp"
          alt=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
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
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              26mm
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              32mm
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              40mm
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              55mm
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              70mm
            </span>
            <br />
            <br />
            Téglalp kitűzőalapok elérhetőek:
            <br />
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              40x28mm
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              55x38mm
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              35x35mm
            </span>
          </p>
          <div className="flex flex-col space-y-4 pt-20 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-1 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Rendelés
            </a>
            <a
              href="#prices"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-1 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Árlista
            </a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <figure className="cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <div className="relative h-56 w-full">
              <Image
                className="rounded-lg"
                src="/media/jelvenydepo/10.webp"
                alt=""
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
              <p>Présszerszámok</p>
            </figcaption>
          </figure>
          <div className="relative h-40 w-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <Image
              className="rounded-lg"
              src="/media/jelvenydepo/11.webp"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <figure className="cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <div className="relative h-56 w-full">
              <Image
                className="rounded-lg"
                src="/media/jelvenydepo/6.webp"
                alt=""
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
              <p>Présgépek</p>
            </figcaption>
          </figure>
          <div className="relative h-40 w-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <Image
              className="rounded-lg"
              src="/media/jelvenydepo/7.webp"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <figure className="cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <div className="relative -mt-16 h-56 w-full">
              <Image
                className="rounded-lg"
                src="/media/jelvenydepo/8.webp"
                alt=""
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption className="absolute bottom-6 px-4 text-lg text-white">
              <p>Alkatrészek</p>
            </figcaption>
          </figure>
          <div className="relative h-40 w-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
            <Image
              className="rounded-lg"
              src="/media/jelvenydepo/9.webp"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
