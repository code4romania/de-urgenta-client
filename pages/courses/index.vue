<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero
        title="Învață să dai cursuri de prim ajutor"
        description="Aici ar fi un alt text care sa imputerniceasca ce zice textul de mai
          sus si sa complementeze call to action-ul pentru cursuri.pwp."
      />
    </section>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <div
        class="flex flex-col md:flex-row space-y-16 md:space-x-16 md:space-y-0"
      >
        <div class="md:w-2/6">
          <Filters />
          <Card
            class="flex-wrap mt-16 md:mt-32"
            title="Esti autor de cursuri de prim ajutor? Do something"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo."
            :button="{
              link: '#',
              text: 'Call to action pt creatori',
            }"
          />
        </div>
        <Courses
          class="md:w-4/6"
          :list="[
            {
              day: '6',
              month: 'Apr',
              date: '2021-04-06',
              slug: '2021-04-06',
              title: 'Acesta este un titlu',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '18',
              month: 'Apr',
              date: '2021-04-18',
              slug: '2021-04-18',
              title: 'Acesta ar fi tilul unui curs de prima ajutor',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '22',
              month: 'Mai',
              date: '2021-05-22',
              slug: '2021-05-22',
              title:
                'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '6',
              month: 'Apr',
              date: '2021-04-06',
              slug: '2021-04-06',
              title: 'Acesta este un titlu',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '18',
              month: 'Apr',
              date: '2021-04-18',
              slug: '2021-04-18',
              title: 'Acesta ar fi tilul unui curs de prima ajutor',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '22',
              month: 'Mai',
              date: '2021-05-22',
              slug: '2021-05-22',
              title:
                'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '6',
              month: 'Apr',
              date: '2021-04-06',
              slug: '2021-04-06',
              title: 'Acesta este un titlu',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '18',
              month: 'Apr',
              date: '2021-04-18',
              slug: '2021-04-18',
              title: 'Acesta ar fi tilul unui curs de prima ajutor',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '22',
              month: 'Mai',
              date: '2021-05-22',
              slug: '2021-05-22',
              title:
                'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '6',
              month: 'Apr',
              date: '2021-04-06',
              slug: '2021-04-06',
              title: 'Acesta este un titlu',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '18',
              month: 'Apr',
              date: '2021-04-18',
              slug: '2021-04-18',
              title: 'Acesta ar fi tilul unui curs de prima ajutor',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
            {
              day: '22',
              month: 'Mai',
              date: '2021-05-22',
              slug: '2021-05-22',
              title:
                'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
              subtitle: 'Crucea Roșie - Filiala Sector 6',
            },
          ]"
          button="Încarcă mai multe"
        />
      </div>
    </section>
  </main>
</template>
