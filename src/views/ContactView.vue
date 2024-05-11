<script setup></script>

<template>
  <main>
    <h1 class="underline font-bold uppercase">Contato</h1>

    <form @submit.prevent="submitForm" class="flex flex-col bg-gray-200 rounded-md">
      <label class="w-full flex justify-start items-center p-4">
        <span class="w-1/2 flex justify-center">Como se chama?</span>
        <input
          class="w-1/2 rounded-md p-2 ml-3"
          v-model="form.scentererName"
          type="text"
          required
        />
      </label>

      <label class="w-full flex justify-start items-center p-4">
        <span class="w-1/2 text-center flex justify-center">Qual empresa deseja nos contatar?</span>
        <input class="w-1/2 rounded-md p-2 ml-3" v-model="form.companyName" type="text" required />
      </label>

      <label class="w-full flex justify-start items-center p-4">
        <span class="w-1/2 flex justify-center">Seu melhor e-mail:</span>
        <input class="w-1/2 rounded-md p-2 ml-3" v-model="form.senderEmail" type="email" required />
      </label>

      <label class="flex flex-col p-4">
        Mensagem:
        <textarea
          class="rounded-md resize-none p-4"
          rows="5"
          v-model="form.message"
          required
        ></textarea>
      </label>

      <button class="rounded-md p-5 bg-green-400" type="submit">Enviar</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  senderName: '',
  companyName: '',
  selection: '',
  senderEmail: '',
  message: ''
})

const submitForm = () => {
  // Aqui você pode fazer uma chamada para o seu servidor backend para enviar o e-mail.
  // A implementação exata dependerá de como você está configurando seu servidor de e-mail com a Locaweb.
  console.log(form.value)
}
</script>
