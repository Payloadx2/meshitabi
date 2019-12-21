<template>
  <div>
    <li class="food-item clearfix">
      <button class="flag" @click="changeFlag" :class="{selected:food.flag}">
        <font-awesome-icon icon="flag" />
      </button>
      <span @click="showDetail">
        <span class="food">{{food.food}}</span>
        <span class="discription">
          <span class="point">・・・</span>
          <span class="locale">{{food.pref}}</span>
        </span>
      </span>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    blockIndex: Number,
    rowIndex: Number,
    food: Object,
  },
  methods: {
    changeFlag: function(){
      this.$store.commit('changeFlag',{
        blockIndex: this.blockIndex,
        rowIndex: this.rowIndex,
      })
    },
    showDetail: function(){
      this.$store.commit('showDetail',{
        blockIndex: this.blockIndex,
        rowIndex: this.rowIndex,
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
