<template>
  <div>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-xl">
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
         <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
           <span class="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
             ×
           </span>
         </button>
          <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
           <div class="flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
              <div class="self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                  Connectez-vous
              </div>
             </div>
              <div class="mt-8">
                  <form action="#" autoComplete="off">
                      <div class="flex flex-col mb-2">
                          <div class="flex relative ">
                              <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                      </path>
                                  </svg>
                              </span>
                              <input v-model="email" type="text" id="email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" placeholder="email"/>
                              </div>
                          </div>
                          <div class="flex flex-col mb-6">
                              <div class="flex relative ">
                                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                          </path>
                                      </svg>
                                  </span>
                                  <input v-model="password" type="password" id="password" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" placeholder="Mot de passe"/>
                                  </div>
                              </div>
                              <div class="flex items-center mb-6 -mt-4">
                                  <div class="flex ml-auto">
                                      <a href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                          Mot de passe oublié ?
                                      </a>
                                  </div>
                              </div>
                              <div class="flex w-full">
                                  <button type="submit" v-on:click="login()" class="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                      Connexion
                                  </button>
                              </div>
                          </form>
                      </div>
                      <div class="flex items-center justify-center mt-6">
                          <a href="#" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                              <span class="ml-2">
                                  Vous n'avez pas de compte ? Inscrivez-vous
                              </span>
                          </a>
                      </div>
                  </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false,
      email:'',
      password:''
      }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    login: function(){
     axios({
       method: 'post',
       url: 'http://localhost:8080/login',
       data: {
        email:this.email,
        password:this.password
       }
     }).then((response) => {
      console.log(response)
      this.toggleModal();
     }).catch((error) => {
      if(error.response.status == 401){
       console.log("you must be authenticated !")
      }else{
       console.log("An error occured ! " + error)
      }
     })
    }
  }
}
</script>
