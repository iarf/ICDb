<template>
<table class="table">
  <thead>
    <tr class="header-row">
      <th>Private label</th>
      <th>OEM</th>
      <th>Colloquial name</th>
      <th>Material</th>
      <th>Finish</th>
      <th>Capacity</th>
      <th>Volume</th>
      <th>Rated pressure</th>
      <th>Manufacture years</th>
      <th>Height</th>
      <th>Diameter</th>
      <th>Weight (empty)</th>
      <th>Weight (full)</th>
      <th>Buoyancy (empty)</th>
      <th>Buoyancy (full)</th>
      <th>REE (cc)</th>
    </tr>
  </thead>
  <tbody>
    <table-row v-for="tank of tankList" :key="tank" :tankProperties="tank"></table-row>
  </tbody>
</table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { TankProperties } from '../types'
import TableRow from './TableRow.vue'
export default defineComponent({
  name: "TankTable",
  props: {
    tankList: {
      type: Array as () => TankProperties[]
    }
  },
  components: {
    TableRow
  }
});
</script>

<style lang="scss">
.table{
  outline: 2px solid grey;
  width: calc(100vw - 80px);
  max-width: 1800px;
  margin: auto;
  border-collapse: collapse;
  th {
    padding: 4px .6em;
    cursor: pointer;
    background-color: #ececec;
    &:hover {
      background-color: #e2e2e2
    }
  }
}
</style>