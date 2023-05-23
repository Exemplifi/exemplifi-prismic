import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.NotificationSlice} NotificationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NotificationSlice>} NotificationProps
 * @param { NotificationProps }
 */
const Notification = ({ slice }) => (
  <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
    <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
      <div class="w-full">
        <div class="m-8 my-20 max-w-[400px] mx-auto">
          <div class="mb-8">
            {slice.primary.title ? (
              <span class="mb-4 text-3xl font-extrabold">
                <PrismicRichText field={slice.primary.title} />
              </span>
            ) : (
              <h2 class="mb-4 text-3xl font-extrabold">
                Template slice, update me!
              </h2>
            )}
            {slice.primary.description ? (
              <span class="text-gray-600">
                <PrismicRichText field={slice.primary.description} />
              </span>
            ) : (
              <p class="text-gray-600">
                start by editing this slice from inside Slice Machine!
              </p>
            )}
          </div>
          <div class="space-y-4">
            <span class="p-3 bg-black rounded-full text-white w-full font-semibold">
              <PrismicLink field={slice.primary.button}>My Link</PrismicLink>
            </span>
            <span class="p-3 bg-white border rounded-full w-full font-semibold">
              <PrismicLink field={slice.primary.return}>My Link</PrismicLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Notification;
