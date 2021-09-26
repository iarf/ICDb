<template>
<div id="app">
  <table-row v-for="tank in tankInfo" :key="tank._id" :tankProperties="tank"></table-row>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableRow from "./components/TableRow.vue";
import tankInfo from "./assets/tank_info.json"
export default defineComponent({
  name: "App",
  components: {
    TableRow,
  },
  data:  () => {
    return { tankInfo }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
