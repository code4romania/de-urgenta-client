<template>
  <div
    class="flex flex-col-reverse md:flex-row shadow-md rounded-xl p-5 lg:p-10 bg-white"
  >
    <div class="mt-10 md:mt-0">
      <h2 class="text-4xl font-bold">{{ title }}</h2>
      <p class="mt-2.5 text-gray-500">
        {{ description }}
      </p>
      <div v-for="(item, index) in list" :key="index" class="space-y-9 mt-10">
        <div class="flex">
          <div>
            <div class="bg-red-500 rounded p-2 mr-5 w-8 h-8">
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
    <div class="flex-shrink-0">
      <img class="m-auto md:ml-20" :src="require(`~/assets/` + image)" />
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
