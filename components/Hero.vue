<template>
 <div class="relative">
   <img src="https://images.unsplash.com/photo-1590233033196-a50b826b059b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1260&q=80" class="absolute inset-0 object-cover w-full h-full" alt="" />
   <div class="relative bg-opacity-75 bg-orange-accent-700">
     <svg class="absolute inset-x-0 -bottom-1 text-white" viewBox="0 0 1160 163">
       <path
         fill="currentColor"
         d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
       ></path>
     </svg>
     <div class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div class="flex flex-col items-center justify-between xl:flex-row">
         <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
           <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
             Découvrez les avis des <br class="hidden md:block" />
             locations de votre ville !
           </h2>
           <p class="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
           </p>
           <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
             En savoir plus
             <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
             </svg>
           </a>
         </div>
         <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
           <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
             <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
               Connectez-vous
             </h3>
             <form>
               <div class="mb-1 sm:mb-2">
                 <label for="email" class="inline-block mb-1 font-medium">E-mail</label>
                 <input
                   placeholder="john.doe@example.org"
                   required=""
                   type="text"
                   class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                   id="email"
                   name="email"
                 />
               </div>
               <div class="mb-1 sm:mb-2">
                 <label for="firstName" class="inline-block mb-1 font-medium">Mot de passe</label>
                 <input
                   placeholder="Mot de passe"
                   required=""
                   type="password"
                   class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                   id="firstName"
                   name="firstName"
                 />
               </div>
               <div class="mt-4 mb-2 sm:mb-4">
                 <button
                   type="submit"
                   class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                 >
                   Connexion
                 </button>
               </div>
               <p class="text-xs text-gray-600 sm:text-sm">
                 Vous n'avez pas de compte ?
                 <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
                   Inscrivez-vous
                 </a>
               </p>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
