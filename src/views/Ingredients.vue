<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 bg-white border-gray-200 w-full mb-8"
      placeholder="Search for ingredients"
      @change="searchIngredients"
    />

    <router-link
      v-for="ing of computedIngredients"
      :key="ing.id"
      class="bg-white rounded mb-3 shadow"
      :to="{
        name: 'byIngredient',
        params: { ingredient: ing.strIngredient },
      }"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ing.strIngredient }}</h3>
      <p>{{ ing.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../config/axiosClient";
import store from "../store";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
