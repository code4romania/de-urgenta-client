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
      <section class="container mx-auto px-5 mt-10 md:mt-16">
        <FeatureSecondary
          title="Always in the loop"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo."
          image="image-feature-secondary.svg"
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
      <section class="container flex space-x-10 mx-auto px-5 mt-10 md:mt-16">
        <Courses
          class="md:w-1/2"
          title="Cursuri de prima ajutor"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo."
          :list="[
            {
              day: '6',
              month: 'Apr',
              date: '2021-04-06',
              title: 'Acesta este un titlu',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '18',
              month: 'Apr',
              date: '2021-04-18',
              title: 'Acesta ar fi tilul unui curs de prima ajutor',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '22',
              month: 'Mai',
              date: '2021-05-22',
              title:
                'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
          ]"
          button="Vezi toate cursurile"
        />
      </section>
      <section class="container mx-auto px-5 mt-10 md:mt-16">
        <Card class="ml-auto md:w-1/2" />
      </section>
    </main>
  </div>
</template>
