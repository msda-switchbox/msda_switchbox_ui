<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar2.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>

  <NavBar></NavBar>
  <RouterView class="min-router-view-height" />
  <PageFooter></PageFooter>
</template>

<style scoped>
.min-router-view-height {
  min-height: calc(100vh - 216px);

}
</style>
