<template>
 <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Brand new
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)" width="52" height="24"></rect>
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
       <ul class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
         <li v-for="article in articles" :key="article.slug">
           <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
             <BlogCard :article="article" />
           </NuxtLink>
         </li>
       </ul>
   </div>
</template>
<script>
  export default {
   async asyncData({ $content, params }) {
       const articles = await $content('articles')
         .only(['title', 'description', 'slug'])
         .sortBy('createdAt', 'asc')
         .fetch()

       return {
         articles,
         title: 'LOCAVI | Blog'
       }
     },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
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
  }
  }
</script>
