<template>
  <tr class="table-row">
    <td class="table-cell private-label-cell">
      {{ tankProperties.private_label }}
    </td>
    <td class="table-cell oem-cell">
      {{ tankProperties.oem }}
    </td>
    <td class="table-cell colloquial_name-cell">
      {{ tankProperties.colloquial_name }}
    </td>
    <td class="table-cell material-cell">
      {{ tankProperties.material }}
    </td>
    <td class="table-cell finish-cell">
      {{ tankProperties.finish }}
    </td>
    <td class="table-cell capacity-cell">
      {{ tankProperties.capacity }}
    </td>
    <td class="table-cell volume-cell">
      {{ tankProperties.volume }}
    </td>
    <td class="table-cell rated_pressure-cell">
      {{ tankProperties.rated_pressure }}
    </td>
    <td class="table-cell manufacture_years-cell">
      {{ tankProperties.manufacture_years }}
    </td>
    <td class="table-cell height-cell">
      {{ tankProperties.height }}
    </td>
    <td class="table-cell diameter-cell">
      {{ tankProperties.diameter }}
    </td>
    <td class="table-cell weight_empty-cell">
      {{ tankProperties.weight_empty }}
    </td>
    <td class="table-cell weight_full-cell">
      {{ tankProperties.weight_full }}
    </td>
    <td class="table-cell buoyancy_empty-cell">
      {{ tankProperties.buoyancy_empty }}
    </td>
    <td class="table-cell buoyancy_full-cell">
      {{ tankProperties.buoyancy_full }}
    </td>
    <td class="table-cell ree-cell">
      {{ tankProperties.ree }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { TankProperties } from "../types";
export default defineComponent({
  name: "TableRow",
  props: {
    tankProperties: {
      type: Object as PropType<TankProperties>,
    },
  },
});
</script>

<style lang="scss">
.table-row {
    transition: color .2s ease;
    &:hover {
        background-color: #f7f5f3;
    }
    &:nth-child(even) {
        background-color: #fafaff;
        &:hover {
            background-color: #fcfcfa;
        }
    }
    td {
        border: none;
        padding: 4px .6em
    }
}
</style>