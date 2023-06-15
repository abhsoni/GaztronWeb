import React from "react";
import Image from "next/image";
import faqSvg from "../public/faqSvg.svg";
import FAQQuestionComponent from "../components/FAQQuestionComponent";
import { dm_sans } from "@/app/fonts";

export default function FAQComponent() {
  let flagShowAnswer = true;
  return (
    <div className="flex bg-[#354ED2] flex-col desktop:flex-row  px-9">
      <div className="basis-1/2">
        <div
          className={"flex pt-12 font-bold text-white " + dm_sans.className}
          style={{ fontSize: "45px" }}
        >
          Frequently Asked Questions
        </div>
        <div
          className={"flex pt-4 font-medium text-white " + dm_sans.className}
          style={{ fontSize: "22px" }}
        >
          Have a question? Check out our frequently asked questions to find your
          answer.
        </div>
        <div className="flex pt-10 place-content-center pb-12">
          <Image src={faqSvg} alt="svg" />
        </div>
      </div>
      <div className="basis-1/2">
        <FAQQuestionComponent />
      </div>
    </div>
  );
}
