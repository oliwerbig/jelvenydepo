import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-12 px-8 dark:bg-gray-800 lg:py-16 lg:px-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 hidden md:mb-0 lg:block">
            <a href="/" className="flex items-center">
              <img
                src="/logo-05.svg"
                className="mr-3 h-[5rem]"
                alt="Jelvénydepo Logo"
              />
            </a>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Cégünk
            </h2>
            <p>
              Átvevőhely a XVII. kerületben! (Budapest) <br />
              <br />
              Jelvénydepo kft. <br />
              Cégjegyzékszám: 16 09 015777
              <br /> Adószám: 24922227-2-16 <br />
              5000 Szolnok, Kút utca 3. 2. em. 9. <br />
              <br />
              Szabó Tibor - Ügyvezető
              <br />
              jelvenydepo@gmail.com <br />
              +36203710680
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline">
              Jelvénydepo kft.
            </a>{" "}
            Minden jog fenntartva.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
