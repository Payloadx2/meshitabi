<template>
  <div class="search-region-container clearfix">
    <h3 @click="toggleSearchRegion" :class="{opened : searchByLocale.visible}" class="search-title">
      <font-awesome-icon icon="search-location" /> 地域で絞り込む
    </h3>
    <transition
      name="search-accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
    <div class="search-regions" v-show="searchByLocale.visible">
      <search-region
        class="search-region"
        v-for="(regionCheck,regionCheckIndex) in searchByLocale.regionChecks"
        :key="regionCheck.regionCd"
        :region-check-index="regionCheckIndex"
        :region-check="regionCheck"
      ></search-region>
      <button @click="refineFoodByLocale" class="search-regions-button">絞り込む</button>
    </div>
    </transition>
  </div>
</template>

<script>
import SearchRegion from './SearchRegion'
export default {
  components: {
    SearchRegion,
  },
  computed: {
    searchByLocale: function(){
      return this.$store.getters.searchByLocale
    },
  },
  methods: {
    toggleSearchRegion: function() {
      // this.visible = !this.visible
      this.$store.commit('toggleLocaleSearchBox')
    },
    refineFoodByLocale: function() {
      this.$store.commit('refineFoodByLocale')
    },
    beforeEnter: function(el) {
      el.style.height = '0'
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: function(el) {
      el.style.height = '0'
    },
  },
}
</script>

<style scoped>
.search-region-container {
  border: solid 0.2rem var(--main-bg-color);
  border-radius: 0.5rem;
  margin: 0;
}

.search-title {
  padding: 0.8rem 1rem 0.8rem 0.4rem;
  font-size: 1.2rem;
  background-color: var(--sub-bg-color);
  color: var(--main-color);
  cursor: pointer;
  margin: 0;
}

.search-title::after {
  border: solid transparent;
  content: '';
  border-top-color: var(--main-color);
  border-width: 0.7rem;
  float: right;
  transition: all 0.2s ease-in;
}

.search-title.opened::after{
      transform:rotateX(180deg);
      margin-top: -6px;
}

.search-region {
  /* display: inline-block; */
  vertical-align: top;
  width: 30rem;
}

.search-regions {
    overflow: hidden;
    transition: all 0.4s ease-in;
}

.search-accordion-enter-active{
    animation-duration: 0.6s;
    animation-fill-mode: both;
    animation-name: search-accordion-open;
}
.search-accordion-leave-active{
    animation-duration: 0.6s;
    animation-fill-mode: both;
    animation-name: search-accordion-close;
}
  
@keyframes search-accordion-open {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes search-accordion-close {
    0% {
        height: 400px;
    }

    100% {
        height: 0;
    }
}
.search-regions-button {
    color: var(--main-color);
    background-color: var(--sub-bg-color);
    padding: 0.6rem;
    float: right;
    margin: 2rem 0.8rem 1rem 0;
    border-radius: 0.6rem;
}
</style>
