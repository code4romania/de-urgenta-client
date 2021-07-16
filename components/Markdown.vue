<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-if="content" v-html="$md.render(content)" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
