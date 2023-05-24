import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSlice} TestimonialSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSlice>} TestimonialProps
 * @param { TestimonialProps }
 */
const Testimonial = ({ slice }) => (
  <section>
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img
          class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        ></img>
      </div>
      <div>
        <span className="text-gray-800 text-3xl font-semibold">
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>

        <p class="mt-2 text-gray-600">
          {slice.primary.description ? (
            <PrismicRichText field={slice.primary.description} />
          ) : (
            <p>start by editing this slice from inside Slice Machine!</p>
          )}
        </p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-indigo-500">
          {slice.primary.author_name}
        </a>
      </div>
    </div>
  </section>
);

export default Testimonial;
