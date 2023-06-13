import rightCheckSvg from "../public/rightCheckSvg.svg";
import Image from "next/image";
import React from "react";
export default function WhiteProductDescriptionComponent() {
  return (
    <div className="flex bg-[#F9F8FE]">
      <div className="flex basis-1/2 flex-col justify-content-center pl-9">
        <div
          className="flex text-white text-[#556AD9] font-bold text-5xl pt-16"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          01. PSA Nitrogen Generator
        </div>
        <div
          className="flex text-[#556AD9] font-nedium font-lg pt-6"
          style={{ fontFamily: "DM+Sans, sans-serif" }}
        >
          We specialize in designing and manufacturing top-of-the-line Nitrogen
          Plant Generators that come in different purity levels to suit a
          variety of applications. Our standard Nitrogen Generator model can
          achieve Nitrogen purity levels of up to 99.99%, while our high purity
          Nitrogen Gas Generator (Palladium-DX) and Ultra high purity Nitrogen
          Gas Generator (Copper-DX) models can reach Nitrogen purity levels of
          up to 99.9999%. The Palladium-DX model is particularly favoured for
          heating systems due to its exceptional purity levels.
        </div>
        <div className="flex flex-row mt-6">
          <div className="flex">
            <div className="flex w-7 -mt-14 mr-4">
              <Image src={rightCheckSvg} width={28} height={28} alt="svg" />
            </div>
          </div>
          <div className="flex text-[#556AD9] font-normal text-sm ">
            Gaztron offers a range of Nitrogen Gas Generators that can produce
            nitrogen at flow rates between 1 to 1000 nm3/hr, with varying purity
            levels from 98% to 99.9999%. Our systems are capable of supplying
            nitrogen at pressures ranging from 5 kg/cm2g to 140 kg/cm2 and can
            achieve extremely low dew points of up to (-) 80°C.
          </div>
        </div>
        <div className="flex flex-row mt-6">
          <div className="flex">
            <div className="flex w-7 -mt-14 mr-4">
              <Image src={rightCheckSvg} width={28} height={28} alt="svg" />
            </div>
          </div>
          <div className="flex text-[#556AD9] font-normal text-sm ">
            Gaztron offers a range of Nitrogen Gas Generators that can produce
            nitrogen at flow rates between 1 to 1000 nm3/hr, with varying purity
            levels from 98% to 99.9999%. Our systems are capable of supplying
            nitrogen at pressures ranging from 5 kg/cm2g to 140 kg/cm2 and can
            achieve extremely low dew points of up to (-) 80°C.
          </div>
        </div>
        <div className="flex flex-row mt-7 mb-12">
          <button
            type="button"
            class="flex text-white border-[#0030FF] bg-[#68D157] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "28px" }}
          >
            Request a quote
          </button>
          <button
            type="button"
            class="flex text-[#354ED2] border-[#0030FF] bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-4 py-2 text-center ml-6 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "28px" }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex basis-1/2"></div>
    </div>
  );
}
