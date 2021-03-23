<template>
  <div>
   <Hero />
   <Features />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'LOCAVI'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'home',
          name: 'home',
          content: 'Page principale'
        }
      ]
    }
  }
}
</script>
