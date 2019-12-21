<template>
  <div>
  <food-block
    v-for="(foodBlock,blockIndex) in foodBlocks"
    :key="foodBlock.foodBlockCd"
    :block-index="blockIndex"
    :food-block="foodBlock"
  ></food-block>
  <div class="footer-height"></div>
  </div>
</template>

<script>
import FoodBlock from "./FoodBlock";
export default {
  components: {
    FoodBlock
  },
  computed: {
    foodBlocks: function() {
      return this.$store.getters.foodBlocks;
    },
  },
};
</script>

<style scoped>
.footer-height {
    height: 10rem;
}

</style>
