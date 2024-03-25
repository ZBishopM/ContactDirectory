import {  reactive, ref, watch } from 'vue'

class counterData {
  constructor(
  public count:number,
  public id: number,
  public contactado:boolean){}
}
export const countersData:any[]=reactive(JSON.parse(localStorage.getItem('countersData')!)||[]);
const id=ref(+(JSON.parse(window.localStorage.getItem('totalId')!)))

watch(countersData,(val)=>{
  let parsed = JSON.stringify(val);
  window.localStorage.setItem('countersData',parsed)
},{deep:true})

watch(id,(nv)=>{
  window.localStorage.setItem('totalId',nv.toString())
})

export function addCounter(){
  const aux= new counterData(0,id.value,false)
  countersData.push(aux);
  id.value++;
}

export function counting(id:number){
  const selectedCounter=countersData.find(e=>e.id===id)
  selectedCounter.count++;
}

export function removeCounter(x:number){
  countersData.splice(x,1);
}