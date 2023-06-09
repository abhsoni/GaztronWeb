"use client";
import { useState } from "react";
import Link from "next/link";
import callSVG from "../public/callSvg.svg";
import whatsAppSVG from "../public/whatsApp.svg";
import Image from "next/image";
import { poppins } from "@/app/fonts";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div class="navbarBlueTop fixed flex justify-between items-center px-6 z-20">
        <div
          className="flex text-base font-medium text-white mobile:hidden"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div className="flex flex-inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
              <path
                fillRule="evenodd"
                d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-inline">+91-8447203393</div>
        </div>
        <div
          className="text-base font-medium text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Get in touch with us. 🎉
        </div>
        <div
          className="flex text-base font-medium text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div className="flex flex-inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <div className="flex flex-inline">info@gaztron.in</div>
        </div>
      </div>

      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-10 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-row">
          <div className="flex order-1">
            <a href="https://flowbite.com/" class="flex items-center">
              <svg
                width="121"
                height="42"
                viewBox="0 0 121 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.9411 20.0002H46.3927L49.7986 41.0002H46.5122L45.9147 36.8302V36.8902H42.1801L41.5826 41.0002H38.5352L41.9411 20.0002ZM45.5263 34.0402L44.0623 23.6602H44.0026L42.5685 34.0402H45.5263ZM53.2425 38.0602L59.3374 23.0002H53.5413V20.0002H62.8628V22.9402L56.768 38.0002H62.8628V41.0002H53.2425V38.0602ZM69.6838 23.0002H66.248V20.0002H76.406V23.0002H72.9702V41.0002H69.6838V23.0002ZM80.3872 20.0002H85.2571C86.9501 20.0002 88.185 20.4002 88.9618 21.2002C89.7386 21.9802 90.127 23.1902 90.127 24.8302V26.1202C90.127 28.3002 89.4099 29.6802 87.9759 30.2602V30.3202C88.7726 30.5602 89.3303 31.0502 89.6489 31.7902C89.9875 32.5302 90.1568 33.5202 90.1568 34.7602V38.4502C90.1568 39.0502 90.1768 39.5402 90.2166 39.9202C90.2564 40.2802 90.356 40.6402 90.5154 41.0002H87.1692C87.0497 40.6602 86.97 40.3402 86.9302 40.0402C86.8903 39.7402 86.8704 39.2002 86.8704 38.4202V34.5802C86.8704 33.6202 86.7111 32.9502 86.3924 32.5702C86.0936 32.1902 85.5658 32.0002 84.8089 32.0002H83.6736V41.0002H80.3872V20.0002ZM84.8687 29.0002C85.526 29.0002 86.014 28.8302 86.3327 28.4902C86.6713 28.1502 86.8406 27.5802 86.8406 26.7802V25.1602C86.8406 24.4002 86.7011 23.8502 86.4223 23.5102C86.1633 23.1702 85.7451 23.0002 85.1675 23.0002H83.6736V29.0002H84.8687ZM99.5776 41.3002C97.9643 41.3002 96.7294 40.8402 95.8729 39.9202C95.0164 39.0002 94.5882 37.7002 94.5882 36.0202V24.9802C94.5882 23.3002 95.0164 22.0002 95.8729 21.0802C96.7294 20.1602 97.9643 19.7002 99.5776 19.7002C101.191 19.7002 102.426 20.1602 103.282 21.0802C104.139 22.0002 104.567 23.3002 104.567 24.9802V36.0202C104.567 37.7002 104.139 39.0002 103.282 39.9202C102.426 40.8402 101.191 41.3002 99.5776 41.3002ZM99.5776 38.3002C100.713 38.3002 101.281 37.6102 101.281 36.2302V24.7702C101.281 23.3902 100.713 22.7002 99.5776 22.7002C98.4423 22.7002 97.8746 23.3902 97.8746 24.7702V36.2302C97.8746 37.6102 98.4423 38.3002 99.5776 38.3002ZM109.18 20.0002H113.303L116.499 32.5702H116.559V20.0002H119.487V41.0002H116.111L112.167 25.6702H112.107V41.0002H109.18V20.0002Z"
                  fill="#354ED2"
                />
                <path
                  d="M41.9411 19.9999V19.3332H41.3766L41.2858 19.8927L41.9411 19.9999ZM46.3927 19.9999L47.048 19.8927L46.9572 19.3332H46.3927V19.9999ZM49.7986 40.9999V41.6665H50.5794L50.4539 40.8927L49.7986 40.9999ZM46.5122 40.9999L45.8551 41.0949L45.9369 41.6665H46.5122V40.9999ZM45.9147 36.8299L46.5718 36.7349L45.2508 36.8299H45.9147ZM45.9147 36.8899V37.5565H46.5786V36.8899H45.9147ZM42.1801 36.8899V36.2232H41.606L41.5232 36.7935L42.1801 36.8899ZM41.5826 40.9999V41.6665H42.1565L42.2395 41.0962L41.5826 40.9999ZM38.5352 40.9999L37.8799 40.8927L37.7544 41.6665H38.5352V40.9999ZM45.5263 34.0399V34.7065H46.2908L46.1836 33.9464L45.5263 34.0399ZM44.0623 23.6599L44.7196 23.5664L44.6388 22.9932H44.0623V23.6599ZM44.0026 23.6599V22.9932H43.4243L43.345 23.5682L44.0026 23.6599ZM42.5685 34.0399L41.9109 33.9482L41.8062 34.7065H42.5685V34.0399ZM41.9411 20.6665H46.3927V19.3332H41.9411V20.6665ZM45.7374 20.107L49.1433 41.107L50.4539 40.8927L47.048 19.8927L45.7374 20.107ZM49.7986 40.3332H46.5122V41.6665H49.7986V40.3332ZM47.1693 40.9049L46.5718 36.7349L45.2576 36.9249L45.8551 41.0949L47.1693 40.9049ZM45.2508 36.8299V36.8899H46.5786V36.8299H45.2508ZM45.9147 36.2232H42.1801V37.5565H45.9147V36.2232ZM41.5232 36.7935L40.9256 40.9035L42.2395 41.0962L42.8371 36.9862L41.5232 36.7935ZM41.5826 40.3332H38.5352V41.6665H41.5826V40.3332ZM39.1905 41.107L42.5964 20.107L41.2858 19.8927L37.8799 40.8927L39.1905 41.107ZM46.1836 33.9464L44.7196 23.5664L43.4049 23.7534L44.8688 34.1334L46.1836 33.9464ZM44.0623 22.9932H44.0026V24.3265H44.0623V22.9932ZM43.345 23.5682L41.9109 33.9482L43.2261 34.1315L44.6602 23.7515L43.345 23.5682ZM42.5685 34.7065H45.5263V33.3732H42.5685V34.7065ZM53.2426 38.0599L52.6274 37.8089L52.5786 37.9295V38.0599H53.2426ZM59.3374 22.9999L59.9525 23.2509L60.3238 22.3332H59.3374V22.9999ZM53.5413 22.9999H52.8774V23.6665H53.5413V22.9999ZM53.5413 19.9999V19.3332H52.8774V19.9999H53.5413ZM62.8628 19.9999H63.5267V19.3332H62.8628V19.9999ZM62.8628 22.9399L63.4779 23.1909L63.5267 23.0702V22.9399H62.8628ZM56.768 37.9999L56.1529 37.7489L55.7816 38.6665H56.768V37.9999ZM62.8628 37.9999H63.5267V37.3332H62.8628V37.9999ZM62.8628 40.9999V41.6665H63.5267V40.9999H62.8628ZM53.2426 40.9999H52.5786V41.6665H53.2426V40.9999ZM53.8577 38.3109L59.9525 23.2509L58.7223 22.7489L52.6274 37.8089L53.8577 38.3109ZM59.3374 22.3332H53.5413V23.6665H59.3374V22.3332ZM54.2052 22.9999V19.9999H52.8774V22.9999H54.2052ZM53.5413 20.6665H62.8628V19.3332H53.5413V20.6665ZM62.1989 19.9999V22.9399H63.5267V19.9999H62.1989ZM62.2477 22.6889L56.1529 37.7489L57.3831 38.2509L63.4779 23.1909L62.2477 22.6889ZM56.768 38.6665H62.8628V37.3332H56.768V38.6665ZM62.1989 37.9999V40.9999H63.5267V37.9999H62.1989ZM62.8628 40.3332H53.2426V41.6665H62.8628V40.3332ZM53.9065 40.9999V38.0599H52.5786V40.9999H53.9065ZM69.6838 22.9999H70.3477V22.3332H69.6838V22.9999ZM66.248 22.9999H65.5841V23.6665H66.248V22.9999ZM66.248 19.9999V19.3332H65.5841V19.9999H66.248ZM76.406 19.9999H77.0699V19.3332H76.406V19.9999ZM76.406 22.9999V23.6665H77.0699V22.9999H76.406ZM72.9702 22.9999V22.3332H72.3063V22.9999H72.9702ZM72.9702 40.9999V41.6665H73.6341V40.9999H72.9702ZM69.6838 40.9999H69.0199V41.6665H69.6838V40.9999ZM69.6838 22.3332H66.248V23.6665H69.6838V22.3332ZM66.9119 22.9999V19.9999H65.5841V22.9999H66.9119ZM66.248 20.6665H76.406V19.3332H66.248V20.6665ZM75.7421 19.9999V22.9999H77.0699V19.9999H75.7421ZM76.406 22.3332H72.9702V23.6665H76.406V22.3332ZM72.3063 22.9999V40.9999H73.6341V22.9999H72.3063ZM72.9702 40.3332H69.6838V41.6665H72.9702V40.3332ZM70.3477 40.9999V22.9999H69.0199V40.9999H70.3477ZM80.3872 19.9999V19.3332H79.7233V19.9999H80.3872ZM88.9618 21.1999L88.4864 21.6652L88.4894 21.6684L88.4924 21.6712L88.9618 21.1999ZM87.9759 30.2599L87.7279 29.6415L87.3119 29.8097V30.2599H87.9759ZM87.9759 30.3199H87.3119V30.8159L87.7852 30.9584L87.9759 30.3199ZM89.6489 31.7899L89.0396 32.0545L89.0426 32.0614L89.0458 32.0682L89.6489 31.7899ZM90.2166 39.9199L89.5563 39.9897L89.5565 39.9915L89.5568 39.9935L90.2166 39.9199ZM90.5154 40.9999V41.6665H91.537L91.1222 40.729L90.5154 40.9999ZM87.1692 40.9999L86.5431 41.2217L86.6995 41.6665H87.1692V40.9999ZM86.3924 32.5699L85.8714 32.983L85.8779 32.9912L85.8847 32.9994L86.3924 32.5699ZM83.6736 31.9999V31.3332H83.0097V31.9999H83.6736ZM83.6736 40.9999V41.6665H84.3376V40.9999H83.6736ZM80.3872 40.9999H79.7233V41.6665H80.3872V40.9999ZM86.3327 28.4899L85.8633 28.0185L85.8561 28.0255L85.8493 28.033L86.3327 28.4899ZM86.4223 23.5099L85.895 23.9149L85.9023 23.9244L85.9099 23.9337L86.4223 23.5099ZM83.6736 22.9999V22.3332H83.0097V22.9999H83.6736ZM83.6736 28.9999H83.0097V29.6665H83.6736V28.9999ZM80.3872 20.6665H85.2571V19.3332H80.3872V20.6665ZM85.2571 20.6665C86.8633 20.6665 87.8869 21.0477 88.4864 21.6652L89.4372 20.7345C88.4833 19.752 87.0371 19.3332 85.2571 19.3332V20.6665ZM88.4924 21.6712C89.0952 22.2767 89.4631 23.2814 89.4631 24.8299H90.7909C90.7909 23.0984 90.3821 21.683 89.4314 20.7285L88.4924 21.6712ZM89.4631 24.8299V26.1199H90.7909V24.8299H89.4631ZM89.4631 26.1199C89.4631 27.143 89.2939 27.917 89.0006 28.4815C88.715 29.0312 88.2979 29.411 87.7279 29.6415L88.224 30.8782C89.0881 30.5287 89.7464 29.9285 90.1779 29.0982C90.6017 28.2827 90.7909 27.2767 90.7909 26.1199H89.4631ZM87.3119 30.2599V30.3199H88.6398V30.2599H87.3119ZM87.7852 30.9584C88.4019 31.1442 88.8018 31.5024 89.0396 32.0545L90.2584 31.5252C89.8587 30.5974 89.1432 29.9755 88.1667 29.6814L87.7852 30.9584ZM89.0458 32.0682C89.3289 32.6874 89.4929 33.5705 89.4929 34.7599H90.8208C90.8208 33.4692 90.6462 32.3724 90.2523 31.5115L89.0458 32.0682ZM89.4929 34.7599V38.4499H90.8208V34.7599H89.4929ZM89.4929 38.4499C89.4929 39.0617 89.5132 39.5774 89.5563 39.9897L90.8769 39.85C90.8405 39.5024 90.8208 39.038 90.8208 38.4499H89.4929ZM89.5568 39.9935C89.6048 40.4272 89.7241 40.8535 89.9087 41.2707L91.1222 40.729C90.9881 40.4262 90.9082 40.1325 90.8765 39.8462L89.5568 39.9935ZM90.5154 40.3332H87.1692V41.6665H90.5154V40.3332ZM87.7953 40.778C87.6882 40.4734 87.6212 40.1985 87.5883 39.9517L86.2721 40.128C86.319 40.4812 86.4112 40.8464 86.5431 41.2217L87.7953 40.778ZM87.5883 39.9517C87.5551 39.701 87.5344 39.2022 87.5344 38.4199H86.2065C86.2065 39.1975 86.2258 39.7787 86.2721 40.128L87.5883 39.9517ZM87.5344 38.4199V34.5799H86.2065V38.4199H87.5344ZM87.5344 34.5799C87.5344 33.589 87.3787 32.7109 86.9003 32.1404L85.8847 32.9994C86.0437 33.1889 86.2065 33.6507 86.2065 34.5799H87.5344ZM86.9136 32.1567C86.4309 31.543 85.6523 31.3332 84.809 31.3332V32.6665C85.4794 32.6665 85.7564 32.8367 85.8714 32.983L86.9136 32.1567ZM84.809 31.3332H83.6736V32.6665H84.809V31.3332ZM83.0097 31.9999V40.9999H84.3376V31.9999H83.0097ZM83.6736 40.3332H80.3872V41.6665H83.6736V40.3332ZM81.0511 40.9999V19.9999H79.7233V40.9999H81.0511ZM84.8687 29.6665C85.6319 29.6665 86.3273 29.4682 86.8162 28.9467L85.8493 28.033C85.7006 28.1915 85.4203 28.3332 84.8687 28.3332V29.6665ZM86.8022 28.9612C87.3262 28.435 87.5045 27.6457 87.5045 26.7799H86.1766C86.1766 27.514 86.0165 27.8647 85.8633 28.0185L86.8022 28.9612ZM87.5045 26.7799V25.1599H86.1766V26.7799H87.5045ZM87.5045 25.1599C87.5045 24.3469 87.3609 23.6055 86.9348 23.086L85.9099 23.9337C86.0415 24.0942 86.1766 24.4529 86.1766 25.1599H87.5045ZM86.9498 23.1049C86.524 22.5459 85.8731 22.3332 85.1675 22.3332V23.6665C85.6173 23.6665 85.8028 23.7939 85.895 23.9149L86.9498 23.1049ZM85.1675 22.3332H83.6736V23.6665H85.1675V22.3332ZM83.0097 22.9999V28.9999H84.3376V22.9999H83.0097ZM83.6736 29.6665H84.8687V28.3332H83.6736V29.6665ZM99.5776 40.6332C98.0924 40.6332 97.0553 40.2137 96.3579 39.4645L95.3879 40.3752C96.4034 41.466 97.8361 41.9665 99.5776 41.9665V40.6332ZM96.3579 39.4645C95.6505 38.7047 95.2521 37.5885 95.2521 36.0199H93.9243C93.9243 37.8112 94.3824 39.295 95.3879 40.3752L96.3579 39.4645ZM95.2521 36.0199V24.9799H93.9243V36.0199H95.2521ZM95.2521 24.9799C95.2521 23.4112 95.6505 22.295 96.3579 21.5352L95.3879 20.6245C94.3824 21.7047 93.9243 23.1885 93.9243 24.9799H95.2521ZM96.3579 21.5352C97.0553 20.786 98.0924 20.3665 99.5776 20.3665V19.0332C97.8361 19.0332 96.4034 19.5337 95.3879 20.6245L96.3579 21.5352ZM99.5776 20.3665C101.063 20.3665 102.1 20.786 102.797 21.5352L103.767 20.6245C102.752 19.5337 101.319 19.0332 99.5776 19.0332V20.3665ZM102.797 21.5352C103.505 22.295 103.903 23.4112 103.903 24.9799H105.231C105.231 23.1885 104.773 21.7047 103.767 20.6245L102.797 21.5352ZM103.903 24.9799V36.0199H105.231V24.9799H103.903ZM103.903 36.0199C103.903 37.5885 103.505 38.7047 102.797 39.4645L103.767 40.3752C104.773 39.295 105.231 37.8112 105.231 36.0199H103.903ZM102.797 39.4645C102.1 40.2137 101.063 40.6332 99.5776 40.6332V41.9665C101.319 41.9665 102.752 41.466 103.767 40.3752L102.797 39.4645ZM99.5776 38.9665C100.284 38.9665 100.924 38.7455 101.367 38.207C101.79 37.6927 101.944 36.9949 101.944 36.2299H100.617C100.617 36.8449 100.487 37.182 100.343 37.3577C100.218 37.5092 100.006 37.6332 99.5776 37.6332V38.9665ZM101.944 36.2299V24.7699H100.617V36.2299H101.944ZM101.944 24.7699C101.944 24.0049 101.79 23.307 101.367 22.7927C100.924 22.2542 100.284 22.0332 99.5776 22.0332V23.3665C100.006 23.3665 100.218 23.4905 100.343 23.642C100.487 23.8177 100.617 24.1549 100.617 24.7699H101.944ZM99.5776 22.0332C98.8707 22.0332 98.2317 22.2542 97.7885 22.7927C97.3654 23.307 97.2107 24.0049 97.2107 24.7699H98.5385C98.5385 24.1549 98.6677 23.8177 98.8122 23.642C98.9367 23.4905 99.1492 23.3665 99.5776 23.3665V22.0332ZM97.2107 24.7699V36.2299H98.5385V24.7699H97.2107ZM97.2107 36.2299C97.2107 36.9949 97.3654 37.6927 97.7885 38.207C98.2317 38.7455 98.8707 38.9665 99.5776 38.9665V37.6332C99.1492 37.6332 98.9367 37.5092 98.8122 37.3577C98.6677 37.182 98.5385 36.8449 98.5385 36.2299H97.2107ZM109.18 19.9999V19.3332H108.516V19.9999H109.18ZM113.303 19.9999L113.946 19.8349L113.818 19.3332H113.303V19.9999ZM116.499 32.5699L115.856 32.7349L115.984 33.2365H116.499V32.5699ZM116.559 32.5699V33.2365H117.223V32.5699H116.559ZM116.559 19.9999V19.3332H115.895V19.9999H116.559ZM119.487 19.9999H120.151V19.3332H119.487V19.9999ZM119.487 40.9999V41.6665H120.151V40.9999H119.487ZM116.111 40.9999L115.468 41.1665L115.597 41.6665H116.111V40.9999ZM112.167 25.6699L112.81 25.5032L112.681 25.0032H112.167V25.6699ZM112.107 25.6699V25.0032H111.444V25.6699H112.107ZM112.107 40.9999V41.6665H112.771V40.9999H112.107ZM109.18 40.9999H108.516V41.6665H109.18V40.9999ZM109.18 20.6665H113.303V19.3332H109.18V20.6665ZM112.659 20.1649L115.856 32.7349L117.143 32.4049L113.946 19.8349L112.659 20.1649ZM116.499 33.2365H116.559V31.9032H116.499V33.2365ZM117.223 32.5699V19.9999H115.895V32.5699H117.223ZM116.559 20.6665H119.487V19.3332H116.559V20.6665ZM118.823 19.9999V40.9999H120.151V19.9999H118.823ZM119.487 40.3332H116.111V41.6665H119.487V40.3332ZM116.754 40.8332L112.81 25.5032L111.524 25.8365L115.468 41.1665L116.754 40.8332ZM112.167 25.0032H112.107V26.3365H112.167V25.0032ZM111.444 25.6699V40.9999H112.771V25.6699H111.444ZM112.107 40.3332H109.18V41.6665H112.107V40.3332ZM109.843 40.9999V19.9999H108.516V40.9999H109.843Z"
                  fill="#354ED2"
                />
                <path
                  d="M21.1637 28.3333V21.6667H35.687V36.6667C33.6123 38.3333 27.8029 41.6667 21.1637 41.6667C-6.63809 41.6667 -7.468 1.25 21.1637 1.25V17.0833C3.73571 18.75 8.71513 39.1667 21.1637 39.1667C29.8777 39.1667 33.1973 32.0833 29.4627 28.3333C26.4751 25.3333 22.6853 27.0833 21.1637 28.3333Z"
                  fill="#354ED2"
                />
                <path
                  d="M29.4628 6.66667C21.9937 9.58333 24.8983 17.9167 29.8778 20C29.3245 17.5 29.2138 12.1667 33.1974 10.8333C38.1768 9.16667 44.4011 6.66667 43.9861 0C40.2516 4.16667 36.9319 3.75 29.4628 6.66667Z"
                  fill="#354ED2"
                />
              </svg>
            </a>
          </div>

          <div
            className="flex order-2 content-center grow justify-around lg:mx-20 navbarDisplayCss"
            style={{ listStyleType: "none" }}
          >
            <li
              className={"text-black text-lg font-medium " + poppins.className}
            >
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-trigger="hover"
                class={
                  "flex items-center text-black text-lg font-medium md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent " +
                  poppins.className
                }
              >
                About{" "}
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-gray border-b"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-gray border-b"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-gray border-b"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-trigger="hover"
                class={
                  "flex items-center text-black text-lg font-medium md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent " +
                  poppins.className
                }
              >
                Nitrogen Plant{" "}
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-trigger="hover"
                class={
                  "flex items-center text-black text-lg font-medium md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent " +
                  poppins.className
                }
              >
                Oxygen Plant{" "}
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-trigger="hover"
                class={
                  "flex items-center text-black text-lg font-medium md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent " +
                  poppins.className
                }
              >
                Hydrogen Plant{" "}
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li
              className={"text-black text-lg font-medium " + poppins.className}
            >
              <Link href="/">Contact</Link>
            </li>
            <li
              className={"text-black text-lg font-medium " + poppins.className}
            >
              <Link href="/">Careers</Link>
            </li>
          </div>
          <div class="flex order-3">
            <button
              type="button"
              class="text-black text-lg border-[#0030FF] border-2 bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get In Touch
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg desktop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Nitrogen Plant
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Oxygen Plant
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Hydrogen Plant
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex- col ">
        <div className="flex fixed bottom-24 right-6">
          <Image src={whatsAppSVG} alt="svg" />
        </div>
        <div className="flex fixed bottom-6 right-6">
          <Image src={callSVG} alt="svg" />
        </div>
      </div>
    </div>
  );
}
