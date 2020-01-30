<template>
  <ul class="region">
    <li>
      <input type="checkbox" v-model="regionCheck.checked" @change="toggleRegionCheck" />
      <label>{{ regionCheck.regionName }}</label>
      <ul>
        <li class="pref" v-for="prefCheck in regionCheck.prefChecks" v-bind:key="prefCheck.prefCd" @change="togglePrefCheck">
          <input type="checkbox" v-model="prefCheck.checked" />
          <label>{{ prefCheck.prefName }}</label>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    regionCheckIndex: Number,
    regionCheck: Object
  },
  methods: {
    toggleRegionCheck: function() {
      this.$store.commit('toggleCheckAllPrefInReg', {regionCheckIndex : this.regionCheckIndex})
      this.$store.commit('refineFoodByLocale')
    },
    togglePrefCheck: function() {
      this.$store.commit('refineFoodByLocale')
    }
  },
};
</script>

<style scoped>
.region {
  padding: 0;
}

.pref {
  display: inline;
}

ul {
  padding-left: 2.4rem;
}

</style>
