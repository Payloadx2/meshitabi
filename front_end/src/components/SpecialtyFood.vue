<template>
  <div>
    <li class="food-item clearfix">
      <button class="flag" @click="changeFlag" :class="{selected:specialtyFood.flag}">
        <font-awesome-icon icon="flag" />
      </button>
      <span @click="showDetail">
        <span class="food">{{specialtyFood.foodName}}</span>
        <span class="discription">
          <span class="point">・・・</span>
          <span class="locale">{{specialtyFood.prefName}}</span>
        </span>
      </span>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    categoryIndex: Number,
    specialtyFoodIndex: Number,
    specialtyFood: Object,
  },
  methods: {
    changeFlag: function(){
      this.$store.commit('changeFlag',{
        categoryIndex: this.categoryIndex,
        specialtyFoodIndex: this.specialtyFoodIndex,
      })
    },
    showDetail: function(){
      this.$store.commit('showDetail',{
        categoryIndex: this.categoryIndex,
        specialtyFoodIndex: this.specialtyFoodIndex,
      })
    }
  },
}
</script>

<style scoped>
.food-title {
  padding: 1rem;
  font-size: 2rem;
  border-left: solid 0.8rem var(--main-bg-color);
  border-bottom: solid 0.3rem var(--main-bg-color);
}

.food-items {
  font-size: 1.6rem;
}

.food-item {
  border-bottom: dashed 0.12rem var(--main-bg-color);
  padding: 1rem;
}

.flag {
  display: inline-block;
  text-decoration: none;
  background: var(--sub-bg-color);
  color: var(--main-color);
  font-weight: bold;
  border-radius: 0.4rem;
  text-align: center;
  overflow: hidden;
  padding: 0.8rem;
  vertical-align: 15%;
  margin-right: 0.6rem;
}

.selected {
  color: rgb(252, 245, 28);
}

.discription {
  float: right;
  padding-top: 0.8rem;
}

.point {
  font-size: 1rem;
}

.locale {
  font-size: 1.4rem;
}
</style>
