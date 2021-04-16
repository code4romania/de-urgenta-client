<template>
  <div class="shadow">
    <nav
      v-click-outside="closeMenu"
      class="container flex flex-col items-center justify-between m-auto md:flex-row md:px-8"
    >
      <div class="w-full md:w-auto flex flex-row items-center justify-between">
        <Logo />
        <!-- On mobile, display a hamburger menu button -->
        <button class="p-4 md:hidden focus:outline-none" @click="toggleMenu">
          <img alt="Meniu" src="~assets/hamburger-menu.svg" />
        </button>
      </div>
      <div
        class="w-full mb-5 md:w-auto md:flex-grow md:flex md:flex-row md:mb-0"
        :class="{ hidden: !menuVisible }"
      >
        <div class="flex flex-col md:flex-row md:mx-auto">
          <NavigationLink to="/courses">Cursuri</NavigationLink>
          <NavigationLink to="/info">Informează-te</NavigationLink>
          <NavigationLink to="/about">Despre proiect</NavigationLink>
        </div>
        <NavigationDonateButton class="self-start ml-4 mt-2" />
      </div>
    </nav>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      menuVisible: false,
    }
  },
  watch: {
    $route() {
      this.menuVisible = false
    },
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    closeMenu() {
      this.menuVisible = false
    },
  },
}
</script>
