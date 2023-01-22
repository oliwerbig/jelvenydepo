import React from "react";

const ContactForm = () => {
  return (
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
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Tárgy
        </label>
        <input
          type="text"
          id="subject"
          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Mondd el miben segíthetünk"
          required-
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Üzeneted
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
        Üzenet küldése
      </button>
    </form>
  );
};

export default ContactForm;
