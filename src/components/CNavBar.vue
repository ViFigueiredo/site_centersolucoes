<template>
  <header class="shadow-xl">
    <div class="w-full flex items-center">
      <div class="w-[130px] justify-start">
        <img src="@/assets/img/center_logo.jpeg" alt="center logo" />
      </div>
      <nav class="w-full flex space-x-5 justify-end pr-5">
        <RouterLink to="/" class="hover:underline hover:text-green-500 cursor-pointer"
          >Início</RouterLink
        >
        <RouterLink to="/parceiros" class="hover:underline hover:text-green-500 cursor-pointer"
          >Parceiros</RouterLink
        >
        <RouterLink to="/sobre" class="hover:underline hover:text-green-500 cursor-pointer"
          >Sobre Nós</RouterLink
        >
        <RouterLink to="/contato" class="hover:underline hover:text-green-500 cursor-pointer"
          >Contato</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
