<script setup lang="ts">
import {  reactive, ref, watch } from 'vue'

defineProps<{ msg: string }>()
class counterData {
  constructor(
  public count:number,
  public id: number,
  public contactado:boolean){}
}
const countersData:any[]=reactive(JSON.parse(localStorage.getItem('countersData')!)||[]);
let id=ref(+(JSON.parse(window.localStorage.getItem('totalId')!)))
const count=ref(+(JSON.parse(window.localStorage.getItem('countUntilNow')!)));

watch(count,(val)=>{
  window.localStorage.setItem('countUntilNow',val.toString())
})

function addCounter(){
  const aux= new counterData(0,id.value,false)
  countersData.push(aux);
  id.value++;
  window.localStorage.setItem('totalId',id.value.toString())
  saveCounters();
}

function counting(id:number){
  const selectedCounter=countersData.find(e=>e.id===id)
  selectedCounter.count++;
  saveCounters();
}

function removeCounter(x:number){
  countersData.splice(x,1);
  saveCounters();
}

function saveCounters(){
  let parsed = JSON.stringify(countersData);
  window.localStorage.setItem('countersData',parsed)
}
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
