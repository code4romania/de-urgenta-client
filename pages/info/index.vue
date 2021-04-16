<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero :title="title" :description="description" />
    </section>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <CardInfo
          v-for="(item, index) in list"
          :id="item.id"
          :key="index"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :date="item.date"
          :duration="item.duration"
        />
      </div>
      <div class="flex justify-center mt-16">
        <button
          class="block bg-red-500 hover:bg-red-600 text-white rounded-md text-center px-8 py-2 mx-auto"
          @click="loadMore"
        >
          <span>{{ button }}</span>
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title:
        'Informează-te despre ce înseamnă cu adevărat o situație de urgență',
      description:
        'Aici ar fi un alt text care sa imputerniceasca ce zice textul de mai sus si sa complementeze call to action-ul pentru cursuri.pwp.',
      button: 'Încarca mai multe',
      list: [
        {
          id: 'boost-your-conversion-rate',
          title: 'Boost your conversion rate',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          image: 'https://picsum.photos/380/192?random=1',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'how-to-use-search-engine-optimization-to-drive-sales',
          title: 'How to use search engine optimization to drive sales',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          image: 'https://picsum.photos/380/192?random=2',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'improve-your-customer-experience',
          title: 'Improve your customer experience',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          image: 'https://picsum.photos/380/192?random=3',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'boost-your-conversion-rate',
          title: 'Boost your conversion rate',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          image: 'https://picsum.photos/380/192?random=4',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'how-to-use-search-engine-optimization-to-drive-sales',
          title: 'How to use search engine optimization to drive sales',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          image: 'https://picsum.photos/380/192?random=5',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'improve-your-customer-experience',
          title: 'Improve your customer experience',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          image: 'https://picsum.photos/380/192?random=6',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'boost-your-conversion-rate',
          title: 'Boost your conversion rate',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          image: 'https://picsum.photos/380/192?random=7',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'how-to-use-search-engine-optimization-to-drive-sales',
          title: 'How to use search engine optimization to drive sales',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          image: 'https://picsum.photos/380/192?random=8',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
        {
          id: 'improve-your-customer-experience',
          title: 'Improve your customer experience',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          image: 'https://picsum.photos/380/192?random=9',
          date: 'Mar 16, 2020',
          duration: '6 min read',
        },
      ],
    }
  },
  methods: {
    loadMore(event) {
      this.list = this.list.concat(this.list)
    },
  },
}
</script>
