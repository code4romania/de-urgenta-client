<template>
  <div class="flex">
    <div><ListIcon :src="icon" /></div>
    <div>
      <h3 class="text-2xl font-bold">{{ title }}</h3>
      <p class="text-gray-500 pt-1.5">
        {{ content }}
      </p>
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
    content: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
