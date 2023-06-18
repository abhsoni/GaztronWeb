import React from "react";
import whatsAppSVG from "../public/whatsApp.svg";
import NitrogenGenerator from "../public/NitrogenGenerator.jpg";
import callSVG from "../public/callSvg.svg";
import n2generatorSvg from "../public/n2generatorSvg.svg";
import imagesCornerDesign from "../public/imagesCornerDesign.svg";
import { dm_sans } from "../app/fonts";
import Image from "next/image";
export default function HomePageWelcome() {
  return (
    <div className="flex bg-[#354ED2] mobile:flex-col px-6 w-screen">
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
        <div className="flex flex-row mt-7 mb-10">
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
      <div className="flex justify-center relative basis-1/2 mt-40 mb-40">
        <Image
          src={NitrogenGenerator}
          width={550}
          height={550}
          alt="img"
          style={{ borderRadius: "12px" }}
        />
        <div className="flex absolute right-10 -top-10">
          <Image src={imagesCornerDesign} alt="svg" />
        </div>
        <div className="flex absolute left-10 -bottom-10">
          <Image src={imagesCornerDesign} alt="svg" />
        </div>
        <div className="flex absolute -bottom-36 bg-white flex-col justify-center w-9/12 rounded-xl border-white border">
          <div className="flex justify-center pt-2">
            <Image src={n2generatorSvg} alt="svg" />
          </div>
          <div
            className={
              "flex justify-center text-[#354ED2] font-bold pt-2 text-2xl " +
              dm_sans.className
            }
          >
            PSA Nitrogen Generator Plant
          </div>
          <div className="flex justify-center text-center text-lg font-bold">
            NITROGEN GAS GENERATOR AVAILABLE UP TO 1000 NM3/HR WITH PURITY UP TO
            99.9998% (2 PPM)
          </div>
          <div
            className={
              "flex justify-center bg-[#354ED2] rounded-xl py-4 text-lg font-medium text-white " +
              dm_sans.className
            }
          >
            Request a quote
          </div>
        </div>
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
