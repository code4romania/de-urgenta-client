<template>
  <div class="flex items-center bg-red-500 rounded w-8 h-8 p-2 mr-5">
    <img :src="require(`~/assets/` + src)" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>
