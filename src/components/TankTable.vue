<template>
<div class="table">
    <table-row v-for="tank of tankList" :key="tank" :tankProperties="tank"></table-row>
</div>
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

<style lang="sass">
    
</style>