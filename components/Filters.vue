<template>
  <div class="space-y-6">
    <div class="text-xl text-gray-800 font-bold">Filtreaza cursurile</div>
    <ButtonGroup
      :data="dates"
      :value="selectedDate"
      @valueSelect="onDateSelect"
    />
    <Select
      :data="types"
      :value="selectedType"
      select-label="Filtreaza"
      @valueSelect="onTypeSelect"
    >
      <template #SelectLabel>Selectează tipul de curs</template>
    </Select>
    <Select :data="cities" :value="selectedCity" @valueSelect="onCitySelect">
      <template #SelectLabel>Selectează orașul</template>
    </Select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: ['Saptamana asta', 'Luna asta', 'Toate rezultatele'],
      selectedDate: 'Toate rezultatele',
      types: ['prim ajutor', 'second ajutor', 'third ajutor'],
      selectedType: 'prim ajutor',
      cities: ['Bucuresti', 'Contanta', 'Cluj', 'Galati', 'Timisoara'],
      selectedCity: 'Bucuresti',
    }
  },
  methods: {
    onDateSelect(value) {
      this.selectedDate = value
    },
    onTypeSelect(value) {
      this.selectedType = value
    },
    onCitySelect(value) {
      this.selectedCity = value
    },
  },
}
</script>
