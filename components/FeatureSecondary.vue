<template>
  <div class="flex flex-col md:flex-row-reverse items-center">
    <div class="md:w-1/2">
      <h2 class="text-4xl font-bold">{{ title }}</h2>
      <p class="mt-2.5 text-gray-500">
        {{ description }}
      </p>
      <div v-for="(item, index) in list" :key="index" class="space-y-9 mt-10">
        <div class="flex">
          <div>
            <div class="bg-red-500 rounded w-8 h-8 p-2 mr-5">
              <img :src="require(`~/assets/` + item.icon)" />
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold">{{ item.title }}</h3>
            <p class="text-gray-500 pt-1.5">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 md:w-1/2">
      <img :src="require(`~/assets/` + image)" class="m-auto" />
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
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>
