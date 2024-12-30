import React from "react";

function Container({ children }) {
  return (
    <>
      <div className="relative w-full h-full bg-cover max-md:h-[40vh]">
        <img
          src={import.meta.env.BASE_URL + "/images/bg-pattern.svg"}
          alt="bg pattern"
          className="bg-cover w-full h-full"
        />
        <div className="absolute inset-0 m-auto -mt-32 items-center justify-center flex flex-col max-md:mt-8">
          <img
            src={import.meta.env.BASE_URL + "/images/pattern-circles.svg"}
            alt="circle pattern"
            className="max-md:w-[5rem]"
          />
          <div className="relative text-center -top-24">
            <h2
              style={{ color: "hsl(227, 35%, 25%)" }}
              className="text-3xl font-extrabold max-md:text-2xl"
            >
              Simple, traffic-based pricing
            </h2>
            <p
              style={{ color: "hsl(225, 20%, 60%)" }}
              className="text-base pt-1 max-md:text-xs"
            >
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default Container;
