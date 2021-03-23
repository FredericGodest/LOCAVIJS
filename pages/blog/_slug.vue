<template>
      <article class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <section class="mb-5 text-gray-600 body-font overflow-hidden">
         <div class="flex flex-wrap">
          <div class="flex flex-col items-start w-full">
            <h1 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">{{ article.title }}</h1>
            <p class="mb-8">{{ formatDate(article.updatedAt) }}</p>
            <p class="leading-relaxed mb-8">{{ article.description }}</p>
            <nuxt-content :document="article" class="prose" />
          </div>
         </div>
       </section>
       <prev-next :prev="prev" :next="next" />
    </article>
</template>
<script>
  export default {
   async asyncData({ $content, params }) {
       const article = await $content('articles', params.slug).fetch()

       const [prev, next] = await $content('articles')
         .only(['title', 'slug'])
         .sortBy('createdAt', 'asc')
         .surround(params.slug)
         .fetch()

       return {
         article,
         prev,
         next,
         title: 'LOCAVI | ' + article.title
       }
     },
     head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'index blog',
            name: 'index blog',
            content: 'Index des articles du blog'
          }
        ]
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('fr', options)
      }
    }
  }
</script>
