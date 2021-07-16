<template>
  <main>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <Hero :title="title" :footer="description" />
    </section>
    <section class="container mx-auto px-5 pt-10 md:pt-16">
      <div class="info__grid">
        <Markdown class="info__article" :content="content" />
        <div class="info__aside">
          <ShareButtons />
          <img class="info__image" :src="image" />
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
      content: `## Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.

Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.

Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.

Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.

- Quis elit egestas venenatis mattis dignissim.
- Cras cras lobortis vitae vivamus ultricies facilisis tempus.
- Orci in sit morbi dignissim metus diam arcu pretium.

Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.

### How we helped

Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.

Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.

Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.

Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.

Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.

- Quis elit egestas venenatis mattis dignissim.
- Cras cras lobortis vitae vivamus ultricies facilisis tempus.
- Orci in sit morbi dignissim metus diam arcu pretium.

Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.

### How we helped
Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.

Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.`,
      description: 'Feb 12, 2020 · 11 min read',
      date: '6 aprilie 2021',
      image: 'https://picsum.photos/480/560?random=1',
    }
  },
}
</script>

<style>
.info__grid {
  @apply grid md:grid-cols-12 gap-5;
}

.info__aside {
  @apply md:col-span-4;
}

.info__article {
  @apply md:col-span-8 space-y-4 leading-relaxed;
}

.info__article h2 {
  @apply text-xl;
}

.info__article h3 {
  @apply text-lg font-bold pt-3;
}

.info__article ul {
  @apply list-disc list-inside space-y-2;
}

.info__image {
  @apply w-full mt-10 mx-auto rounded-lg;
}
</style>
