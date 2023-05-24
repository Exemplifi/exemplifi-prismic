import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SignOutSlice} SignOutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SignOutSlice>} SignOutProps
 * @param { SignOutProps }
 */
const SignOut = ({ slice }) => ( 
 
 
      <div class="min-w-screen relative flex min-h-screen flex-col items-center justify-center bg-white pt-4"
        x-data="{ open: true }">
        <div class="">
          <button class="rounded-lg bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-500 hover:bg-blue-100 hover:text-blue-600"> Show Modal </button>
        </div>
        <div x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200"
          x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
          x-description="Background backdrop, show/hide based on modal state."
          class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>


        <div class="fixed overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div x-show="open" x-transition:enter="ease-out duration-300"
              x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
              x-transition:leave="ease-in duration-200"
              x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
              x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              x-description="Modal panel, show/hide based on modal state."
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
               >
              <div class="p-4 sm:p-10 text-center overflow-y-auto"> 
                <span class="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
                          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                          </svg>
                          </span>
               
      
                <span className="mb-2 text-2xl font-bold text-gray-800">
                {
                  slice.primary.title ?
                  <PrismicRichText field={slice.primary.title}/>
                  : <h2>Template slice, update me!</h2>
                }
              </span>
                <p class="text-gray-500">
                              {
                    slice.primary.description ?
                    <PrismicRichText field={slice.primary.description}/>
                    : <p>start by editing this slice from inside Slice Machine!</p>
                  }
                </p>

                <div class="mt-6 flex justify-center gap-x-4">
                  <a class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                    href="javascript:;">
                    Sign out
                  </a>
                  <button  type="button" class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                                            Cancel
                              </button>
                </div>
              </div>
            </div>

          </div>
        </div> 
        </div>
   
)

export default SignOut