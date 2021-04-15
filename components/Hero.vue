<template>
  <div class="text-center lg:w-1/2 m-auto">
    <h1 class="text-4xl text-gray-800 font-bold md:text-5xl">
      {{ title }}
    </h1>
    <p v-if="description" class="text-xl mt-8">
      {{ description }}
    </p>
    <div v-if="showButtons" class="flex justify-center space-x-5 mt-8">
      <a href="#"><img src="~assets/logo-download-ios.svg" /></a>
      <a href="#"><img src="~assets/logo-download-android.svg" /></a>
    </div>
    <p v-if="footer" class="text-sm text-gray-600 mt-8">
      {{ footer }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    showButtons: {
      type: Boolean,
    },
    footer: {
      type: String,
      default: null,
    },
  },
}
</script>
