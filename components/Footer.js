import React from "react";
import Image from "next/image";
import gaztronSVG from "../public/gaztronFooter.svg";

function Footer() {
  return (
    <div className="flex footer">
      <div className="flex flex-col basis-1/3 pl-9 pt-20">
        <div className="flex">
          <Image src={gaztronSVG} alt="My SVG" />
        </div>
        <div className="flex">
          Empowering industries with cutting-edge technological solutions and
          unwavering commitment to excellence, to enhance productivity and drive
          success.
        </div>
      </div>
      <div className="flex grid grid-rows-2 grid-flow-col gap-10 pr-1.5 pl-8 pt-20">
        <div className="flex flex-col">
          <div className="border-b-2 border-white-20 pb-1.5 footerMenuText">
            Product
          </div>
          <div>PSA Nitrogen Generator Plant </div>
          <div>PSA Oxygen Generator Plant</div>
          <div>Hydrogen Generator</div>
          <div>Cryogenic ASU Gas Plants</div>
          <div>Air Dryer</div>
        </div>
        <div className="flex flex-col">
          <div className="border-b-2 border-white-500">Product</div>
          <div>PSA Nitrogenflex Generator Plant </div>
          <div>PSA Oxygen Generator Plant</div>
          <div>Hydrogen Generator</div>
          <div>Cryogenic ASU Gas Plants</div>
          <div>Air Dryer</div>
        </div>
        <div className="flex flex-col">
          <div className="border-b-2 border-white-500">Product</div>
          <div>PSA Nitrogen Generator Plant </div>
          <div>PSA Oxygen Generator Plant</div>
          <div>Hydrogen Generator</div>
          <div>Cryogenic ASU Gas Plants</div>
          <div>Air Dryer</div>
        </div>
        <div className="flex flex-col">
          <div className="border-b-2 border-white-500">Product</div>
          <div>PSA Nitrogen Generator Plant </div>
          <div>PSA Oxygen Generator Plant</div>
          <div>Hydrogen Generator</div>
          <div>Cryogenic ASU Gas Plants</div>
          <div>Air Dryer</div>
        </div>
        <div className="flex flex-col">
          <div className="border-b-2 border-white-500">Product</div>
          <div>PSA Nitrogen Generator Plant </div>
          <div>PSA Oxygen Generator Plant</div>
          <div>Hydrogen Generator</div>
          <div>Cryogenic ASU Gas Plants</div>
          <div>Air Dryer</div>
        </div>
        <div className="flex flex-col">
          <div className="border-b-2 border-white-500">Product</div>
          <div>PSA Nitrogen Generator Plant </div>
          <div>PSA Oxygen Generator Plant</div>
          <div>Hydrogen Generator</div>
          <div>Cryogenic ASU Gas Plants</div>
          <div>Air Dryer</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
