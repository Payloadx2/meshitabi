<template>
  <div class="modal-area" v-show="randomChoiseResult.visible">
    <div @click="hideRandomChoise" id="modal-bg" class="modal-bg"></div>
    <div class="modal-wrapper">
      <div class="modal-headder clearfix">
        <p class="modal-title">{{ randomChoiseResult.title }}</p>
        <button @click="hideRandomChoise" id="modal-close" class="modal-close">
          ×
        </button>
      </div>
      <ul class="random-choise-result">
        <li
          v-for="specialtyFood in randomChoiseResult.specialtyFoods"
          :key="specialtyFood.foodItem.foodCd"
          class="food-item clearfix"
        >
          <button @click="changeFlag(specialtyFood.categoryIndex, specialtyFood.specialtyFoodIndex)" :class="{ selected: specialtyFood.foodItem.flag }" class="flag">
            <font-awesome-icon icon="flag" />
          </button>
          <span>
            <span class="food">{{ specialtyFood.foodItem.foodName }}</span>
            <span class="discription">
              <span class="point">・・・</span>
              <span class="locale">{{ specialtyFood.foodItem.prefName }}</span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
      randomChoiseResult: function() {
          return this.$store.getters.randomChoiseResult
      },
  },
  methods: {
    hideRandomChoise: function() {
      this.$store.commit("hideRandomChoise")
    },
    changeFlag: function(categoryIndex, specialtyFoodIndex) {
        return this.$store.commit('changeFlag',
            {
                categoryIndex: categoryIndex,
                specialtyFoodIndex: specialtyFoodIndex,
            }
        )
    },
  }
}
</script>

<style scoped>
.modal-area {
    /* display: none; */
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(30, 30, 30, 0.5);
}

.modal-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 50rem;
    padding: 0;
    background-color: #fff;
}

.modal-headder {
    color: var(--main-color);
    background-color: var(--main-bg-color);
    height: 3rem;
    width: 100%;
    margin-bottom: 2rem;
}

.modal-title {
    margin: 0;
    height: 100%;
    padding-left: 1rem;
    width: 80%;
    font-size: 1.8rem;
    text-align: left;
    float: left;
    line-height: 3rem;
}

.modal-close {
    color: var(--main-color);
    background-color: transparent;
    /* displayはアプリ処理でblockに指定 */
    /* display: none;  */
    display: block;
    height: 100%;
    font-size: 3rem;
    line-height: 3rem;
    width: 10%;
    padding: 0;
    float: right;
    cursor: pointer;
}

.random-choise-result {
    padding: 0;
}

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
