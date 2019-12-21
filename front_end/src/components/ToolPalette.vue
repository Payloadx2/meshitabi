<template>
  <footer>
    <button class="common-style flag" @click="refineFoodByFlag">
      <font-awesome-icon icon="flag" /><br />絞り込む
    </button>
    <button class="common-style clear-flag" @click="clearRefineFoodByFlag">
      <font-awesome-icon icon="flag" /><br />絞り込み解除
    </button>
    <button class="common-style clear-flag" @click="clearAllFlag">
      <font-awesome-icon icon="flag" /><br />選択クリア
    </button>
    <button class="common-style random-box" @click="showRandomChoise(3)">
      <font-awesome-icon icon="box-open" /><br />ランダム3
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    refineFoodByFlag: function() {
      this.$store.commit('refineFoodByFlag')
    },
    clearRefineFoodByFlag: function() {
      this.$store.commit('clearRefineFoodByFlag')
    },
    clearAllFlag: function() {
      this.$store.commit('clearAllFlag')
    },
    showRandomChoise: function(randomCount) {
      this.$store.commit('showRandomChoise', {
        count: randomCount
      })
    },
  },
}
</script>

<style scoped>
footer {
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--main-color);
}

footer .common-style {
    background-color: var(--sub-bg-color);
    font-size: 1rem;
    width: 7.6rem;
    height: 7rem;
    border-radius: 0.5rem;
}

footer .flag {
    color: rgb(252, 245, 28);
}

footer .clear-flag {
    color: var(--main-color);
}

footer .random-box{
    color: var(--main-color);
}
</style>