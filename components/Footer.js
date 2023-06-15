import React from "react";
import Image from "next/image";
import gaztronSVG from "../public/gaztronFooter.svg";
import { dm_sans } from "../app/fonts";
import youtubeSvg from "../public/youtubeSvg.svg";

export default function Footer() {
  return (
    <div className="flex bg-[#354ED2] flex-col desktop:flex-row px-9">
      <div className="flex basis-1/3 pt-20">
        <div className="flex flex-col">
          <div className="flex">
            <Image src={gaztronSVG} alt="gaztronSVG" />
          </div>
          <div
            className="flex pt-6 w-80 text-white font-normal text-sm"
            style={{ fontFamily: "DM Sans, sans-serif", lineHeight: "23px" }}
          >
            Empowering industries with cutting-edge technological solutions and
            unwavering commitment to excellence, to enhance productivity and
            drive success.
          </div>
          <div className="flex pt-7">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mx-1">
              <div className="flex place-self-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 1.96324V16.0368C17.25 16.3585 17.1222 16.6671 16.8947 16.8947C16.6671 17.1222 16.3585 17.25 16.0368 17.25H1.96324C1.64147 17.25 1.33287 17.1222 1.10535 16.8947C0.877823 16.6671 0.75 16.3585 0.75 16.0368V1.96324C0.75 1.64147 0.877823 1.33287 1.10535 1.10535C1.33287 0.877823 1.64147 0.75 1.96324 0.75L16.0368 0.75C16.3585 0.75 16.6671 0.877823 16.8947 1.10535C17.1222 1.33287 17.25 1.64147 17.25 1.96324ZM5.60294 7.05882H3.17647V14.8235H5.60294V7.05882ZM5.82132 4.38971C5.8226 4.20616 5.78772 4.02417 5.71866 3.85411C5.6496 3.68405 5.54772 3.52925 5.41884 3.39857C5.28995 3.26788 5.13659 3.16386 4.9675 3.09245C4.79842 3.02103 4.61693 2.98362 4.43338 2.98235H4.38971C4.01645 2.98235 3.65849 3.13063 3.39456 3.39456C3.13063 3.65849 2.98235 4.01645 2.98235 4.38971C2.98235 4.76296 3.13063 5.12092 3.39456 5.38485C3.65849 5.64878 4.01645 5.79706 4.38971 5.79706C4.57326 5.80157 4.75591 5.76988 4.92721 5.70378C5.09851 5.63768 5.25511 5.53848 5.38806 5.41184C5.52101 5.2852 5.6277 5.13361 5.70204 4.96572C5.77638 4.79783 5.81692 4.61694 5.82132 4.43338V4.38971ZM14.8235 10.1065C14.8235 7.77221 13.3385 6.86471 11.8632 6.86471C11.3802 6.84052 10.8993 6.9434 10.4684 7.16309C10.0375 7.38279 9.67177 7.71161 9.40765 8.11676H9.33971V7.05882H7.05882V14.8235H9.48529V10.6937C9.45022 10.2707 9.58345 9.85099 9.85605 9.52568C10.1287 9.20038 10.5186 8.99578 10.9412 8.95632H11.0334C11.805 8.95632 12.3776 9.44162 12.3776 10.6646V14.8235H14.8041L14.8235 10.1065Z"
                    fill="#151515"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mx-1">
              <div className="flex place-self-center">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.6215 2.24195C15.0489 2.49522 14.4417 2.66155 13.82 2.73545C14.4753 2.34352 14.9658 1.72671 15.2 0.999945C14.585 1.36594 13.9107 1.62244 13.208 1.76119C12.7359 1.25613 12.1102 0.921167 11.4282 0.808384C10.7461 0.6956 10.0459 0.811313 9.43643 1.13753C8.82692 1.46376 8.34227 1.98221 8.05782 2.61229C7.77336 3.24237 7.70504 3.94878 7.86348 4.6217C6.61631 4.55919 5.39623 4.23509 4.28244 3.67044C3.16866 3.1058 2.18607 2.31323 1.39848 1.3442C1.1197 1.82303 0.973195 2.36736 0.973979 2.92144C0.973979 4.00894 1.52748 4.9697 2.36898 5.5322C1.87099 5.51652 1.38395 5.38203 0.948479 5.13995V5.17894C0.948629 5.90322 1.19926 6.60516 1.65786 7.16574C2.11647 7.72632 2.75484 8.11105 3.46473 8.25469C3.00244 8.37997 2.51771 8.39844 2.04723 8.30869C2.24738 8.93212 2.63748 9.47734 3.16292 9.86803C3.68836 10.2587 4.32282 10.4753 4.97748 10.4874C4.32684 10.9984 3.58186 11.3762 2.78514 11.5991C1.98842 11.822 1.15557 11.8856 0.334229 11.7864C1.768 12.7085 3.43705 13.198 5.14173 13.1964C10.9115 13.1964 14.0667 8.4167 14.0667 4.27145C14.0667 4.13645 14.063 3.99994 14.057 3.86645C14.6711 3.42257 15.2012 2.87271 15.6222 2.24269L15.6215 2.24195Z"
                    fill="#151515"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mx-1">
              <div className="flex place-self-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.5C3.85775 0.5 0.5 3.85775 0.5 8C0.5 11.7432 3.24275 14.846 6.8285 15.4093V10.1675H4.9235V8H6.8285V6.34775C6.8285 4.46825 7.9475 3.43025 9.66125 3.43025C10.4818 3.43025 11.3397 3.5765 11.3397 3.5765V5.4215H10.3947C9.4625 5.4215 9.17225 5.99975 9.17225 6.593V8H11.252L10.9198 10.1675H9.17225V15.4093C12.7572 14.8468 15.5 11.7425 15.5 8C15.5 3.85775 12.1423 0.5 8 0.5Z"
                    fill="#151515"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mx-1">
              <div className="flex place-self-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5.75C7.40326 5.75 6.83097 5.98705 6.40901 6.40901C5.98705 6.83097 5.75 7.40326 5.75 8C5.75 8.59674 5.98705 9.16903 6.40901 9.59099C6.83097 10.0129 7.40326 10.25 8 10.25C8.59674 10.25 9.16903 10.0129 9.59099 9.59099C10.0129 9.16903 10.25 8.59674 10.25 8C10.25 7.40326 10.0129 6.83097 9.59099 6.40901C9.16903 5.98705 8.59674 5.75 8 5.75ZM8 4.25C8.99456 4.25 9.94839 4.64509 10.6517 5.34835C11.3549 6.05161 11.75 7.00544 11.75 8C11.75 8.99456 11.3549 9.94839 10.6517 10.6517C9.94839 11.3549 8.99456 11.75 8 11.75C7.00544 11.75 6.05161 11.3549 5.34835 10.6517C4.64509 9.94839 4.25 8.99456 4.25 8C4.25 7.00544 4.64509 6.05161 5.34835 5.34835C6.05161 4.64509 7.00544 4.25 8 4.25ZM12.875 4.0625C12.875 4.31114 12.7762 4.5496 12.6004 4.72541C12.4246 4.90123 12.1861 5 11.9375 5C11.6889 5 11.4504 4.90123 11.2746 4.72541C11.0988 4.5496 11 4.31114 11 4.0625C11 3.81386 11.0988 3.5754 11.2746 3.39959C11.4504 3.22377 11.6889 3.125 11.9375 3.125C12.1861 3.125 12.4246 3.22377 12.6004 3.39959C12.7762 3.5754 12.875 3.81386 12.875 4.0625ZM8 2C6.1445 2 5.8415 2.00525 4.97825 2.0435C4.39025 2.07125 3.99575 2.15 3.62975 2.2925C3.32346 2.40495 3.04656 2.5852 2.81975 2.81975C2.58501 3.04655 2.40451 3.32344 2.29175 3.62975C2.14925 3.99725 2.0705 4.391 2.0435 4.97825C2.0045 5.80625 2 6.09575 2 8C2 9.8555 2.00525 10.1585 2.0435 11.0217C2.07125 11.609 2.15 12.0043 2.29175 12.3695C2.41925 12.6958 2.56925 12.9305 2.81825 13.1795C3.071 13.4315 3.30575 13.5822 3.62825 13.7067C3.99875 13.85 4.39325 13.9295 4.97825 13.9565C5.80625 13.9955 6.09575 14 8 14C9.8555 14 10.1585 13.9948 11.0217 13.9565C11.6082 13.9288 12.0035 13.85 12.3695 13.7083C12.6753 13.5952 12.9521 13.4154 13.1795 13.1818C13.4323 12.929 13.583 12.6943 13.7075 12.3717C13.85 12.002 13.9295 11.6067 13.9565 11.0217C13.9955 10.1937 14 9.90425 14 8C14 6.1445 13.9948 5.8415 13.9565 4.97825C13.9288 4.39175 13.85 3.99575 13.7075 3.62975C13.5945 3.32375 13.4143 3.04697 13.1803 2.81975C12.9536 2.58488 12.6766 2.40438 12.3702 2.29175C12.0027 2.14925 11.6082 2.0705 11.0217 2.0435C10.1937 2.0045 9.90425 2 8 2ZM8 0.5C10.0378 0.5 10.292 0.5075 11.0915 0.545C11.8903 0.5825 12.434 0.70775 12.9125 0.89375C13.4075 1.08425 13.8245 1.34225 14.2415 1.7585C14.6229 2.13342 14.918 2.58694 15.1063 3.0875C15.2915 3.56525 15.4175 4.10975 15.455 4.9085C15.4903 5.708 15.5 5.96225 15.5 8C15.5 10.0378 15.4925 10.292 15.455 11.0915C15.4175 11.8903 15.2915 12.434 15.1063 12.9125C14.9185 13.4133 14.6233 13.867 14.2415 14.2415C13.8665 14.6227 13.413 14.9178 12.9125 15.1063C12.4347 15.2915 11.8903 15.4175 11.0915 15.455C10.292 15.4903 10.0378 15.5 8 15.5C5.96225 15.5 5.708 15.4925 4.9085 15.455C4.10975 15.4175 3.566 15.2915 3.0875 15.1063C2.58674 14.9184 2.13315 14.6232 1.7585 14.2415C1.37705 13.8666 1.08195 13.4131 0.89375 12.9125C0.70775 12.4347 0.5825 11.8903 0.545 11.0915C0.50975 10.292 0.5 10.0378 0.5 8C0.5 5.96225 0.5075 5.708 0.545 4.9085C0.5825 4.109 0.70775 3.566 0.89375 3.0875C1.08143 2.58663 1.3766 2.13299 1.7585 1.7585C2.13325 1.37692 2.58682 1.0818 3.0875 0.89375C3.566 0.70775 4.109 0.5825 4.9085 0.545C5.708 0.50975 5.96225 0.5 8 0.5Z"
                    fill="#151515"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mx-1">
              <div className="flex place-self-center">
                <Image src={youtubeSvg} alt="youtubeSvg" />
              </div>
            </div>
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mx-1">
              <div className="flex place-self-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0409 0.564453C4.68908 0.564453 0.333661 4.75947 0.331774 9.91502C0.330516 11.5637 0.778387 13.1728 1.62758 14.59L0.25 19.4354L5.39737 18.1352C6.82918 18.8842 8.42124 19.2749 10.0371 19.2738H10.0409C15.3927 19.2738 19.7481 15.0781 19.75 9.92257C19.7513 7.42531 18.7423 5.07461 16.9087 3.30766C15.0757 1.54008 12.6382 0.565082 10.0409 0.564453ZM10.0409 17.6943H10.0377C8.58971 17.6943 7.16935 17.3194 5.93016 16.6111L5.63452 16.4425L2.58119 17.2137L3.39642 14.3453L3.20456 14.0515C2.39871 12.8225 1.96973 11.3847 1.9704 9.91502C1.97229 5.62942 5.593 2.14395 10.044 2.14395C12.1991 2.14458 14.2252 2.95415 15.7494 4.42294C17.2735 5.89173 18.112 7.84487 18.1107 9.92194C18.1089 14.2075 14.4894 17.6943 10.0409 17.6943ZM14.4674 11.8726C14.2246 11.7562 13.0319 11.1907 12.8093 11.1121C12.5872 11.0347 12.4255 10.9944 12.2639 11.2284C12.1029 11.4624 11.6374 11.9889 11.4965 12.1443C11.3543 12.3003 11.2128 12.3192 10.97 12.2028C10.7272 12.0858 9.94527 11.8392 9.01934 11.0429C8.29784 10.4239 7.81097 9.659 7.66944 9.42437C7.5279 9.191 7.65434 9.06457 7.77574 8.94819C7.88456 8.8444 8.01855 8.67582 8.13932 8.53932C8.2601 8.40282 8.30035 8.30532 8.38213 8.14932C8.46265 7.99395 8.42239 7.85682 8.36137 7.74045C8.30035 7.62282 7.816 6.47295 7.61282 6.00558C7.41656 5.55016 7.21653 5.61118 7.06745 5.60363C6.92592 5.59734 6.76489 5.59545 6.60197 5.59545C6.44156 5.59545 6.178 5.65395 5.95532 5.88795C5.73327 6.12195 5.10613 6.68682 5.10613 7.8367C5.10613 8.9872 5.97545 10.0981 6.09685 10.2541C6.21826 10.4094 7.80782 12.7702 10.2415 13.7829C10.8203 14.0226 11.2719 14.1666 11.6248 14.2748C12.206 14.4529 12.735 14.4271 13.1527 14.3673C13.6182 14.3 14.5882 13.8024 14.7895 13.2571C14.992 12.7117 14.992 12.2437 14.9316 12.1462C14.8725 12.0487 14.7102 11.9902 14.4674 11.8726Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={
              "flex pt-7 font-medium text-white text-base " + dm_sans.className
            }
          >
            Select Language
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap pt-20 pb-12">
        <div className="flex flex-col px-12">
          <div
            className={
              "flex border-b-2 font-bold text-lg text-white pb-2 " +
              dm_sans.className
            }
          >
            Products
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            PSA Nitrogen Generator Plant{" "}
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            PSA Oxygen Generator Plant
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            Hydrogen Generator
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            Cryogenic ASU Gas Plants
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            Air Dryer
          </div>
        </div>
        <div className="flex flex-col px-12">
          <div
            className={
              "flex border-b-2 font-bold text-lg text-white pb-2 " +
              dm_sans.className
            }
          >
            Company
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            PSA Nitrogen Generator Plant{" "}
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            PSA Oxygen Generator Plant
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            Hydrogen Generator
          </div>
        </div>
        <div className="flex flex-col px-12">
          <div
            className={
              "flex border-b-2 font-bold text-lg text-white pb-2 " +
              dm_sans.className
            }
          >
            Support
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            PSA Nitrogen Generator Plant{" "}
          </div>
          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            PSA Oxygen Generator Plant
          </div>

          <div
            className={
              "flex font-normal text-base text-white pt-4 " + dm_sans.className
            }
          >
            Air Dryer
          </div>
        </div>
        <div className="flex flex-col px-12">
          <div
            className={
              "flex border-b-2 font-bold text-lg text-white pb-2 " +
              dm_sans.className
            }
          >
            Gaztron Headquarter
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 18C14.8417 18 12.8208 17.5 10.8125 16.5C8.80417 15.5 7 14.2 5.4 12.6C3.8 11 2.5 9.19583 1.5 7.1875C0.5 5.17917 0 3.15833 0 1.125C0 0.808333 0.108333 0.541667 0.325 0.325C0.541667 0.108333 0.808333 0 1.125 0H4.625C4.85833 0 5.0625 0.0791667 5.2375 0.2375C5.4125 0.395833 5.525 0.608333 5.575 0.875L6.25 4.025C6.28333 4.25833 6.27917 4.47083 6.2375 4.6625C6.19583 4.85417 6.10833 5.01667 5.975 5.15L3.475 7.675C4.40833 9.225 5.45417 10.575 6.6125 11.725C7.77083 12.875 9.08333 13.85 10.55 14.65L12.925 12.2C13.0917 12.0167 13.2833 11.8875 13.5 11.8125C13.7167 11.7375 13.9333 11.725 14.15 11.775L17.125 12.425C17.375 12.475 17.5833 12.6 17.75 12.8C17.9167 13 18 13.2333 18 13.5V16.875C18 17.1917 17.8917 17.4583 17.675 17.675C17.4583 17.8917 17.1917 18 16.875 18Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              +91-8447203393
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.044 0.838745C5.28055 0.838745 0.590097 5.35645 0.588065 10.9086C0.58671 12.6841 1.06903 14.4169 1.98355 15.9432L0.5 21.1613L6.04332 19.7611C7.58528 20.5677 9.29979 20.9884 11.04 20.9872H11.044C16.8075 20.9872 21.498 16.4688 21.5 10.9167C21.5014 8.22736 20.4148 5.69584 18.4401 3.79297C16.4661 1.88942 13.8411 0.839423 11.044 0.838745ZM11.044 19.2862H11.0406C9.48123 19.2862 7.95161 18.8825 6.6171 18.1197L6.29871 17.9382L3.01052 18.7687L3.88845 15.6796L3.68184 15.3633C2.814 14.0397 2.35202 12.4913 2.35274 10.9086C2.35477 6.29332 6.254 2.53975 11.0474 2.53975C13.3683 2.54042 15.5502 3.41226 17.1916 4.99404C18.833 6.57581 19.736 8.6792 19.7346 10.916C19.7326 15.5313 15.8347 19.2862 11.044 19.2862ZM15.811 13.0167C15.5495 12.8914 14.2652 12.2824 14.0254 12.1977C13.7862 12.1144 13.6121 12.071 13.438 12.323C13.2646 12.575 12.7633 13.142 12.6116 13.3094C12.4585 13.4774 12.3061 13.4977 12.0446 13.3724C11.7831 13.2464 10.9411 12.9808 9.9439 12.1232C9.1669 11.4566 8.64258 10.6329 8.49016 10.3802C8.33774 10.1289 8.4739 9.99271 8.60464 9.86739C8.72184 9.75562 8.86613 9.57407 8.99619 9.42707C9.12626 9.28007 9.16961 9.17507 9.25768 9.00707C9.34439 8.83975 9.30103 8.69207 9.23532 8.56675C9.16961 8.44007 8.648 7.20175 8.42919 6.69842C8.21784 6.20797 8.00242 6.27368 7.84187 6.26555C7.68945 6.25878 7.51603 6.25675 7.34058 6.25675C7.16784 6.25675 6.884 6.31975 6.64419 6.57175C6.40506 6.82375 5.72968 7.43207 5.72968 8.67039C5.72968 9.90939 6.66587 11.1057 6.79661 11.2737C6.92735 11.441 8.63919 13.9834 11.2601 15.074C11.8834 15.3321 12.3697 15.4873 12.7498 15.6038C13.3757 15.7955 13.9454 15.7677 14.3952 15.7034C14.8965 15.6309 15.9411 15.095 16.1579 14.5077C16.376 13.9204 16.376 13.4164 16.311 13.3114C16.2473 13.2064 16.0725 13.1434 15.811 13.0167Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              8447203393
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM10 8.45L18.5 2.875V1.5L10 6.95L1.5 1.5V2.875L10 8.45Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              info@gaztron.in
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00222 9.75C8.48407 9.75 8.89583 9.57843 9.2375 9.23528C9.57917 8.89214 9.75 8.47964 9.75 7.99778C9.75 7.51593 9.57843 7.10417 9.23528 6.7625C8.89214 6.42083 8.47964 6.25 7.99778 6.25C7.51593 6.25 7.10417 6.42158 6.7625 6.76472C6.42083 7.10786 6.25 7.52036 6.25 8.00222C6.25 8.48407 6.42158 8.89583 6.76472 9.2375C7.10786 9.57917 7.52036 9.75 8.00222 9.75ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 w-40 flex-wrap" +
                dm_sans.className
              }
            >
              Industrial Plot No. - 179, Udyog Kendra - I, Ecotech- III, Greater
              Noida -201318
            </div>
          </div>
        </div>
        <div className="flex flex-col px-12">
          <div
            className={
              "flex border-b-2 font-bold text-lg text-white pb-2 " +
              dm_sans.className
            }
          >
            Manufacturing Unit 2
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 18C14.8417 18 12.8208 17.5 10.8125 16.5C8.80417 15.5 7 14.2 5.4 12.6C3.8 11 2.5 9.19583 1.5 7.1875C0.5 5.17917 0 3.15833 0 1.125C0 0.808333 0.108333 0.541667 0.325 0.325C0.541667 0.108333 0.808333 0 1.125 0H4.625C4.85833 0 5.0625 0.0791667 5.2375 0.2375C5.4125 0.395833 5.525 0.608333 5.575 0.875L6.25 4.025C6.28333 4.25833 6.27917 4.47083 6.2375 4.6625C6.19583 4.85417 6.10833 5.01667 5.975 5.15L3.475 7.675C4.40833 9.225 5.45417 10.575 6.6125 11.725C7.77083 12.875 9.08333 13.85 10.55 14.65L12.925 12.2C13.0917 12.0167 13.2833 11.8875 13.5 11.8125C13.7167 11.7375 13.9333 11.725 14.15 11.775L17.125 12.425C17.375 12.475 17.5833 12.6 17.75 12.8C17.9167 13 18 13.2333 18 13.5V16.875C18 17.1917 17.8917 17.4583 17.675 17.675C17.4583 17.8917 17.1917 18 16.875 18Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              +91-8447203393
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.044 0.838745C5.28055 0.838745 0.590097 5.35645 0.588065 10.9086C0.58671 12.6841 1.06903 14.4169 1.98355 15.9432L0.5 21.1613L6.04332 19.7611C7.58528 20.5677 9.29979 20.9884 11.04 20.9872H11.044C16.8075 20.9872 21.498 16.4688 21.5 10.9167C21.5014 8.22736 20.4148 5.69584 18.4401 3.79297C16.4661 1.88942 13.8411 0.839423 11.044 0.838745ZM11.044 19.2862H11.0406C9.48123 19.2862 7.95161 18.8825 6.6171 18.1197L6.29871 17.9382L3.01052 18.7687L3.88845 15.6796L3.68184 15.3633C2.814 14.0397 2.35202 12.4913 2.35274 10.9086C2.35477 6.29332 6.254 2.53975 11.0474 2.53975C13.3683 2.54042 15.5502 3.41226 17.1916 4.99404C18.833 6.57581 19.736 8.6792 19.7346 10.916C19.7326 15.5313 15.8347 19.2862 11.044 19.2862ZM15.811 13.0167C15.5495 12.8914 14.2652 12.2824 14.0254 12.1977C13.7862 12.1144 13.6121 12.071 13.438 12.323C13.2646 12.575 12.7633 13.142 12.6116 13.3094C12.4585 13.4774 12.3061 13.4977 12.0446 13.3724C11.7831 13.2464 10.9411 12.9808 9.9439 12.1232C9.1669 11.4566 8.64258 10.6329 8.49016 10.3802C8.33774 10.1289 8.4739 9.99271 8.60464 9.86739C8.72184 9.75562 8.86613 9.57407 8.99619 9.42707C9.12626 9.28007 9.16961 9.17507 9.25768 9.00707C9.34439 8.83975 9.30103 8.69207 9.23532 8.56675C9.16961 8.44007 8.648 7.20175 8.42919 6.69842C8.21784 6.20797 8.00242 6.27368 7.84187 6.26555C7.68945 6.25878 7.51603 6.25675 7.34058 6.25675C7.16784 6.25675 6.884 6.31975 6.64419 6.57175C6.40506 6.82375 5.72968 7.43207 5.72968 8.67039C5.72968 9.90939 6.66587 11.1057 6.79661 11.2737C6.92735 11.441 8.63919 13.9834 11.2601 15.074C11.8834 15.3321 12.3697 15.4873 12.7498 15.6038C13.3757 15.7955 13.9454 15.7677 14.3952 15.7034C14.8965 15.6309 15.9411 15.095 16.1579 14.5077C16.376 13.9204 16.376 13.4164 16.311 13.3114C16.2473 13.2064 16.0725 13.1434 15.811 13.0167Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              8447203393
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM10 8.45L18.5 2.875V1.5L10 6.95L1.5 1.5V2.875L10 8.45Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              info@gaztron.in
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00222 9.75C8.48407 9.75 8.89583 9.57843 9.2375 9.23528C9.57917 8.89214 9.75 8.47964 9.75 7.99778C9.75 7.51593 9.57843 7.10417 9.23528 6.7625C8.89214 6.42083 8.47964 6.25 7.99778 6.25C7.51593 6.25 7.10417 6.42158 6.7625 6.76472C6.42083 7.10786 6.25 7.52036 6.25 8.00222C6.25 8.48407 6.42158 8.89583 6.76472 9.2375C7.10786 9.57917 7.52036 9.75 8.00222 9.75ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 w-40 flex-wrap" +
                dm_sans.className
              }
            >
              Industrial Plot No. - 179, Udyog Kendra - I, Ecotech- III, Greater
              Noida -201318
            </div>
          </div>
        </div>
        <div className="flex flex-col px-12">
          <div
            className={
              "flex border-b-2 font-bold text-lg text-white pb-2 " +
              dm_sans.className
            }
          >
            Manufacturing Unit 3
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 18C14.8417 18 12.8208 17.5 10.8125 16.5C8.80417 15.5 7 14.2 5.4 12.6C3.8 11 2.5 9.19583 1.5 7.1875C0.5 5.17917 0 3.15833 0 1.125C0 0.808333 0.108333 0.541667 0.325 0.325C0.541667 0.108333 0.808333 0 1.125 0H4.625C4.85833 0 5.0625 0.0791667 5.2375 0.2375C5.4125 0.395833 5.525 0.608333 5.575 0.875L6.25 4.025C6.28333 4.25833 6.27917 4.47083 6.2375 4.6625C6.19583 4.85417 6.10833 5.01667 5.975 5.15L3.475 7.675C4.40833 9.225 5.45417 10.575 6.6125 11.725C7.77083 12.875 9.08333 13.85 10.55 14.65L12.925 12.2C13.0917 12.0167 13.2833 11.8875 13.5 11.8125C13.7167 11.7375 13.9333 11.725 14.15 11.775L17.125 12.425C17.375 12.475 17.5833 12.6 17.75 12.8C17.9167 13 18 13.2333 18 13.5V16.875C18 17.1917 17.8917 17.4583 17.675 17.675C17.4583 17.8917 17.1917 18 16.875 18Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              +91-8447203393
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.044 0.838745C5.28055 0.838745 0.590097 5.35645 0.588065 10.9086C0.58671 12.6841 1.06903 14.4169 1.98355 15.9432L0.5 21.1613L6.04332 19.7611C7.58528 20.5677 9.29979 20.9884 11.04 20.9872H11.044C16.8075 20.9872 21.498 16.4688 21.5 10.9167C21.5014 8.22736 20.4148 5.69584 18.4401 3.79297C16.4661 1.88942 13.8411 0.839423 11.044 0.838745ZM11.044 19.2862H11.0406C9.48123 19.2862 7.95161 18.8825 6.6171 18.1197L6.29871 17.9382L3.01052 18.7687L3.88845 15.6796L3.68184 15.3633C2.814 14.0397 2.35202 12.4913 2.35274 10.9086C2.35477 6.29332 6.254 2.53975 11.0474 2.53975C13.3683 2.54042 15.5502 3.41226 17.1916 4.99404C18.833 6.57581 19.736 8.6792 19.7346 10.916C19.7326 15.5313 15.8347 19.2862 11.044 19.2862ZM15.811 13.0167C15.5495 12.8914 14.2652 12.2824 14.0254 12.1977C13.7862 12.1144 13.6121 12.071 13.438 12.323C13.2646 12.575 12.7633 13.142 12.6116 13.3094C12.4585 13.4774 12.3061 13.4977 12.0446 13.3724C11.7831 13.2464 10.9411 12.9808 9.9439 12.1232C9.1669 11.4566 8.64258 10.6329 8.49016 10.3802C8.33774 10.1289 8.4739 9.99271 8.60464 9.86739C8.72184 9.75562 8.86613 9.57407 8.99619 9.42707C9.12626 9.28007 9.16961 9.17507 9.25768 9.00707C9.34439 8.83975 9.30103 8.69207 9.23532 8.56675C9.16961 8.44007 8.648 7.20175 8.42919 6.69842C8.21784 6.20797 8.00242 6.27368 7.84187 6.26555C7.68945 6.25878 7.51603 6.25675 7.34058 6.25675C7.16784 6.25675 6.884 6.31975 6.64419 6.57175C6.40506 6.82375 5.72968 7.43207 5.72968 8.67039C5.72968 9.90939 6.66587 11.1057 6.79661 11.2737C6.92735 11.441 8.63919 13.9834 11.2601 15.074C11.8834 15.3321 12.3697 15.4873 12.7498 15.6038C13.3757 15.7955 13.9454 15.7677 14.3952 15.7034C14.8965 15.6309 15.9411 15.095 16.1579 14.5077C16.376 13.9204 16.376 13.4164 16.311 13.3114C16.2473 13.2064 16.0725 13.1434 15.811 13.0167Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              8447203393
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM10 8.45L18.5 2.875V1.5L10 6.95L1.5 1.5V2.875L10 8.45Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 " +
                dm_sans.className
              }
            >
              info@gaztron.in
            </div>
          </div>
          <div className="flex">
            <div className="flex w-9 h-9 rounded-full bg-white place-content-center mr-5 mt-3">
              <div className="flex place-self-center">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00222 9.75C8.48407 9.75 8.89583 9.57843 9.2375 9.23528C9.57917 8.89214 9.75 8.47964 9.75 7.99778C9.75 7.51593 9.57843 7.10417 9.23528 6.7625C8.89214 6.42083 8.47964 6.25 7.99778 6.25C7.51593 6.25 7.10417 6.42158 6.7625 6.76472C6.42083 7.10786 6.25 7.52036 6.25 8.00222C6.25 8.48407 6.42158 8.89583 6.76472 9.2375C7.10786 9.57917 7.52036 9.75 8.00222 9.75ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div
              className={
                "flex font-normal text-base text-white pt-4 w-40 flex-wrap" +
                dm_sans.className
              }
            >
              Industrial Plot No. - 179, Udyog Kendra - I, Ecotech- III, Greater
              Noida -201318
            </div>
          </div>
        </div>

        {/* <div className="flex">Products</div>
        <div className="flex">Products</div>
        <div className="flex">Products</div>
        <div className="flex">Products</div>
        <div className="flex">Products</div> */}
      </div>
    </div>
  );
}
