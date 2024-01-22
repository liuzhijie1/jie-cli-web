<template>
  <div class="props-table">
    <li v-for="(value, key) in props" :key="key">
      {{ key }}:
      <component
        v-if="maps[key].component === 'a-switch'"
        :is="maps[key].component"
        :checked="maps[key].valueTransform(value)"
        @change="
          (e) => {
            maps[key].eventHandler(e, key)
          }
        "
      />
      <component
        v-else
        :is="maps[key].component"
        :value="maps[key].valueTransform(value)"
        @change="(e) => maps[key].eventHandler(e, key)"
      />
    </li>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import maps from '@/propsMap'
defineProps({
  props: {
    type: Object,
    required: true
  }
})
</script>
