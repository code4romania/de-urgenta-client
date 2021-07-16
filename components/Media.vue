<template>
  <img :class="className" :src="api_url + src" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
    }
  },
}
</script>
