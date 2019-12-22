<template>
  <div>
    <h2 class="food-title">{{foodCategory.foodCategoryName}}</h2>
    <specialty-food v-for="(specialtyFood,specialtyFoodIndex) in foodCategory.specialtyFoods" v-show="specialtyFood.visible" :key="specialtyFood.foodCd" :category-index="categoryIndex" :specialty-food-index="specialtyFoodIndex" :specialty-food="specialtyFood"></specialty-food>
  </div>
</template>

<script>
import SpecialtyFood from './SpecialtyFood'
export default {
  components: {
    SpecialtyFood,
  },
  props: {
    categoryIndex: Number,
    foodCategory: Object,
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
