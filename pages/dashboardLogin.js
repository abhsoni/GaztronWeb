import React from "react";
import "../styles/style.css";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import googleSvg from "../public/googleIcon.svg";
import appleSvg from "../public/appleSvg.svg";
export default function DashboardLogin() {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.margin = 0 + "px";
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex basis-1/2 bg-black place-content-center" id="three">
        <div
          className="dashboardBoxText"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Board.
        </div>
      </div>
      <div
        className="flex basis-1/2 signInWhite place-content-center"
        id="four"
      >
        <div className="flex flex-col">
          <div
            className="flex pt-20 signinTextHeader"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sign In
          </div>
          <div
            style={{ fontFamily: "Lato, sans-serif" }}
            className="flex signinTextHeader2"
          >
            Sign in to your account
          </div>
          <div className="flex pt-6 pb-5">
            <button
              type="button"
              class="text-[#858585] bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <Image
                src={googleSvg}
                alt="My SVG"
                style={{ marginRight: "10px" }}
              />
              Sign in with Google
            </button>
            <button
              type="button"
              class="text-[#858585] bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-normal rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <Image
                src={appleSvg}
                alt="My SVG"
                style={{ marginRight: "10px" }}
              />
              Sign in with Apple
            </button>
          </div>
          <div className="flex flex-col bg-white p-4 rounded-lg">
            <div className="mb-4">
              <label
                for="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div style={{ color: "#346BD5", paddingBottom: "12px" }}>
              Forgot password?
            </div>
            <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Sign In
            </button>
            <div style={{ textAlign: "center" }} className="pt-4">
              Don’t have an account? <a className="">Register here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
