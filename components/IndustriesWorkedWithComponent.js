import React from "react";
import handAndSettingSvg from "../public/handAndSettingSvg.svg";
import heroSVG from "../public/heroSvg.svg";
import adityaBirlaSvg from "../public/AdityaBirla.svg";
import lgSvg from "../public/LG21.svg";
import cffSvg from "../public/cff.svg";
import hondaSvg from "../public/hondaSvg.svg";
import csirSvg from "../public/csirSvg.svg";
import Image from "next/image";
import { dm_sans } from "@/app/fonts";
export default function IndustriesWorkedWithComponent() {
  return (
    <div className="flex flex-col bg-[#F9F8FE] px-6 w-screen py-10 justify-center">
      <div className="flex justify-center">
        <Image src={handAndSettingSvg} alt="svg"></Image>
      </div>
      <div className="flex-col justify-center">
        <div
          className={
            "flex font-bold justify-center text-center pt-5 text-[#556AD9] " +
            dm_sans.className
          }
          style={{ fontSize: "45px" }}
        >
          Industries that we have worked with
        </div>
      </div>
      <div className="flex justify-center pt-10">
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
