import React from "react";
import whatsAppSVG from "../public/whatsApp.svg";
import callSVG from "../public/callSvg.svg";
import { dm_sans } from "../app/fonts";
import Image from "next/image";
export default function HomePageWelcome() {
  return (
    <div className="flex bg-[#354ED2] px-6 w-screen">
      <div className="flex flex-col basis-1/2" style={{ paddingLeft: "52px" }}>
        <div
          className={"mt-40 font-medium text-white " + dm_sans.className}
          style={{ fontSize: "54px" }}
        >
          Welcome to 👋🏻 Gaztron Engineering Private Limited
        </div>
        <div
          className={"text-white font-normal text-base " + dm_sans.className}
        >
          (An ISO 9001-2015 Certified Co.)
        </div>
        <div
          className={"text-lg text-white font-medium pt-6 " + dm_sans.className}
          style={{ lineHeight: "30px" }}
        >
          At Gaztron, We promise our customers the best design, production, and
          export services for PSA Nitrogen & Oxygen Gas Generator. We offer a
          variety of PSA Gas Generators to meet the needs of various
          applications while ensuring the highest purity.
        </div>
        <div className="flex flex-row mt-7">
          <button
            type="button"
            class={
              "flex text-[#354ED2] border-[#0030FF] bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
              dm_sans.className
            }
            style={{ fontSize: "28px" }}
          >
            Get In Touch
          </button>
          <button
            type="button"
            class={
              "flex ml-6 text-white border-[#0030FF] bg-[#68D157] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
              dm_sans.className
            }
            style={{ fontSize: "28px" }}
          >
            Request a quote
          </button>
        </div>
      </div>
      <div className="flex flex-col basis-1/2">
        <Image
          src="/public/NitroGenPlantImg.jpg"
          alt="img"
          width={36}
          height={36}
        />
      </div>
      <div className="flex flex- col ">
        <div className="flex fixed bottom-24 left-6">
          <Image src={whatsAppSVG} alt="svg" />
        </div>
        <div className="flex fixed bottom-6 left-6">
          <Image src={callSVG} alt="svg" />
        </div>
      </div>
    </div>
  );
}
