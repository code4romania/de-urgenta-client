<template>
  <div>
    <NavigationBar />
    <main class="bg-gray-50">
      <section class="container mx-auto px-5 pt-10 md:pt-16">
        <Hero
          title="Aici ar veni un header catchy pentru download singura aplicatie care"
          description="Aici ar fi un alt text care sa imputerniceasca ce zice textul de mai sus si sa complementeze call to action-ul pentru downloading-ul aplicatiei. pwp."
        />
      </section>
      <section class="container mx-auto px-5 mt-10 md:mt-16">
        <Feature
          title="Transfer funds world-wide"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit."
          image="image-feature.svg"
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
    </main>
  </div>
</template>
