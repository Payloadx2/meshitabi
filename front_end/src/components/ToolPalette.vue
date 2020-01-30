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
    <button class="common-style share-link clipcopy" v-bind:data-clipboard-text="shareLink">
      <font-awesome-icon icon="link" /><br />共有用URL
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
  computed: {
    shareLink: function() {
      return this.$store.getters.shareLink
      // return this.$store.getters.shareLinkHex
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
    width: 6.6rem;
    padding: 0;
    height: 7rem;
    border-radius: 0.5rem;
    margin: 0;
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

footer .share-link{
    color: var(--main-color);
}
</style>