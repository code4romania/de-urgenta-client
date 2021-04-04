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
          href="#"
          class="inline-block bg-red-500 hover:bg-red-600 text-white p-2.5 pl-12 pr-12 rounded-md"
        >
          <span>{{ button }}</span>
          <IconArrow class="inline-block" />
        </a>
      </div>
    </div>
    <div class="pt-8 lg:pt-0">
      <IconCreators />
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
