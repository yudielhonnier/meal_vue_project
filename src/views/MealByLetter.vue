<template>
  <div class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPGRSTUVWXYZ".split("");

const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
