<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero
        :title="data.main[0].title"
        :description="data.main[0].description"
        :show-buttons="data.main[0].showButtons"
      />
    </section>
    <section class="container mx-auto px-5 mt-10 md:mt-16">
      <Feature
        :title="data.main[1].title"
        :description="data.main[1].description"
        :image="data.main[1].image"
        :list="[
          {
            icon: 'icon-world.svg',
            title: 'Competitive exchange rates',
            content:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          },
          {
            icon: 'icon-scale.svg',
            title: 'No hidden fees',
            content:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          },
          {
            icon: 'icon-lightning.svg',
            title: 'Transfers are instant',
            content:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          },
        ]"
      />
    </section>
    <section class="container mx-auto px-5 mt-10 md:mt-16">
      <FeatureSecondary
        :title="data.main[2].title"
        :description="data.main[2].description"
        :image="data.main[2].image"
        :list="[
          {
            icon: 'icon-annotation.svg',
            title: 'Competitive exchange rates',
            content:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          },
          {
            icon: 'icon-mail.svg',
            title: 'No hidden fees',
            content:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          },
        ]"
      />
    </section>
    <section class="container mx-auto px-5 mt-10 md:mt-16">
      <div class="grid md:grid-cols-2 gap-10">
        <Courses
          :title="data.main[3].title"
          :description="data.main[3].description"
          :list="[
            {
              slug: '021-04-06',
              day: '6',
              month: 'Apr',
              date: '2021-04-06',
              title: 'Acesta este un titlu',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              slug: '2021-04-18',
              day: '18',
              month: 'Apr',
              date: '2021-04-18',
              title: 'Acesta ar fi tilul unui curs de prima ajutor',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              slug: '2021-05-22',
              day: '22',
              month: 'Mai',
              date: '2021-05-22',
              title:
                'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
          ]"
          :button="data.main[3].button"
        />
        <Card
          :title="data.main[3].card.title"
          :description="data.main[3].card.description"
          :image="data.main[3].card.image"
          :button-text="data.main[3].card.buttonText"
          :button-href="data.main[3].card.buttonHref"
        />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $strapi }) {
    const [page] = await $strapi.$pages.find({ slug: 'home' })
    return { data: page }
  },
}
</script>
