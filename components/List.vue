<template>
  <div>
    <div class="text-4xl font-bold">{{ title }}</div>
    <div class="mt-2.5 text-gray-500">{{ description }}</div>
    <div class="mt-5 space-y-5">
      <div
        v-for="(item, x) in items"
        :key="x"
        class="flex items-center cursor-pointer"
      >
        <div
          class="flex flex-col flex-shrink-0 items-center justify-center w-20 h-24 border-4 border-red-600 rounded-md background-white"
        >
          <div class="text-4xl font-bold">{{ item.day }}</div>
          <div>{{ item.month }}</div>
        </div>
        <div class="ml-5 mr-7">
          <div class="text-lg font-bold">{{ item.title }}</div>
          <div class="mt-1.5">{{ item.subtitle }}</div>
        </div>
        <div class="ml-auto">
          <IconChevron />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <a
        href="#"
        class="inline-block bg-red-500 hover:bg-red-600 text-white p-2.5 pl-12 pr-12 rounded-md"
      >
        <span>{{ button }}</span>
        <IconArrow class="inline-block ml-2.5" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Cursuri de prima ajutor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.',
      items: [
        {
          day: '6',
          month: 'Apr',
          title: 'Acesta este un titlu',
          subtitle: 'Crucea Roșie - Filiala Sector 6',
        },
        {
          day: '18',
          month: 'Apr',
          title: 'Acesta ar fi tilul unui curs de prima ajutor',
          subtitle: 'Crucea Roșie - Filiala Sector 6',
        },
        {
          day: '22',
          month: 'Mai',
          title:
            'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
          subtitle: 'Crucea Roșie - Filiala Sector 6',
        },
      ],
      button: 'Vezi toate cursurile',
    }
  },
}
</script>
