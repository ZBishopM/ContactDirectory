<script setup lang="ts">
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import {contactData,addContact, globalId} from "../components/Contacts"
import { ref,reactive } from 'vue';

const contacto=reactive(new contactData(globalId.value,"","","","","","","","",false));
const results =ref()
</script>

<template>
    <h2>Añadir Contacto</h2>
    <div>
        <router-link          
            :to="{name: 'Contacts'}"        
            custom         
            v-slot="{ navigate }" >
                <button @click="navigate" role="link" class="hey">
                    Cancelar
                </button>
        </router-link>
    </div>
    <form @submit.prevent>
        <label>Nombres :</label>
        <input placeholder="Nombres" v-model="contacto.name" required/>
    
        <label>Apellidos :</label>
        <input placeholder="Apellidos" v-model="contacto.lastName" required>
        
        <label>Tipo de documento :</label>
        <select v-model="contacto.docType" required>
            <option disabled value="">Elige un tipo de documento</option>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="EXT">Carnet de extranjería</option>
        </select>
        
        <label>Número de Documento :</label>
        <input placeholder="Número de documento" v-model.number="contacto.docNumber" required>
        
        <label>Email :</label>
        <input placeholder="Correo electrónico" type="email" required v-model="contacto.email">
    
        <label>Teléfono:</label>
        <MazPhoneNumberInput
            v-model="contacto.phone"
            v-model:country-code="contacto.countryCode"
            show-code-on-list
            @update="results = $event"
        />

        <label>Fecha de nacimiento:</label>
        <input type="date" required v-model="contacto.dateBirth">
        <div>
            <router-link          
            :to="{name: 'Contacts'}"        
            custom         
            v-slot="{ navigate }" >
                <button @click="addContact(contacto);navigate;" role="link" class="hey">
                    new +
                </button>
            </router-link>
        </div>
    </form>
    
</template>