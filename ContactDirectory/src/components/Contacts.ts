import {  reactive, ref, watch } from 'vue'

class counterData {
  constructor(
  public count:number,
  public id: number,
  public contactado:boolean){}
}

export class contactData{
  constructor(
    public id:number,
    public name:string,
    public lastName:string,
    public docType:string,
    public docNumber:string,
    public email:string,
    public phone:string,
    public countryCode:string,
    public dateBirth:string,
    public contacted:boolean
  ){}
}

export const getInitialFormData = (contacto:contactData) => ({ 
  id: contacto.id,
  name: contacto.name,
  lastName:contacto.lastName,
   docType:contacto.docType,
   docNumber:contacto.docNumber,
  email:contacto.email,
   phone:contacto.phone,
  countryCode:contacto.countryCode,
   dateBirth:contacto.dateBirth,
   contacted:contacto.contacted
});

export const countersData:any[]=reactive(JSON.parse(localStorage.getItem('countersData')!)||[]);

export const contactsData:any[]=reactive(JSON.parse(localStorage.getItem('contactsData')!)||[]);
export const globalId=ref(+(JSON.parse(window.localStorage.getItem('totalId')!)))

watch(countersData,(val)=>{
  let parsed = JSON.stringify(val);
  window.localStorage.setItem('countersData',parsed)
},{deep:true})

/* watch(contactsData,(val)=>{
  let parsed = JSON.stringify(val);
  window.localStorage.setItem('contactsData',parsed)
},{deep:true}) */

function wardar(){
  let parsed = JSON.stringify(contactsData);
  window.localStorage.setItem('contactsData',parsed);
}

watch(globalId,(nv)=>{
  window.localStorage.setItem('totalId',nv.toString())
})
export function contacted(id:number){
  const selectedContact = contactsData.find(e=>e.id===id)
  selectedContact.contacted ? selectedContact.contacted=false : selectedContact.contacted=true
  wardar();
}

export function removeContact(id:number){
  contactsData.splice(id,1);
  wardar();
}

export function handleSubmit(a:contactData){
  console.log(a)
  contactsData.push(a);
  globalId.value++;
}

export function addCounter(){
  const aux= new counterData(0,globalId.value,false)
  countersData.push(aux);
  globalId.value++;
}

export function addContact(a:contactData){
  let aux:contactData =contactsData.find(e=>e.id===a.id);
  console.log(aux);
  if(!aux){
    a.id=globalId.value;
    contactsData.push(a);
    globalId.value++;
    return wardar();
  }
  Object.assign(aux,a)
  wardar();
}

export function counting(id:number){
  const selectedCounter=countersData.find(e=>e.id===id)
  selectedCounter.count++;
}

export function removeCounter(x:number){
  countersData.splice(x,1);
}