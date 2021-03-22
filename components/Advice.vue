<template>
    <section class="w-full max-w-2xl px-6 py-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Publier un avis</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Merci de partager votre avis avec la communauté 🧡</p>
        <div class="mt-6 ">
            <div class="items-center md:flex my-4">
              <div class="w-full mx-1">
                  <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Date d'entrée</label>
                  <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="date">
              </div>
              <div class="w-full mx-1">
                  <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Date de sortie</label>
                  <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="date">
              </div>
            </div>
            <div class="items-center md:flex my-4">
               <label class="block text-sm font-medium text-gray-600 dark:text-gray-200 mx-1" for="type">
                   <div class="mb-2">Type de logement</div>
                   <select id="type" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="type">
                       <option value="appartement">
                           Appartement
                       </option>
                       <option value="maison">
                           Maison
                       </option>
                       <option value="garage">
                           Garage
                       </option>
                   </select>
               </label>
               <div class="w-full mx-1">
                   <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Adresse</label>
                   <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
               </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
             <Rating :label="'Thermique'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating :label="'Sonore'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating :label="'Quartier'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating :label="'Agencement'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating :label="'Rangement'" :grade="3" :maxStars="5" :hasCounter="true" />
             <Rating :label="'Luminosité'" :grade="3" :maxStars="5" :hasCounter="true" />
            </div>


            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Publier</button>
            </div>
        </div>
    </section>
</template>
<script>
import Rating from './Rating.vue'

export default {
  name: 'Advice',
  components: {
    Rating
  }
}
</script>
