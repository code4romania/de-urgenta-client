<template>
  <div
    class="flex flex-col lg:flex-row bg-white shadow-md rounded-xl p-5 lg:p-10"
  >
    <div>
      <h2 class="text-4xl font-bold">
        {{ title }}
      </h2>
      <p class="mt-7 text-gray-500">
        {{ description }}
      </p>
      <div class="mt-7">
        <a
          :href="buttonHref"
          class="inline-block bg-red-500 hover:bg-red-600 text-white p-2.5 pl-12 pr-12 rounded-md"
        >
          <span>{{ buttonText }}</span>
          <img src="~/assets/icon-arrow.svg" class="inline-block" />
        </a>
      </div>
    </div>
    <div class="flex-shrink-0 lg:pt-0">
      <Media :src="image.url" />
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
    image: {
      type: Object,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonHref: {
      type: String,
      required: true,
    },
  },
}
</script>
