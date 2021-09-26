<template>
  <div class="table-row">
    <div class="table-cell private-label-cell">
      {{ tankProperties.private_label }}
    </div>
    <div class="table-cell oem-cell">
      {{ tankProperties.oem }}
    </div>
    <div class="table-cell colloquial_name-cell">
      {{ tankProperties.colloquial_name }}
    </div>
    <div class="table-cell material-cell">
      {{ tankProperties.material }}
    </div>
    <div class="table-cell finish-cell">
      {{ tankProperties.finish }}
    </div>
    <div class="table-cell capacity-cell">
      {{ tankProperties.capacity }}
    </div>
    <div class="table-cell volume-cell">
      {{ tankProperties.volume }}
    </div>
    <div class="table-cell rated_pressure-cell">
      {{ tankProperties.rated_pressure }}
    </div>
    <div class="table-cell manufacture_years-cell">
      {{ tankProperties.manufacture_years }}
    </div>
    <div class="table-cell height-cell">
      {{ tankProperties.height }}
    </div>
    <div class="table-cell diameter-cell">
      {{ tankProperties.diameter }}
    </div>
    <div class="table-cell weight_empty-cell">
      {{ tankProperties.weight_empty }}
    </div>
    <div class="table-cell weight_full-cell">
      {{ tankProperties.weight_full }}
    </div>
    <div class="table-cell buoyancy_empty-cell">
      {{ tankProperties.buoyancy_empty }}
    </div>
    <div class="table-cell buoyancy_full-cell">
      {{ tankProperties.buoyancy_full }}
    </div>
    <div class="table-cell valve_type-cell">
      {{ tankProperties.valve_type }}
    </div>
    <div class="table-cell ree-cell">
      {{ tankProperties.ree }}
    </div>
    <div class="table-cell source-cell">
      {{ tankProperties._source }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { TankProperties } from "../types";
export default defineComponent({
  name: "TableRow",
  props: {
    tankProperties: {
      type: Object as () => TankProperties,
    },
  },
});
</script>
