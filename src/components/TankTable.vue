<template>
<div class="table-container">
  <div class="controls-row">
    <form id="units" class="units">
      <div class="distances">
        <p>Distances:</p>
        <input type="radio" id="cm" name="distance_unit" value="cm" v-model="distUnit" checked>
        <label for="cm">cm</label>
        <input type="radio" id="in" name="distance_unit" value="in" v-model="distUnit">
        <label for="in">in</label>
      </div>
      <div class="weights">
        <p>Weights:</p>
        <input type="radio" id="kg" name="weight_unit" value="kg" v-model="weightUnit" checked>
        <label for="kg">kg</label>
        <input type="radio" id="lb" name="weight_unit" value="lb" v-model="weightUnit">
        <label for="lb">lb</label>
      </div>
      <div class="pressures">
        <p>Pressures:</p>
        <input type="radio" id="bar" name="pressure_unit" value="bar" v-model="pressureUnit" checked>
        <label for="bar">bar</label>
        <input type="radio" id="psi" name="pressure_unit" value="psi" v-model="pressureUnit">
        <label for="psi">psi</label>
      </div>
      <div class="volumes">
        <p>Volumes:</p>
        <input type="radio" id="l" name="volume_unit" value="l" v-model="volumeUnit" checked>
        <label for="l">l</label>
        <input type="radio" id="cuft" name="volume_unit" value="cuft" v-model="volumeUnit">
        <label for="cuft">ft<super>3</super></label>
      </div>
    </form>
  </div>
  <table class="table">
    <thead>
      <tr class="header-row">
        <th v-for="(value, key) in tableHeaderLabels" :key="key" @click="sortField = key">{{ value }}</th>
        
      </tr>
    </thead>
    <tbody>
      <table-row v-for="tank of tanks" :key="tank" :tankProperties="tank"></table-row>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { TankProperties } from '../types'
import TableRow from './TableRow.vue'
import { cmToIn, kgToLb, barToPsi, lToCuft } from '../util/unit-conversion';
export default defineComponent({
  name: "TankTable",
  props: {
    tankList: {
      type: Array as PropType<TankProperties[]>,
    }
  },
  components: {
    TableRow
  },
  data: () => {
    return {
      distUnit: "cm",
      weightUnit: "kg",
      pressureUnit: "bar",
      volumeUnit: "l",
      sortField: "",
      tableHeaderLabels: {
        private_label: "Private label",
        oem: "OEM",
        colloquial_name: "Colloquial_name",
        material: "Material",
        finish: "Finish",
        capacity: "Capacity",
        volume: "Volume",
        rated_pressure: "Rated pressure",
        manufacture_years: "Manufacture years",
        height: "Height",
        diameter: "Diameter",
        weight_empty: "Weight (empty)",
        weight_full: "Weight (full)",
        buoyancy_empty: "Buoyancy (empty)",
        buoyancy_full: "Buoyancy (full)",
        ree: "REE (cc)"
      }
    }
  },
  computed: {
    tanks: function(): TankProperties[] {
      const tanksParsed: TankProperties[] = [];
      if (this.tankList) {
        for (const refTank of this.tankList) {
          // clone the object so we're not editing the actual prop value
          const tank = {...refTank}
          tank.capacity = this.volumeUnit === "l" ? tank.capacity : lToCuft(tank.capacity);
          tank.volume = this.volumeUnit === "l" ? tank.volume : lToCuft(tank.volume);
          tank.rated_pressure = this.pressureUnit === "bar" ? tank.rated_pressure : barToPsi(tank.rated_pressure);
          tank.height = this.distUnit === "cm" ? tank.height : cmToIn(tank.height);
          tank.diameter = this.distUnit === "cm" ? tank.diameter : cmToIn(tank.diameter);
          tank.weight_empty = this.weightUnit === "kg" ? tank.weight_empty : kgToLb(tank.weight_empty);
          tank.weight_full = this.weightUnit === "kg" ? tank.weight_full : kgToLb(tank.weight_full);
          tank.buoyancy_empty = this.weightUnit === "kg" ? tank.buoyancy_empty : kgToLb(tank.buoyancy_empty);
          tank.buoyancy_full = this.weightUnit === "kg" ? tank.buoyancy_full : kgToLb(tank.buoyancy_full);
          tanksParsed.push(tank);
        }      
      }
      // TODO: make an actual typecheck method for this
      const sortableFields: string[] = [
        "private_label",
        "oem",
        "colloquial_name",
        "material",
        "finish",
        "capacity",
        "volume",
        "rated_pressure",
        "manufacture_years",
        "height",
        "diameter",
        "weight_empty",
        "weight_full",
        "buoyancy_empty",
        "buoyancy_full",
        "valve_type",
        "ree"
      ]
      if (sortableFields.includes(this.sortField)) {
        const sortBy = this.sortField as keyof TankProperties;
        tanksParsed.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
      }
      return tanksParsed;
    }
  }
});
</script>

<style lang="scss">
.table-container {
  width: calc(100vw - 80px);
  max-width: 1800px;
  margin: auto;
  outline: 2px solid grey;
}
.table{
  border-collapse: collapse;
  width: 100%;
  th {
    padding: 4px .6em;
    cursor: pointer;
    background-color: #ececec;
    &:hover {
      background-color: #e2e2e2
    }
  }
}
.controls-row {
  width: calc(100vw - 80px);
  max-width: 1800px;
}
.units {
  display: flex;
  width: 100%;
  flex: 1 1;
  justify-content: center;
  padding: .4em 0;
  div {
    padding: 0 1em;
    p {
      margin: 4px;
      display: inline;
    }
    input {
      margin: 0 0 0 8px;
    }
  }
}
</style>