<template>
  <div
    class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Locavi"
        title="Locavi"
        class="inline-flex items-center"
      >
        <svg
          class="w-8 text-orange-accent-400"
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span
          class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
          >LOCAVI</span
        >
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
           <a
             href="/publish"
             aria-label="Publier"
             title="Publier"
             class="font-medium tracking-wide text-gray-700 transition-colors duration-200 group-hover:text-orange-accent-400"
             >
             <div class="flex group mt-1 cursor-pointer">
             <div class="flex items-center justify-center rounded-full text-gray-700 transition-colors duration-200 group-hover:text-orange-accent-400 w-7 h-7 px-1 mx-1 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
             </div>
             <span class="font-medium tracking-wide text-gray-700 transition-colors duration-200 group-hover:text-orange-accent-400">Publier</span>
            </div>
           </a>
        </li>
        <li>
          <a
            href="/explore"
            aria-label="Explorer"
            title="Explorer"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-accent-400"
            >Explorer</a
          >
        </li>
        <li>
          <a
            href="/blog"
            aria-label="Blog"
            title="Blog"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-accent-400"
            >Blog</a
          >
        </li>
        <li>
          <a
            href="/"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            Connexion
          </a>
        </li>
      </ul>
      <div class="lg:hidden z-10">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-orange-50 focus:bg-orange-50"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center"
                >
                  <svg
                    class="w-8 text-orange-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                  </svg>
                  <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >LOCAVI</span
                  >
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <a
                    href="/publish"
                    aria-label="Publier"
                    title="Publier"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-accent-400"
                    >Publier</a
                  >
                </li>
                <li>
                  <a
                    href="/explore"
                    aria-label="Explorer"
                    title="Explorer"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-accent-400"
                    >Explorer</a
                  >
                </li>
                <li>
                  <a
                    href="/blog"
                    aria-label="Blog"
                    title="Blog"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-accent-400"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-accent-400 hover:bg-orange-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Connexion
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
