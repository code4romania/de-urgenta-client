<template>
  <div class="bg-gray-50">
    <NavigationBar class="bg-white" />
    <Nuxt />
    <Footer class="py-10 md:py-16" />
  </div>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          propriety: 'og:image',
          content: `${this.$config.baseURL}/image-de-urgenta.png`,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${this.$config.baseURL}/logo.ico`,
        },
      ],
    }
  },
}
</script>
