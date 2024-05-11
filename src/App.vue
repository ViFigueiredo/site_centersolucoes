<template>
  <NavBar />
  <RouterView class="w-full min-h-[100vh] flex flex-col justify-start items-center pt-24 space-y-10"/>
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/CNavBar.vue'
import Footer from '@/components/CFooter.vue'
</script>
