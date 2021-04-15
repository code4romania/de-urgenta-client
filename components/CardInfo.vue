<template>
  <div class="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
    <router-link :to="`/info/${id}`">
      <img :src="image" class="w-full" />
    </router-link>
    <div class="flex flex-col h-full p-5">
      <h4 class="text-xl font-bold mb-3">{{ title }}</h4>
      <p class="text-gray-500 mb-5">{{ description }}</p>
      <div class="text-sm text-gray-600 mt-auto">
        {{ date }} · {{ duration }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
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
    date: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
}
</script>
