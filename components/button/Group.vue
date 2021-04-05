<template>
  <div
    class="inline-flex border border-red-500 divide-x divide-red-500 rounded-md text-sm text-gray-700 align-center mt-5"
  >
    <button
      v-for="(val, key) in values"
      :key="key"
      :class="[
        'px-4 py-2.5',
        {
          'bg-red-500 text-white': selected === val,
          'btn-default': selected !== val,
        },
      ]"
      @click="changeSelectVal(val)"
    >
      {{ val }}
    </button>
    <!-- <button class="px-4 py-2.5">Luna asta</button> -->
    <!-- <button class="bg-red-500 text-white px-4 py-2.5">Toate cursurile</button> -->
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default: null,
    },
    initialValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selected: this.initialValue,
    }
  },
  methods: {
    changeSelectVal(val) {
      this.selected = val
    },
  },
}
</script>
