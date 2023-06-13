import React from "react";
import starSvg from "../public/StarSvg.svg";
import heroSVG from "../public/heroSvg.svg";
import adityaBirlaSvg from "../public/AdityaBirla.svg";
import lgSvg from "../public/LG21.svg";
import svg1 from "../public/svg1.svg";
import svg2 from "../public/svg2.svg";
import svg3 from "../public/svg3.svg";
import svg4 from "../public/svg4.svg";
import svg5 from "../public/svg5.svg";
import svg6 from "../public/svg6.svg";
import svg7 from "../public/svg7.svg";
import svg8 from "../public/svg8.svg";
import cffSvg from "../public/cff.svg";
import hondaSvg from "../public/hondaSvg.svg";
import csirSvg from "../public/csirSvg.svg";
import Image from "next/image";
export default function WhatMakesUsDifferent() {
  return (
    <div className="flex bg-[#354ED2] px-6 w-screen pt-10 justify-center">
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <Image src={starSvg}></Image>
        </div>
        <div
          className="flex font-medium justify-center text-white"
          style={{ fontSize: "45px", fontFamily: "DM Sans, sans-serif" }}
        >
          What Makes Gaztron Gas Generator Different
        </div>
        <div
          className="flex justify-center text-white font-normal text-lg text-center px-8"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Since our inception, we have been dedicated to the production of
          on-site gas generators as our core business. With extensive experience
          in the industry, we have established ourselves as a leading provider
          of high-quality nitrogen and oxygen gas generators. Our continued
          focus on research and development has enabled us to offer the most
          energy-efficient technology available on the market today, which we
          take great pride in.
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between px-24 pt-10">
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg1} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                Highest Quality
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg2} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                40 Years of Experience
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg3} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                +5.000 Units Produced
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg4} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                High Profile Customers
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between px-24 pt-7">
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg5} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                Customizability
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg6} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                Efficient & Energy-Saving
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg7} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                Fully Automatic
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex border-2 border-black bg-white rounded-xl w-36 h-48 place-content-center">
                <Image src={svg8} />
              </div>
              <div className="flex text-white text-xl font-medium pt-4">
                Fast Start Up
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10 pb-12">
          <button
            type="button"
            class="flex text-[#354ED2] border-[#0030FF] bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-4 py-2 text-center ml-6 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "28px" }}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
