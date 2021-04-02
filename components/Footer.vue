<template>
  <footer>
    <WaveSmall class="w-full h-auto mb-10 md:hidden" />
    <WaveLarge class="w-full h-auto mb-16 hidden md:block" />
    <div
      class="container mx-auto px-4 text-gray-600 flex justify-between flex-col md:flex-row-reverse"
    >
      <div>
        <div class="text-xl font-bold md:text-right">Descarcă aplicația</div>
        <div class="flex space-x-4 mt-2.5 md:justify-end">
          <a href="#"><LogoDownloadApple /></a>
          <a href="#"><LogoDownloadAndroid /></a>
        </div>
        <div
          class="font-bold flex justify-between items-center flex-wrap md:flex-nowrap mt-5 md:mt-10"
        >
          <div class="flex flex-nowrap space-x-4">
            <a href="#" class="hover:underline">Cursuri</a>
            <a href="#" class="hover:underline">Informează-te</a>
            <a href="#" class="hover:underline">Despre proiect</a>
          </div>
          <button
            class="bg-green-600 hover:bg-green-500 text-white rounded w-full md:w-auto pt-2 pb-2 pl-5 pr-5 mt-5 md:mt-0 md:ml-4"
          >
            Donează
          </button>
        </div>
      </div>
      <div class="max-w-xs text-xs">
        <div class="font-courier mt-8 md:mt-0">
          Un proiect
          <LogoCode4Ro class="mt-3 mb-3 w-32 h-auto" />
          Organizație independentă, non-partizană, apolitică,
          non-guvernamentală.
        </div>
        <div class="mt-11 md:mt-8">
          © 2021 Code for Romania. Toate drepturile rezervate.
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.font-courier {
  font-family: 'Courier New', Courier, monospace;
}
</style>
