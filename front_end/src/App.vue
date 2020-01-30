<template>
  <div id="app">
    <v-header></v-header>
    <div class="main-container">
      <div class="site-description">
        <site-description></site-description>
      </div>
      <twitter></twitter>
      <div class="search-regions">
        <search-regions></search-regions>
      </div>
      <food-categories></food-categories>
    </div>
    <tool-palette></tool-palette>
    <random-choise></random-choise>
    <food-detail></food-detail>
  </div>
</template>

<script>
import VHeader from './components/Header'
import SiteDescription from './components/SiteDescription'
import Twitter from './components/Twitter'
import SearchRegions from './components/SearchRegions'
import FoodCategories from './components/FoodCategories'
import ToolPalette from './components/ToolPalette'
import RandomChoise from './components/RandomChoise'
import FoodDetail from './components/FoodDetail'
import clipboard from 'clipboard';
export default {
  name: 'App',
  components: {
    VHeader,
    SiteDescription,
    Twitter,
    FoodCategories,
    SearchRegions,
    ToolPalette,
    RandomChoise,
    FoodDetail,
  },
  data () {
    return {
      clipBoard: null,
    }
  },
  mounted : function(){
    this.clipBoard = new clipboard('.clipcopy')
    this.clipBoard.on('success', function(e) {
      alert( 'クリップボードにコピーしました' )
      e.clearSelection()
    })
    this.clipBoard.on('error', function(e) {
      alert( 'コピー失敗' )
    })
  },
  created: function() {
    this.$store.dispatch('initialize',{
      trueFlagCds: this.$route.query.flag !== undefined ? this.$route.query.flag.split(',') : undefined,
      falseFlagVisibleCds : this.$route.query.fvis !== undefined ? this.$route.query.fvis.split(',') : undefined,
      falseLocaleVisibleCds : this.$route.query.lvis !== undefined ? this.$route.query.lvis.split(','): undefined,
      falseLocaleCheckCds :  this.$route.query.loc !== undefined ? this.$route.query.loc.split(',') : undefined,
    })
    // this.$store.dispatch('initializeHex',{
    //   flag: this.$route.query.f,
    //   localeCheck : this.$route.query.l,
    // })
  },
}
</script>

<style scoped>
  .main-container {
    padding: 1rem;
  }

  .site-description {
    margin-bottom: 2rem;
  }

  .search-regions {
    margin-bottom: 2rem;
  }

  .timeline {
    width: 34rem;
  }

  .follow-button {
    margin: 0 0 0 13rem;
  }

</style>