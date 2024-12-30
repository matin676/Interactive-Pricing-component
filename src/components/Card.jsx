import React, { useState } from "react";

function Card() {
  const [price, setPrice] = useState(16);
  const [billing, setBilling] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center absolute inset-0 top-40 m-auto max-w-lg max-h-fit rounded-lg overflow-hidden shadow-md bg-white p-8">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex justify-between items-center w-full max-md:flex-col">
          <p
            className="font-bold text-sm font-['Manrope']"
            style={{ color: "hsl(225, 20%, 60%)" }}
          >
            100k PAGEVIEWS
          </p>
          <h2 className="text-3xl font-bold max-md:mt-4">
            ${price}.00
            <span
              className="font-bold text-sm"
              style={{ color: "hsl(225, 20%, 60%)" }}
            >
              /{billing ? "year" : "month"}
            </span>
          </h2>
        </div>
        <input
          type="range"
          name="slider"
          value={price}
          max={100}
          onChange={(e) => setPrice(e.target.value)}
          style={{ backgroundColor: "hsl(224, 65%, 95%)" }}
          className="slider w-full h-2 rounded-lg appearance-none cursor-pointer mt-10 mb-10 accent-teal-600"
        />
        <div className="flex justify-between items-center pb-8">
          <label className="inline-flex items-center cursor-pointer">
            <span
              style={{ color: "hsl(225, 20%, 60%)" }}
              className="text-[0.75rem] font-bold mr-2 max-md:text-[0.65rem]"
            >
              Monthly Billing
            </span>
            <input
              type="checkbox"
              checked={billing}
              className="sr-only peer"
              onChange={(e) => setBilling(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span
              style={{ color: "hsl(225, 20%, 60%)" }}
              className="text-[0.75rem] font-bold ml-2 max-md:text-[0.65rem]"
            >
              Yearly Billing
            </span>
          </label>
          <span
            className="p-1 ml-2 rounded-full text-[0.65rem] font-bold max-md:text-[0.50rem]"
            style={{
              backgroundColor: "hsl(14, 92%, 95%)",
              color: "hsl(15, 100%, 70%)",
            }}
          >
            25% discount
          </span>
        </div>
      </div>

      <hr className="w-screen bg-slate-600 opacity-50" />

      <div className="flex justify-between items-center pt-8 w-full max-md:flex-col">
        <div
          style={{ color: "hsl(225, 20%, 60%)" }}
          className="text-[0.75rem] font-bold"
        >
          <p className="flex items-center">
            <span className="mr-2">
              <img
                src="/interactive-pricing-component/images/icon-check.svg"
                alt="icon-check"
              />
            </span>
            Unlimited websites
          </p>
          <p className="flex items-center">
            <span className="mr-2">
              <img
                src="/interactive-pricing-component/images/icon-check.svg"
                alt="icon-check"
              />
            </span>
            100% data ownership
          </p>
          <p className="flex items-center">
            <span className="mr-2">
              <img
                src="/interactive-pricing-component/images/icon-check.svg"
                alt="icon-check"
              />
            </span>
            Email reports
          </p>
        </div>
        <div className="max-md:mt-8">
          <button
            style={{ color: "hsl(223, 50%, 87%)" }}
            className="font-bold text-[0.75rem] bg-blue-950 p-3 pl-5 pr-5 rounded-full"
          >
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
