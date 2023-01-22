import React from "react";
import OrderForm from "../OrderForm";

const Order = () => {
  return (
    <section id="order" className="bg-slate-100 py-8 px-6">
      <div className="mx-auto max-w-7xl ">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#3b82f6" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rendelj tőlünk most!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Leadhatod rendelésed itt, az űrlapon keresztül, vagy megkereshetsz
              minket emailcímünkön, vagy telefonszámunkon.
              <br />
              <br />
              <span className="cursor-pointer select-all text-base font-semibold leading-7 text-white">
                jelvenydepo@gmail.com
              </span>
              <br />
              <span className="cursor-pointer select-all text-base font-semibold leading-7 text-white">
                +36 20 371 0680
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#prices"
                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Árlista <span aria-hidden="true">→</span>
              </a>
              <a
                href="#products"
                className="text-base font-semibold leading-7 text-white"
              >
                Termékeink
              </a>
            </div>
          </div>
          <div className="mt-16 w-[100%] rounded py-8 lg:mt-8">
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
