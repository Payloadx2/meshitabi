<template>
  <div class="modal-area" v-show="foodDetail.visible">
    <div @click="hideDetail" id="modal-bg" class="modal-bg"></div>
    <div class="modal-wrapper">
      <div class="modal-headder clearfix">
        <p class="modal-title">{{ foodDetail.title }}</p>
        <button @click="hideDetail" id="modal-close" class="modal-close">
          ×
        </button>
      </div>
      <div class="food-detail">
        <div class="food-detail-img">
          <img :src="foodDetail.img" :alt="foodDetail.title" />
        </div>
      </div>
      <div class="near-food-container">
        <h3 class="near-food-title">近くのご飯</h3>
        <p class="near-foods">{{ foodDetail.nearFoodDiscription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
      foodDetail: function() {
          return this.$store.getters.foodDetail
      }
    },
    methods: {
        hideDetail: function() {
            return this.$store.commit('hideDetail')
        }
    },
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


.food-detail {
    margin-bottom: 4rem;
}

.food-detail-img {
    width: 90%;
    margin: 0 auto;
}

.food-detail-img img {
    width: 100%;
}

.near-food-container {
    padding: 1.4rem;
}
</style>