import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-8 pt-8 pb-2 dark:bg-gray-900 lg:px-20 lg:pt-16 lg:pb-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Kik vagyunk mi?
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Cégünk 2014 ben alakult meg, fémfeldolgozó munkát végzünk.
            <br />
            Műhelyünkben 8 különböző kitűző alkatrészt gyártunk, kör és téglalap
            alakban, magyar méretekben.
            <br />
            <br />
            Magyarországon egyedüliként árulunk és gyártunk kizárólag hazai
            méretekben, hazai anyagokból préselt kitűző, jelvény, és behúzható
            gomb alkatrészeket.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
