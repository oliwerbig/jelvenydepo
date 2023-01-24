import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-12 px-8 dark:bg-gray-900 lg:py-16 lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-start justify-center gap-6 ">
        <div className="flex basis-[40rem] flex-col gap-6 lg:basis-[30rem]">
          <div className="flex flex-row items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="relative aspect-square basis-[15rem]">
              <Image src="/media/tibi.jpg" alt="Tibi" fill />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Szabó Tibor</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Ügyvezető
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Többszöri triatlonos, mindig segítőkész. <br />Ő vezeti a céget.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="relative m-4 aspect-square basis-[15rem]">
              <Image src="/logo-01.svg" alt="logo" fill />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jelvénydepo kft.</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400"></span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Az alábbi elérhetőségeken találhatsz meg minket:
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  {" "}
                  <span className="cursor-pointer select-all text-base font-semibold leading-7">
                    jelvenydepo@gmail.com
                  </span>
                  <br />
                  <span className="cursor-pointer select-all text-base font-semibold leading-7">
                    +36 20 371 0680
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-[40rem] lg:basis-[30rem] ">
          <div className="my-12 xl:my-4">
            <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Kérdezz tőlünk!
            </h2>
            <p className="text-center text-xl font-light text-gray-500 dark:text-gray-400">
              Kérdésed támadt termékeinkkel, árainkkal vagy gyártási
              folyamatunkkal kapcsolatban? Ne félj feltenni!
            </p>
          </div>
          <div className="rounded-xl bg-white py-4 px-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
