<script setup></script>

<template>
  <main>
    <h1 class="underline font-bold uppercase">Parceiros</h1>
    <div class="w-full flex">
      <div class="w-1/2 flex flex-col p-10">
        <div class="w-full flex">
          <img src="@/assets/img/origo_logo.png" alt="origo energia logo" class="h-36" />
          <span class="p-4">
            A empresa oferece soluções acessíveis de energia solar para residências e empresas, sem
            a necessidade de instalar placas solares, eliminando burocracias e promovendo um consumo
            de energia mais racional.
          </span>
        </div>
        <div class="w-full flex justify-end">
          <button
            class="p-3 mt-4 bg-yellow-100 border border-yellow-300 shadow-lg hover:shadow-inner rounded-md"
          >
            <a href="https://origoenergia.com.br/" target="_blank">Conheça Mais ></a>
          </button>
        </div>
      </div>

      <div class="w-1/2 flex flex-col p-10">
        <div class="w-full flex">
          <img src="@/assets/img/selfit_logo.png" alt="origo energia logo" class="h-36" />
          <span class="p-4">
            A Selfit Academias é uma rede de academias em rápido crescimento no Brasil, com o
            objetivo de oferecer a melhor infraestrutura fitness do país. A Selfit oferece
            equipamentos de última geração, professores altamente qualificados e uma variedade de
            modalidades exclusivas.
          </span>
        </div>
        <div class="w-full flex justify-end">
          <button
            class="p-3 mt-4 bg-red-100 border border-red-300 shadow-lg hover:shadow-inner rounded-md"
          >
            <a href="https://selfitacademias.com.br" target="_blank">Conheça Mais ></a>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
