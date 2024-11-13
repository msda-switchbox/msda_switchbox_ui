<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

export interface NavBarLink {
  name: string
  to: string
}

const links: NavBarLink[] = [
  { name: "About", to: "/about" },
  { name: "Transformations", to: "/history" },
]

const dashboardLink = ref(window.location.origin.concat("/ares"))

</script>
<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-sm btn-ghost btn-primary lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">

          <li v-for="(link, i) in links" :key="i">
            <RouterLink class="btn btn-base-100 btn-sm m-2" :to="link.to">{{ link.name }}</RouterLink>
          </li>

        </ul>
      </div>
      <div id="logobox">
        <RouterLink class="btn btn-primary btn-lg" to="/">
          <img src="/msda-cropped.png">SwitchBox
        </RouterLink>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">

        <li v-for="(link, i) in links" :key="i">
          <RouterLink class="btn btn-white btn-sm mx-4" :to="link.to">{{ link.name }}</RouterLink>
        </li>

      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-ghost btn-sm" :href="dashboardLink" target="_blank">Dashboard</a>
    </div>
  </div>

</template>
<style scoped>
#logobox img {
  height: 100%;
  border-right: 1px solid white;
  padding-right: 10px;
}

#logobox a {
  letter-spacing: .075em;
  font-weight: 300;
  color: white;
  text-shadow: 1;
}
</style>
