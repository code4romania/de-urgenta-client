<template>
  <div class="flex flex-col md:flex-row-reverse items-center">
    <div class="md:w-1/2">
      <h2 class="text-4xl font-bold">{{ title }}</h2>
      <p class="mt-2.5 text-gray-500">
        {{ description }}
      </p>
      <div class="space-y-9 mt-10">
        <ListItem
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
          :content="item.content"
          :icon="item.icon"
        />
      </div>
    </div>
    <div class="max-w-md mx-auto mt-12">
      <img :src="require(`~/assets/` + image)" class="p-6" />
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
