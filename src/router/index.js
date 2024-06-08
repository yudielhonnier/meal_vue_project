import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealByName from "../views/MealByName.vue";
import MealByLetter from "../views/MealByLetter.vue";
import MealByIngredient from "../views/MealByIngredient.vue";
import MealDetails from "../views/MealDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Ingredients from "../views/Ingredients.vue";



const routes = [

    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealByName
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealByIngredient
            },
            {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: MealDetails
            },
        ],
    },
    {
        path: '/guest',
        name: 'guest',
        component: GuestLayout
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;