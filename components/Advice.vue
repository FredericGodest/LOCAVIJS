<template>
    <div>
    <LoginModal ref="login"/>
    <section class="w-full max-w-2xl px-6 py-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Publier un avis</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Merci de partager votre avis avec la communauté 🧡</p>
        <div class="mt-6 ">
            <div class="items-center md:flex my-4">
               <div class="w-full mx-1">
                   <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Adresse</label>
                   <input v-model="advice.location" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
               </div>
            </div>
            <div class="items-center md:flex my-4">
              <div class="w-full mx-1">
                  <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Date d'entrée</label>
                  <input v-model="advice.dateIn" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="date">
              </div>
              <div class="w-full mx-1">
                  <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Date de sortie</label>
                  <input v-model="advice.dateOut" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="date">
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
             <Rating @clicked="onClickChild" :type="'thermal'" :label="'Thermique'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating @clicked="onClickChild" :type="'sound'" :label="'Sonore'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating @clicked="onClickChild" :type="'district'" :label="'Quartier'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating @clicked="onClickChild" :type="'configuration'" :label="'Agencement'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating @clicked="onClickChild" :type="'storage'" :label="'Rangement'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating @clicked="onClickChild" :type="'brightness'" :label="'Luminosité'" :grade="3" :maxStars="5" :hasCounter="true" />
            </div>
            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                <textarea v-model="advice.comment" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div class="flex justify-center mt-6">
                <button v-on:click="publish()" class="px-4 py-2 text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Publier</button>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
import Rating from './Rating.vue'
const axios = require('axios');

export default {
  name: 'Advice',
  components: {
    Rating
  },
  data: function(){
    return {
      advice: {
        estateId:'',
        userId:'',
        dateIn:'',
        dateOut:'',
        ratings: {
         thermal:3,
         sound:3,
         district:3,
         configuration:3,
         storage:3,
         brightness:3
        },
        comment:''
      }
    }
  },
  methods: {
    publish: function () {
     axios({
       method: 'post',
       url: 'http://localhost:8080/advice',
       data: this.advice
     }).then((response) => {
      console.log(response)
     }).catch((error) => {
      if(error.response.status == 401){
       console.log("you must be authenticated !")
       this.$refs.login.toggleModal()
      }else{
       console.log("An error occured !")
      }
     })
    },
    onClickChild (value, type) {
      var data = this.advice;
      data.ratings[type] = value
      this.advice = data
      console.log(this.advice)
    }
  }
}
</script>
