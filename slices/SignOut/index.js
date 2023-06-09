import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SignOutSlice} SignOutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SignOutSlice>} SignOutProps
 * @param { SignOutProps }
 */
const SignOut = ({ slice }) => ( 
  <div>
  <div class="max-w-2xl mx-auto">
  
      <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="default-modal">
      Toggle modal
      </button>

      
      <div id="default-modal" data-modal-show="true" aria-hidden="true" class="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
          <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
              
              <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                  
                  <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                      <span class="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                        {
                          slice.primary.title ?
                          <PrismicRichText field={slice.primary.title}/>
                          : <h2>Template slice, update me!</h2>
                        }
                      </span>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                      </button>
                  </div>
                  
                  <div class="p-6 space-y-6">
                  {
                    slice.primary.description ?
                    <PrismicRichText field={slice.primary.description}/>
                    : <p>start by editing this slice from inside Slice Machine!</p>
                  }
                  </div> 
                  <div class="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</button>
                      <button data-modal-toggle="default-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
                  </div>
              </div>
          </div>
      </div>

      <p class="mt-5">  </p>
  </div>

<script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>

</div>
)

export default SignOut