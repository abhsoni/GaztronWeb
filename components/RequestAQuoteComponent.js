"use client";
import React from "react";
import requestAQouteSvg from "../public/requestAQouteSvg.svg";
import Image from "next/image";
export default function RequestAQuoteComponent() {
  return (
    <div className="flex bg-[#F9F8FE] flex-col lg:flex-row px-9">
      <div className="flex flex-col lg:basis-1/2">
        <div
          className="flex pt-12 font-bold text-[#556AD9]"
          style={{ fontSize: "45px", fontFamily: "DM Sans, sans-serif" }}
        >
          Request a quote.
        </div>
        <div
          className="flex pt-4 font-medium text-[#556AD9]"
          style={{ fontSize: "22px", fontFamily: "DM Sans, sans-serif" }}
        >
          Just submit your details and we’ll be in touch shortly.
        </div>
        <div className="flex pt-10 place-content-center pb-12">
          <Image src={requestAQouteSvg} alt="svg" />
        </div>
      </div>
      <div className="flex flex-col lg:basis-1/2">
        {/* <FAQQuestionComponent /> */}
      </div>
    </div>
  );
}
