<template>
  <router-link class="inline-block p-4 text-gray-600 font-bold" :to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
