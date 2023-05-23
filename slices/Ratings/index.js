import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.RatingsSlice} RatingsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RatingsSlice>} RatingsProps
 * @param { RatingsProps }
 */
const Ratings = ({ slice }) => (
  <section class="bg-white p-5 m-3 rounded">
    <h4 class="text-xl">Rating Score</h4>
    <div class="flex flex-col lg:flex-row items-center gap-5 mt-5">
      <div class="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-green-400 w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div class="text-center">
          <h2 class="text-4xl font-bold pb-2">
            {slice.primary.satisfied_percent}
          </h2>
          <h4 class="inline text-gray-500 text-md">
            {slice.primary.satisfied_text}
          </h4>
        </div>
      </div>
      <div class="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-gray-400 w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a25.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div class="text-center">
          <h2 class="text-4xl font-bold pb-2">
            {slice.primary.neutral_percent}
          </h2>
          <h4 class="inline text-gray-500 text-md">
            {slice.primary.neutral_text}
          </h4>
        </div>
      </div>
      <div class="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-red-300 w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div class="text-center">
          <h2 class="text-4xl font-bold pb-2">
            {slice.primary.unsatisfied_percent}
          </h2>
          <h4 class="inline text-gray-500 text-md">
            {slice.primary.unsatisfied_text}
          </h4>
        </div>
      </div>
    </div>
  </section>
);

export default Ratings;
