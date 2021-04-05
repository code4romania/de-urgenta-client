<template>
  <div
    class="inline-flex border border-red-500 divide-x divide-red-500 rounded-md text-sm text-gray-700 align-center mt-5"
  >
    <button
      v-for="(val, key) in data"
      :key="key"
      :class="[
        'px-4 py-2.5',
        {
          'bg-red-500 text-white': isSelected(val),
        },
      ]"
      @click="changeSelectVal(val)"
    >
      {{ val }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  methods: {
    isSelected(value) {
      return this.value === value
    },
    changeSelectVal(value) {
      this.$emit('valueSelect', value)
    },
  },
}
</script>
