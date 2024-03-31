import { createRouter,createWebHistory } from "vue-router";
import Contacts from "../views/Contacts.vue";
import EditContact from "../views/EditContact.vue";
import AddContact from "../views/AddContact.vue";

const routes =[
    {
        path: '/',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/add',
        name: 'AddContact',
        //esto tiene que cambiar por ADDVIEW
        component:AddContact
        
        //lazyLOAD
        //component:()=>import('../components/AddContactForm.vue')
        
        //debe existir un editdontact
    },
    {
        path: '/edit/:id',
        name: 'EditContact',
        //esto tiene que cambiar por ADDVIEW
        component:EditContact,
        props: true
        
        //lazyLOAD
        //component:()=>import('../components/AddContactForm.vue')
        
        //debe existir un editdontact
    }
]

const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router