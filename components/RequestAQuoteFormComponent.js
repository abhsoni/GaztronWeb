"use client";
import React from "react";
import "flowbite";
import { useState } from "react";
import { dm_sans } from "../app/fonts";

export default function RequestAQuoteFormComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  function handleOptionClick(dropdownOptionID) {
    // setIsOpen(!isOpen);
    console.log("Clicked option ID:", dropdownOptionID);
  }
  return (
    <div className="flex flex-col">
      <div
        className={
          "flex font-medium text-[#556AD9] text-xl pt-12 " + dm_sans.className
        }
      >
        I would like to discuss:
      </div>
      <div className="flex pt-3">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="relative w-full text-[#727272] text-lg font-medium bg-white border border-gray-300 hover:bg-[#354ED2] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          PSA Nitrogen Generator
          <svg
            class="w-4 h-4 ml-2 absolute top-4 right-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                id="option-1"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                PSA Oxygen Generator
              </a>
            </li>
            <li>
              <a
                id="option-2"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cryogenic Gas plants
              </a>
            </li>
            <li>
              <a
                id="option-3"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Ammonia Cracker
              </a>
            </li>
            <li>
              <a
                id="option-4"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Air dryers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-5">
        <input
          type="text"
          id="default-input"
          placeholder="Full Name"
          required
          class="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mt-5">
        <input
          type="text"
          id="default-input"
          placeholder="Email Address"
          required
          class="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mt-5">
        <input
          type="text"
          id="default-input"
          placeholder="Phone Number"
          required
          class="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mt-5 mb-9">
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-lg text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div className="flex justify-center mb-12">
        <button class="bg-[#354ED2] hover:bg-blue-700 text-white text-2xl font-bold py-3 px-6 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
