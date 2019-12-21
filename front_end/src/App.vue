<template>
  <div id="app">
    <v-header></v-header>
    <div class="main-container">
      <search-regions></search-regions>
      <food-blocks></food-blocks>
    </div>
    <tool-palette></tool-palette>
    <random-choise></random-choise>
    <food-detail></food-detail>
  </div>
</template>

<script>
import VHeader from './components/Header'
import SearchRegions from './components/SearchRegions'
import FoodBlocks from './components/FoodBlocks'
import ToolPalette from './components/ToolPalette'
import RandomChoise from './components/RandomChoise'
import FoodDetail from './components/FoodDetail'
export default {
  name: 'App',
  components: {
    VHeader,
    FoodBlocks,
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