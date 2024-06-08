<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="px-3 py-2">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        perferendis eum non culpa autem,
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const props = defineProps({ meal: {} });
</script>
