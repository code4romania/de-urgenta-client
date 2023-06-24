<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero
        title="Plan familial de urgență și educație pentru răspuns în caz de cutremur"
        description="În cazul unui cutremur, majoritatea familiilor sau a grupurilor de prieteni care locuiesc în orașele vulnerabile, nu au pregătit un plan de urgență sau măcar un rucsac de supraviețuire care le-ar permite să aibă un minim de resurse în cazul unui dezastru. E timpul să îți pregătești familia pentru o situație de urgență. Descarcă aplicația."
        show-buttons
      />
    </section>
    <section class="container mx-auto px-5 mt-10 md:mt-16">
      <Feature
        title="Planul de salvare în trei pași"
        image="image-feature.svg"
        :list="[
          {
            icon: 'icon-backpack.svg',
            title: 'Configurează-ți rucsacul',
            content:
              'Vezi ce ai de pus în rucsac și desemnează responsabili pentru toate item-urile necesare.',
          },
          {
            icon: 'icon-location-pin.svg',
            title: 'Setează-ți punctele de întâlnire',
            content:
              'Configurează traseele de urmat de la școală, serviciu, casa părinților sau bunicilor către punctele de întâlnire.',
          },
          {
            icon: 'icon-first-aid-kit.svg',
            title: 'Fă un curs de prim ajutor',
            content:
              'Învață cum poți acorda primul ajutor în situații de urgență și ajută-i pe cei dragi să supraviețuiască.',
          },
        ]"
      />
    </section>
    <section class="container mx-auto px-5 mt-10 md:mt-16">
      <FeatureSecondary
        title="Pregătește-ți rucsacul de urgență"
        description="De urgență te ajută să ții evidența produselor din rucsac și a termenelor lor de valabilitate."
        image="image-feature-secondary.svg"
        :list="[
          {
            icon: 'icon-backpack.svg',
            title:
              'Adaugă totul în rucsac și setează alerte pentru verificare produselor',
            content:
              'Aplicația te ajută să nu îți lipsească nimic din rucsac și să te asiguri că știi la fiecare moment pe ce te poți baza.',
          },
          {
            icon: 'icon-asignee.svg',
            title:
              'Desemnează responsabili pentru fiecare produs pentru a consrtui obiceiuri sănătoase',
            content:
              'E important ca toată lumea din familie să fie pregătită și să înțeleagă responsabilitățile care vin cu odată cu construirea unui plan de urgență.',
          },
        ]"
      />
    </section>
    <section class="container mx-auto px-5 mt-10 md:mt-16">
      <div class="grid md:grid-cols-2 gap-10">
        <Courses
          title="Cursuri de prima ajutor"
          description="Cursurile de prim-ajutor trebuie făcute recurent pentru a fi mereu pregătit pentru orice situație în care vei avea nevoie de aceste skilluri. Vezi mai jos ce cursuri sunt disponibile și înscrie-te să participi la ele"
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
          button="Vezi toate cursurile"
        />
        <Card
          title="Organizezi cursuri de prim-ajutor? Trimite-ne un mesaj!"
          description="Dacă organizezi cursuri de prim ajutor te rugăm să ne ajuți să ținem evidența acestor cursuri cât mai actualizată pentru toți utilizatorii aplicației De Urgență. Dacă nu ești în platformă până acum, trimite-ne un mesaj apăsând butonul de mai jos."
          :button="{ link: 'mailto:deurgenta@code4.ro', text: 'Trimite mesaj' }"
        />
      </div>
    </section>
  </main>
</template>
