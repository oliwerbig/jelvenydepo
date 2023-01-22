import React from "react";

const Prices = () => {
  return (
    <section id="prices" className="bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-8 px-6">
        <h2 className="mb-4 w-fit text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Árlista
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          <div className="basis-[35rem] rounded-xl bg-slate-100 shadow-md">
            <table className="h-full w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                  >
                    Méret
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tartalma
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                  >
                    Ár
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      26mm kör
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      35ft
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      32mm kör
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      35ft
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      40mm kör
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      40ft
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      55mm kör
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      55ft
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      70mm kör
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      70ft
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="basis-[35rem] rounded-xl bg-slate-100 shadow-md">
            <table className="h-max w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                  >
                    Méret
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tartalma
                  </th>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 dark:bg-gray-800"
                  >
                    Ár
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      35x35mm téglalap
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      50ft
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      40x28mm téglalap
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      50ft
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      55x38mm téglalap
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    1 db felső
                    <br />
                    1 db alsó
                    <br />1 db tű
                  </td>
                  <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                    <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      60ft
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="py-8 px-6">
              A csomagolási- és postaköltség: mennyiségtől függően. Az árak az
              ÁFÁ-t nem tartalmazzák! <br />
              <br />
              Fizetési mód: postai utánvétel, banki átutalás, postai csekk,
              készpénz.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 py-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#order"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Rendelés
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            Termékeink
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prices;
