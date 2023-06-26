<template>
  <div
    class="flex flex-col xl:flex-row bg-white shadow-md rounded-xl p-5 lg:p-10"
  >
    <div class="order-2 xl:order-1">
      <h2 class="text-4xl font-bold">
        {{ title }}
      </h2>
      <p class="mt-7 text-gray-500">
        {{ description }}
      </p>
      <div class="mt-7">
        <a
          href="#"
          class="inline-block bg-red-500 hover:bg-red-600 text-white p-2.5 pl-12 pr-12 rounded-md"
        >
          <span>{{ button }}</span>
          <img src="~/assets/icon-arrow.svg" class="inline-block" />
        </a>
      </div>
    </div>
    <div class="order-1 flex-shrink-0 lg:pt-0 xl:order-2 xl:mx-0">
      <img class="flex-shrink-0 lg:pt-0" src="~/assets/image-creators.svg" />
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
    button: {
      type: String,
      required: true,
    },
  },
}
</script>
