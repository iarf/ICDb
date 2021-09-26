<template>
<div id="app">
  <tank-table :tankList="tankList"></tank-table>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TankTable from "./components/TankTable.vue"
import tankList from "./assets/tank_info.json"
export default defineComponent({
  name: "App",
  components: {
    TankTable,
  },
  data:  () => {
    return { tankList }
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
