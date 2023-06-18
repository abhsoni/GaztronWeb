"use client";
import React from "react";
import { dm_sans } from "@/app/fonts";
import { useState } from "react";

export default function FAQQuestionComponent() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleAnswer = (index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };
  return (
    <div className="faq-section py-12 ">
      <div
        className="question rounded-xl bg-white px-5 py-3 relative "
        onClick={() => toggleAnswer(1)}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div
          className={`flex top-6 right-7 absolute ${
            expandedIndexes.includes(1) ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.714021 1.70999L3.30002 4.29999C3.48738 4.48624 3.74083 4.59078 4.00502 4.59078C4.26921 4.59078 4.52266 4.48624 4.71002 4.29999L7.30002 1.70999C7.44105 1.57012 7.53723 1.39141 7.5763 1.19667C7.61537 1.00192 7.59556 0.799949 7.51939 0.616505C7.44322 0.433061 7.31415 0.276455 7.14863 0.166654C6.98311 0.056853 6.78865 -0.0011687 6.59002 -1.36006e-05H1.41402C1.21625 0.000815631 1.02316 0.0602706 0.859178 0.170833C0.695195 0.281396 0.567678 0.438102 0.492753 0.621134C0.417827 0.804167 0.398857 1.00531 0.438243 1.19912C0.477628 1.39293 0.573599 1.57072 0.714021 1.70999Z"
              fill="#272522"
            />
          </svg>
        </div>
        <h3
          className={
            "question-title text-xl text-black pr-5 font-medium " +
            dm_sans.className
          }
        >
          How do we obtain a quotation?
        </h3>

        <div
          className={
            `text-black answer ${expandedIndexes.includes(1) ? "" : "hidden"}` +
            " " +
            dm_sans.className
          }
        >
          <p>
            Drop us an email with your inquiry at info@gaztron.in, and
            we&apos;ll send you a quote.
          </p>
        </div>
      </div>
      <div
        className="question rounded-xl bg-white px-5 py-3 mt-5 relative"
        onClick={() => toggleAnswer(2)}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div
          className={`flex top-6 right-7 absolute ${
            expandedIndexes.includes(2) ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.714021 1.70999L3.30002 4.29999C3.48738 4.48624 3.74083 4.59078 4.00502 4.59078C4.26921 4.59078 4.52266 4.48624 4.71002 4.29999L7.30002 1.70999C7.44105 1.57012 7.53723 1.39141 7.5763 1.19667C7.61537 1.00192 7.59556 0.799949 7.51939 0.616505C7.44322 0.433061 7.31415 0.276455 7.14863 0.166654C6.98311 0.056853 6.78865 -0.0011687 6.59002 -1.36006e-05H1.41402C1.21625 0.000815631 1.02316 0.0602706 0.859178 0.170833C0.695195 0.281396 0.567678 0.438102 0.492753 0.621134C0.417827 0.804167 0.398857 1.00531 0.438243 1.19912C0.477628 1.39293 0.573599 1.57072 0.714021 1.70999Z"
              fill="#272522"
            />
          </svg>
        </div>
        <h3
          className={
            "question-title text-xl text-black pr-5 font-medium " +
            dm_sans.className
          }
        >
          How do we obtain a quotation?
        </h3>
        <div
          className={
            `text-black answer ${expandedIndexes.includes(2) ? "" : "hidden"}` +
            " " +
            dm_sans.className
          }
        >
          <p>
            Drop us an email with your inquiry at info@gaztron.in, and
            we&apos;ll send you a quote.
          </p>
        </div>
      </div>
      <div
        className="question rounded-xl bg-white px-5 py-3 mt-5 relative"
        onClick={() => toggleAnswer(3)}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div
          className={`flex top-6 right-7 absolute ${
            expandedIndexes.includes(3) ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.714021 1.70999L3.30002 4.29999C3.48738 4.48624 3.74083 4.59078 4.00502 4.59078C4.26921 4.59078 4.52266 4.48624 4.71002 4.29999L7.30002 1.70999C7.44105 1.57012 7.53723 1.39141 7.5763 1.19667C7.61537 1.00192 7.59556 0.799949 7.51939 0.616505C7.44322 0.433061 7.31415 0.276455 7.14863 0.166654C6.98311 0.056853 6.78865 -0.0011687 6.59002 -1.36006e-05H1.41402C1.21625 0.000815631 1.02316 0.0602706 0.859178 0.170833C0.695195 0.281396 0.567678 0.438102 0.492753 0.621134C0.417827 0.804167 0.398857 1.00531 0.438243 1.19912C0.477628 1.39293 0.573599 1.57072 0.714021 1.70999Z"
              fill="#272522"
            />
          </svg>
        </div>
        <h3
          className={
            "question-title text-xl text-black pr-5 font-medium " +
            dm_sans.className
          }
        >
          How do we obtain a quotation?
        </h3>
        <div
          className={
            `text-black answer ${expandedIndexes.includes(3) ? "" : "hidden"}` +
            " " +
            dm_sans.className
          }
        >
          <p>
            Drop us an email with your inquiry at info@gaztron.in, and
            we&apos;ll send you a quote.
          </p>
        </div>
      </div>
      <div
        className="question rounded-xl bg-white px-5 py-3 mt-5 relative"
        onClick={() => toggleAnswer(4)}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div
          className={`flex top-6 right-7 absolute ${
            expandedIndexes.includes(4) ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.714021 1.70999L3.30002 4.29999C3.48738 4.48624 3.74083 4.59078 4.00502 4.59078C4.26921 4.59078 4.52266 4.48624 4.71002 4.29999L7.30002 1.70999C7.44105 1.57012 7.53723 1.39141 7.5763 1.19667C7.61537 1.00192 7.59556 0.799949 7.51939 0.616505C7.44322 0.433061 7.31415 0.276455 7.14863 0.166654C6.98311 0.056853 6.78865 -0.0011687 6.59002 -1.36006e-05H1.41402C1.21625 0.000815631 1.02316 0.0602706 0.859178 0.170833C0.695195 0.281396 0.567678 0.438102 0.492753 0.621134C0.417827 0.804167 0.398857 1.00531 0.438243 1.19912C0.477628 1.39293 0.573599 1.57072 0.714021 1.70999Z"
              fill="#272522"
            />
          </svg>
        </div>
        <h3
          className={
            "question-title text-xl text-black pr-5 font-medium " +
            dm_sans.className
          }
        >
          How do we obtain a quotation?
        </h3>
        <div
          className={
            `text-black answer ${expandedIndexes.includes(4) ? "" : "hidden"}` +
            " " +
            dm_sans.className
          }
        >
          <p>
            Drop us an email with your inquiry at info@gaztron.in, and
            we&apos;ll send you a quote.
          </p>
        </div>
      </div>
      <div
        className="question rounded-xl bg-white px-5 py-3 mt-5 relative"
        onClick={() => toggleAnswer(5)}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div
          className={`flex top-6 right-7 absolute ${
            expandedIndexes.includes(5) ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.714021 1.70999L3.30002 4.29999C3.48738 4.48624 3.74083 4.59078 4.00502 4.59078C4.26921 4.59078 4.52266 4.48624 4.71002 4.29999L7.30002 1.70999C7.44105 1.57012 7.53723 1.39141 7.5763 1.19667C7.61537 1.00192 7.59556 0.799949 7.51939 0.616505C7.44322 0.433061 7.31415 0.276455 7.14863 0.166654C6.98311 0.056853 6.78865 -0.0011687 6.59002 -1.36006e-05H1.41402C1.21625 0.000815631 1.02316 0.0602706 0.859178 0.170833C0.695195 0.281396 0.567678 0.438102 0.492753 0.621134C0.417827 0.804167 0.398857 1.00531 0.438243 1.19912C0.477628 1.39293 0.573599 1.57072 0.714021 1.70999Z"
              fill="#272522"
            />
          </svg>
        </div>
        <h3
          className={
            "question-title text-xl text-black pr-5 font-medium " +
            dm_sans.className
          }
        >
          How do we obtain a quotation?
        </h3>
        <div
          className={
            `text-black answer ${expandedIndexes.includes(5) ? "" : "hidden"}` +
            " " +
            dm_sans.className
          }
        >
          <p>
            Drop us an email with your inquiry at info@gaztron.in, and
            we&apos;ll send you a quote.
          </p>
        </div>
      </div>

      <div
        className="question rounded-xl bg-white px-5 py-3 mt-5 relative"
        onClick={() => toggleAnswer(6)}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div
          className={`flex top-6 right-7 absolute ${
            expandedIndexes.includes(6) ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.714021 1.70999L3.30002 4.29999C3.48738 4.48624 3.74083 4.59078 4.00502 4.59078C4.26921 4.59078 4.52266 4.48624 4.71002 4.29999L7.30002 1.70999C7.44105 1.57012 7.53723 1.39141 7.5763 1.19667C7.61537 1.00192 7.59556 0.799949 7.51939 0.616505C7.44322 0.433061 7.31415 0.276455 7.14863 0.166654C6.98311 0.056853 6.78865 -0.0011687 6.59002 -1.36006e-05H1.41402C1.21625 0.000815631 1.02316 0.0602706 0.859178 0.170833C0.695195 0.281396 0.567678 0.438102 0.492753 0.621134C0.417827 0.804167 0.398857 1.00531 0.438243 1.19912C0.477628 1.39293 0.573599 1.57072 0.714021 1.70999Z"
              fill="#272522"
            />
          </svg>
        </div>
        <h3
          className={
            "question-title text-xl text-black pr-5 font-medium " +
            dm_sans.className
          }
        >
          How do we obtain a quotation?
        </h3>
        <div
          className={
            `text-black answer ${expandedIndexes.includes(6) ? "" : "hidden"}` +
            " " +
            dm_sans.className
          }
        >
          <p>
            Drop us an email with your inquiry at info@gaztron.in, and
            we&apos;ll send you a quote.
          </p>
        </div>
      </div>

      {/* Add more question elements as needed */}
    </div>
  );
}
