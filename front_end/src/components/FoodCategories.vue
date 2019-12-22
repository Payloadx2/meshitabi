<template>
  <div>
  <food-category
    v-for="(foodCategory,categoryIndex) in foodCategories"
    :key="foodCategory.foodCategoryCd"
    :category-index="categoryIndex"
    :food-category="foodCategory"
  ></food-category>
  <div class="footer-height"></div>
  </div>
</template>

<script>
import FoodCategory from "./FoodCategory";
export default {
  components: {
    FoodCategory
  },
  computed: {
    foodCategories: function() {
      return this.$store.getters.foodCategories;
    },
  },
};
</script>

<style scoped>
.footer-height {
    height: 10rem;
}

</style>
