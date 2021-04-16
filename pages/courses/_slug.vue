<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero :title="title" />
    </section>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <div
        class="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0"
      >
        <div class="md:max-w-sm">
          <router-link
            to="/courses"
            class="block bg-red-500 hover:bg-red-600 text-white rounded-md p-3 text-center mb-7"
          >
            <span>{{ button }}</span>
            <img src="~/assets/icon-arrow.svg" class="inline-block ml-2.5" />
          </router-link>
          <div class="bg-white grey-800 rounded-xl shadow-md p-5 pb-6">
            <h3 class="text-2xl font-bold">{{ provider.title }}</h3>
            <Markdown class="mt-8 space-y-7" :content="provider.content" />
          </div>
        </div>
        <div>
          <h2 class="text-4xl font-bold">Despre curs</h2>
          <div
            class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-10"
          >
            <div
              class="inline-block border-4 border-red-500 py-8 px-4 bg-white font-bold text-gray-800 text-xl text-center rounded-md md:w-1/3"
            >
              {{ date }}
            </div>
            <div
              class="inline-block border-4 border-red-500 py-8 px-4 bg-white font-bold text-gray-800 text-xl text-center rounded-md md:w-2/3"
            >
              {{ address }}
            </div>
          </div>
          <Markdown class="mt-10 space-y-7" :content="article.content" />
          <ShareButtons class="mt-16" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title:
        'Acesta ar fi tilul unui curs de prima ajutor foarte frumos cu un titlu lung',
      provider: {
        title: 'Crucea Rosie',
        content: `Crucea Rosie este cel mai mare furnizor de cursuri si interventii in domeniul primului ajutor din tara. Oferim o gama larga de cursuri de prim ajutor pentru persoanele cu varsta de peste 16 ani care doresc sa invete primul ajutor pentru viata lor de zi cu zi. Nu aveti nevoie de nicio experienta anterioara ci doar de dorinta de a invata si de a lua parte la exercitii.

Crucea Rosie Romana are certificare europeana a cursurilor de prim ajutor eliberata de Centrul Mondial de Referinta pentru acordarea primului ajutor al Federatiei Internationale de Cruce Rosie si Semiluna Rosie. Crucea Rosie Romana este furnizor de prim ajutor acreditat de Ministerul Educatiei si Cercetarii Stiintifice.

Programa de curs este standardizata la nivel national si armonizata in conformitate cu recomandarile Consiliului European de Resuscitare si ale Federatiei Internationale a Societatilor de Cruce Rosie si Semiluna Rosie.`,
      },
      article: {
        content: `Durata unui curs este de 12 ore. Cursurile sunt furnizate de medici, sau instructori atestati ca formatori de prim ajutor de baza. Cursul de prim ajutor se finalizeaza cu un examen, in urma caruia se primeste certificat de absolvire si legitimatie care confirma ca persoana este instruita sa acorde primul.

Dupa absolvirea cursurilor de prim ajutor, persoana respectiva stie sa acorde prim ajutor in caz de: pierderea starii de constienta; stop cardio-respirator; hemoragii; luxatii, entorse; arsuri (in caz de electrocutare sau insolatie), înec.`,
      },
      date: '6 aprilie 2021',
      address: 'Str Viorele nr 2, sector 4, București',
      button: 'Înscrie-te',
    }
  },
}
</script>
