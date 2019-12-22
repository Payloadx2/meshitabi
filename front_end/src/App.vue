<template>
  <div id="app">
    <v-header></v-header>
    <div class="main-container">
      <search-regions></search-regions>
      <food-categories></food-categories>
    </div>
    <tool-palette></tool-palette>
    <random-choise></random-choise>
    <food-detail></food-detail>
  </div>
</template>

<script>
import VHeader from './components/Header'
import SearchRegions from './components/SearchRegions'
import FoodCategories from './components/FoodCategories'
import ToolPalette from './components/ToolPalette'
import RandomChoise from './components/RandomChoise'
import FoodDetail from './components/FoodDetail'
export default {
  name: 'App',
  components: {
    VHeader,
    FoodCategories,
    SearchRegions,
    ToolPalette,
    RandomChoise,
    FoodDetail,
  },
}
</script>

<style scoped>
  .main-container {
    padding: 1rem;
  }
</style>