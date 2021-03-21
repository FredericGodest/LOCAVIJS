<template>
 <div class="relative">
   <img src="https://images.unsplash.com/photo-1590233033196-a50b826b059b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1260&q=80" class="absolute inset-0 object-cover w-full h-full" alt="" />
   <div class="relative bg-opacity-75 bg-orange-accent-400 py-20">
    <div class="absolute inset-x-0 bottom-0">
      <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
      </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
        <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Découvrez les meilleures<br class="hidden md:block" />
          locations de votre
          <span class="relative inline-block px-2">
            <div class="absolute inset-0 transform -skew-x-12 bg-white"></div>
            <span class="relative text-orange-500">ville</span>
          </span>
        </h2>

        <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Quelle ville ?"
            required=""
            type="text"
            class="flex-grow w-full h-12 px-4 mb-3 text-gray-700 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-orange-400 transition duration-200 rounded shadow-md md:w-auto hover:text-orange-700 bg-white hover:bg-gray-50 focus:shadow-outline focus:outline-none"
          >
            Rechercher
          </a>
        </form>
        <a
          href="/"
          aria-label="Scroll down"
          class="flex items-center justify-center w-10 h-10 mx-auto my-15 text-white duration-300 transform border border-white-400 rounded-full hover:text-white hover:border-white hover:shadow hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
 </div>
</template>
