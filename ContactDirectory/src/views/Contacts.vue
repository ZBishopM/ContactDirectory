<script setup lang="ts">
import { computed } from 'vue';
import {contactsData,contacted,removeContact, contactData} from '../components/Contacts'
const hasContacted = computed(() =>
      contactsData.some((contact:contactData) => contact.contacted)
    );
const noContacted = computed(() =>

      contactsData.every((contact:contactData) => contact.contacted)
    );
</script>

<template>
    <div>
        <router-link tag="button" type="button" class="hey" :to="{name: 'AddContact'}">Add Contact</router-link>
    </div>
    <h2>Directorio de Contactos</h2>
    <div v-if="contactsData.length === 0" >
        <h3>No tienes contactos aún</h3>
    </div>
    <div v-else v-show="noContacted" >
        <h3>Has contactado a todos</h3>
    </div>
    <div v-for="(n,id) in contactsData" class="card">
        <div v-if="!n.contacted">
            <div class="container">
                <div class="item item-1">
                    <span >{{ n.name +" "+n.lastName }}</span>
                    <span >{{ n.docType +": "+n.docNumber }}</span>
                </div>
                <div class="item item-2">
                        <span >{{ n.email }}</span>
                        <span >{{ n.phone }}</span>
                </div>
                <div class="item item-3">
                        <span >{{ n.dateBirth }}</span>
                        <span >{{ n.phone }}</span>
                </div>
                
                <button class="hey item-4" type="button" @click="contacted(n.id)">Marcar como contactado</button>
                
                <div class="item 5" >
                    
                <router-link          
                :to="{name: 'EditContact',params:{id: id},}"        
                custom         
                v-slot="{ navigate }" >
                    <button @click="navigate" role="link" class="hey">
                        Editar
                    </button>
                </router-link>
                
                <button class="hey" @click="removeContact(id)">Eliminar</button>
                </div>
            </div>
            <div>
                <!-- <button class="hey" >{{n.contacted== true? "contactado :D ":"no contactado :("}}</button> -->
            </div>
        </div>
    </div>
    <div>   
        <h2 v-show="hasContacted">Contactados</h2>
    <div>
    <div v-for="(n,id) in contactsData" class="card">
        <div v-if="n.contacted">
            <div>
                <div>
                    <span class="counter hey">{{ n.name +" "+n.lastName }}</span>
                </div>
                <span class="counter hey">{{ n.docType +": "+n.docNumber }}</span>
            </div>
            <div>
                <span class="counter hey">{{ n.email }}</span>
            </div>
            <span class="counter hey">{{ n.phone }}</span>
            <button class="hey" type="button" @click="contacted(n.id)">¿Volver a contactar?</button>
            <router-link          
            :to="{name: 'EditContact',params:{id: id},}"        
            custom         
            v-slot="{ navigate }" >
                <button @click="navigate" role="link" class="hey">
                    Editar
                </button>
            </router-link>
            <button class="hey" @click="removeContact(id)">Remove</button>
            <button class="hey" >{{n.contacted== true? "contactado :D ":"no contactado :("}}</button>
        </div>
        </div>
    </div>
    </div>
    
</template>