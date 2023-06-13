import React from "react";
import handshakeBrandsSVG from "../public/handshakeBrands.svg";
import heroSVG from "../public/heroSvg.svg";
import adityaBirlaSvg from "../public/AdityaBirla.svg";
import lgSvg from "../public/LG21.svg";
import cffSvg from "../public/cff.svg";
import hondaSvg from "../public/hondaSvg.svg";
import csirSvg from "../public/csirSvg.svg";
import Image from "next/image";
export default function Brands() {
  return (
    <div className="flex bg-[#F9F8FE] px-6 w-screen pt-10 justify-center">
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <Image src={handshakeBrandsSVG} alt="svg"></Image>
        </div>
        <div
          className="flex font-medium justify-center"
          style={{ fontSize: "54px", fontFamily: "DM Sans, sans-serif" }}
        >
          Trusted By Brands Across The Globe
        </div>
        <div className="flex">
          <div class="slider-container">
            <div class="slider animate-slide infinite">
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={heroSVG} alt="svg" />
              </div>
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={adityaBirlaSvg} alt="svg" />
              </div>
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={lgSvg} alt="svg" />
              </div>
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={hondaSvg} alt="svg" />
              </div>
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={heroSVG} alt="svg" />
              </div>
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={csirSvg} alt="svg" />
              </div>
              <div className="flex border-2 border-[#354ED2] bg-white rounded-xl w-36 h-48 mx-9 place-content-center">
                <Image src={cffSvg} alt="svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
