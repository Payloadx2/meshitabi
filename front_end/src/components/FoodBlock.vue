<template>
  <div>
    <h2 class="food-title">{{foodBlock.foodTitle}}</h2>
    <food-row v-for="(food,rowIndex) in foodBlock.foodRows" v-show="food.visible" :key="food.foodCd" :block-index="blockIndex" :row-index="rowIndex" :food="food"></food-row>
  </div>
</template>

<script>
import FoodRow from './FoodRow'
export default {
  components: {
    FoodRow,
  },
  props: {
    blockIndex: Number,
    foodBlock: Object,
  },
}
</script>

<style scoped>
.food-title {
  padding: 1rem;
  font-size: 2rem;
  border-left: solid 0.8rem var(--main-bg-color);
  border-bottom: solid 0.3rem var(--main-bg-color);
  margin: 0;
}

.food-items {
  font-size: 1.6rem;
}
</style>
