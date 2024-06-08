<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >Home</router-link
    >
    <!-- links -->
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex transition-colors items-center px-2 h-full hover:bg-purple-100"
      >
        Search Meals
      </router-link>

      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex transition-colors items-center px-2 h-full hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>

      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex transition-colors items-center px-2 h-full hover:bg-purple-100"
      >
        Meals by ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup></script>
