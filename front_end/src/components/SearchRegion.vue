<template>
  <ul class="region">
    <li>
      <input type="checkbox" v-model="regionCheck.checked" @change="toggleCheckAllPrefInReg" />
      <label>{{ regionCheck.regionName }}</label>
      <ul>
        <li class="pref" v-for="prefCheck in regionCheck.prefChecks" v-bind:key="prefCheck.prefCd">
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
    toggleCheckAllPrefInReg: function() {
      this.$store.commit('toggleCheckAllPrefInReg', {regionCheckIndex : this.regionCheckIndex})
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
  padding-left: 2rem;
}

</style>
