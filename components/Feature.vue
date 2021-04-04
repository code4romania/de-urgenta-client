<template>
  <div
    class="flex flex-col-reverse md:flex-row shadow-md rounded-xl p-5 lg:p-10 bg-white"
  >
    <div class="mt-10 md:mt-0">
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
