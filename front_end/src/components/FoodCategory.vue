<template>
  <div>
    <h2 class="food-title" :class="{opened : foodCategory.opened}" @click="toggleFoodCategory">{{foodCategory.foodCategoryName}}</h2>
    <transition-group
      name="food-category"
    >
    <specialty-food v-show="foodCategory.opened" v-for="(specialtyFood,specialtyFoodIndex) in foodCategory.specialtyFoods" :key="specialtyFood.foodCd" :category-index="categoryIndex" :specialty-food-index="specialtyFoodIndex" :specialty-food="specialtyFood"></specialty-food>
    </transition-group>
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
  methods: {
    toggleFoodCategory: function() {
      this.$store.commit('toggleFoodCategory', {
        categoryIndex: this.categoryIndex,
      })
    },
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

.food-title::after {
  border: solid transparent;
  content: '';
  border-top-color: var(--main-bg-color);
  border-width: 1.0rem;
  float: right;
  transition: all 0.1s ease-in;
}

.food-title.opened::after{
  transform:rotateX(180deg);
  margin-top: -6px;
}

.food-items {
  font-size: 1.6rem;
}

.food-category-enter-active{
    animation-duration: 0.6s;
    animation-fill-mode: both;
    animation-name: food-category-open;
}
  
@keyframes food-category-open {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
