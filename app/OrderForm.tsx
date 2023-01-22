import Image from "next/image";
import React from "react";

const OrderForm = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <a
        href="#"
        className="dark:text-dark mb-6 flex items-center text-2xl font-semibold text-white"
      >
        By{" "}
        <div className="relative mr-2 aspect-[4/1] w-[15rem]">
          <Image src="/logo-05.svg" alt="logo" fill />
        </div>
      </a>
      <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email címed
              </label>
              <input
                type="email"
                id="email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Telefonszámod
              </label>
              <input
                type="text"
                id="phone"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="+36 20 371 0680"
                required-
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Írd le mit szeretnél rendelni
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-blue-700 py-3 px-5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-fit"
            >
              Rendelés leadása
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
