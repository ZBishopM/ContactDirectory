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
let counters=ref(JSON.parse(localStorage.getItem('counters')!));

watch(count,(val)=>{
  window.localStorage.setItem('countUntilNow',val.toString())
})
function addCounter(){
  if(!counters.value){
    counters.value=[];
  }
  const aux= new counterData(0,id.value,false)
  countersData.push(aux);
  counters.value.push(id.value);
  id.value++;
  let parsed = JSON.stringify(countersData);
  window.localStorage.setItem('countersData',parsed)
  window.localStorage.setItem('totalId',id.value.toString())
  saveCounters();
}

function counting(id:number){
  const selectedCounter=countersData.find(e=>e.id===id)
  /*if(!selectedCounter){
  const aux= new counterData(0,id,false)
    aux.id=id;
    aux.count++;
    countersData.push(counterData);
    return
  }*/
  selectedCounter.count++;
  let parsed = JSON.stringify(countersData);
  window.localStorage.setItem('countersData',parsed)
}

function removeCounter(x:number){
  counters.value.splice(x,1);
  countersData.splice(x,1);
  saveCounters();
}

function saveCounters(){
  let parsed = JSON.stringify(counters.value);
  window.localStorage.setItem('counters',parsed)

  parsed = JSON.stringify(countersData);
  window.localStorage.setItem('countersData',parsed)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div >
    <button @click="addCounter" type="button">Add counter </button>
  </div>
  
  <div v-for="(id,n) in counters" class="card">
    <button class="counter">{{ id }}</button>
    <button type="button" @click="counting(id)">count is {{ countersData[n].count }}</button>
    <button @click="removeCounter(n)">Remove</button>
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
