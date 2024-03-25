<script setup lang="ts">
import {addCounter,counting,removeCounter,countersData} from './Contacts'
defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <div >
    <button @click="addCounter" type="button">Add counter </button>
  </div>
  
  <div v-for="(n,id) in countersData" class="card">
    <button class="counter">{{ id }}</button>
    <button type="button" @click="counting(n.id)">count is {{ n.count }}</button>
    <button @click="removeCounter(id)">Remove</button>
  </div>
  <p>
    Este es un p
    <code> y esta es una etiqueta code</code>
  </p>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>
