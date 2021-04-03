<template>
  <div class="text-center lg:w-1/2 m-auto">
    <h1 class="text-4xl text-gray-800 font-bold md:text-5xl">
      {{ title }}
    </h1>
    <p class="text-xl mt-8">
      {{ description }}
    </p>
    <div class="flex justify-center space-x-5 mt-8">
      <a href="#"><img src="~assets/logo-download-ios.svg" /></a>
      <a href="#"><img src="~assets/logo-download-android.svg" /></a>
    </div>
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
      required: true,
    },
  },
}
</script>
