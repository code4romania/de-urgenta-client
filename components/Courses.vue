<template>
  <div>
    <h2 class="text-4xl font-bold">{{ title }}</h2>
    <p class="mt-2.5 text-gray-500">{{ description }}</p>
    <div class="mt-5 space-y-5">
      <div
        v-for="(item, x) in list"
        :key="x"
        class="flex items-center cursor-pointer"
      >
        <div
          class="flex flex-col flex-shrink-0 items-center justify-center w-20 h-24 border-4 border-red-600 rounded-md bg-white"
        >
          <time class="text-4xl font-bold" :datetime="`${item.date}`">{{
            item.day
          }}</time>
          <time :datetime="item.date">{{ item.month }}</time>
        </div>
        <div class="ml-5 mr-7">
          <h4 class="text-lg font-bold">{{ item.title }}</h4>
          <p class="mt-1.5">{{ item.subtitle }}</p>
        </div>
        <div class="ml-auto">
          <img src="~/assets/icon-chevron.svg" />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <a
        href="#"
        class="inline-block bg-red-500 hover:bg-red-600 text-white p-2.5 pl-12 pr-12 rounded-md"
      >
        <span>{{ button }}</span>
        <img src="~/assets/icon-arrow.svg" class="inline-block ml-2.5" />
      </a>
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
    list: {
      type: Array,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
  },
}
</script>
