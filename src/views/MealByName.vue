<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 bg-white border-gray-200 w-full"
      placeholder="Search for meal"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import axiosClient from "../config/axiosClient";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
