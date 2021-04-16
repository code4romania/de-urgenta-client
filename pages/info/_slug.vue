<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero :title="title" :footer="description" />
    </section>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <div class="grid md:grid-cols-12 gap-5">
        <div class="md:col-span-8 space-y-4 leading-relaxed">
          <h2 class="text-lg">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi.
          </h2>
          <p>
            Sollicitudin tristique eros erat odio sed vitae, consequat turpis
            elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
            donec ut volutpat donec laoreet quam urna.
          </p>
          <p>
            Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
            nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
            sit. Faucibus sed non gravida lectus dignissim imperdiet a.
          </p>
          <p>
            Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
            arcu, metus, egestas netus cursus. In.
          </p>
          <h4 class="text-lg font-bold pt-3">How we helped</h4>
          <p>
            Tincidunt integer commodo, cursus etiam aliquam neque, et.
            Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
            feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
            proin massa, lectus. Diam rutrum posuere donec ultricies non morbi.
            Mi a platea auctor mi.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Sollicitudin tristique eros erat odio sed vitae, consequat turpis
            elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
            donec ut volutpat donec laoreet quam urna.
          </p>
          <p>
            Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
            nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
            sit. Faucibus sed non gravida lectus dignissim imperdiet a.
          </p>
          <p>
            Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
            arcu, metus, egestas netus cursus. In.
          </p>
          <p>
            Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
            arcu, metus, egestas netus cursus. In.
          </p>
          <h4 class="text-lg font-bold pt-3">How we helped</h4>
          <p>
            Tincidunt integer commodo, cursus etiam aliquam neque, et.
            Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
            feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
            proin massa, lectus. Diam rutrum posuere donec ultricies non morbi.
            Mi a platea auctor mi.
          </p>
        </div>

        <div class="md:col-span-4">
          <ShareButtons />
          <img class="w-full mt-10 mx-auto rounded-lg" :src="image" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'How to use search engine optimization to drive sales',
      description: 'Feb 12, 2020 · 11 min read',
      date: '6 aprilie 2021',
      image: 'https://picsum.photos/480/560?random=1',
    }
  },
}
</script>
