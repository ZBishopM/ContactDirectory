<script setup lang="ts">
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import {addContact,contactData,contactsData, getInitialFormData} from "../components/Contacts"
import { ref, toRefs,reactive } from 'vue';

const props = defineProps<{ id: number}>()
let {id} = toRefs(props);
let contacto=contactsData[id.value];

const editedContact:contactData = reactive(getInitialFormData(contacto))
const results =ref();

</script>

<template>
    <h2>Editar Contacto</h2>
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
    <form class="dark">
        <label>Nombres :</label>
        <input placeholder="Nombres" v-model="editedContact.name" required/>
    
        <label>Apellidos :</label>
        <input placeholder="Apellidos" v-model="editedContact.lastName" required>
        
        <label>Tipo de documento :</label>
        <select v-model="editedContact.docType" required>
            <option disabled value="">Elige un tipo de documento</option>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="EXT">Carnet de extranjería</option>
        </select>
        
        <label>Número de Documento :</label>
        <input placeholder="Número de documento" v-model.number="editedContact.docNumber" required>
        
        <label>Email :</label>
        <input placeholder="Correo electrónico" type="email" 
        required v-model="editedContact.email">
    
        <label>Teléfono:</label>
        <MazPhoneNumberInput
            v-model="editedContact.phone"
            v-model:country-code="editedContact.countryCode"
            show-code-on-list
            @update="results = $event"
        />

        <label>Fecha de nacimiento:</label>
        <input type="date" required v-model="editedContact.dateBirth">

        <div>
            <button @click="addContact(editedContact)" class="hey">+</button>
        </div>
    </form>
</template>