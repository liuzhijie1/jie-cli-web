<template>
  <div class="props-table">
    <li v-for="(value, key) in props" :key="key">
      {{ key }}:
      <component
        v-if="maps[key].component === 'a-switch'"
        v-bind="extraProps[key]"
        :is="maps[key].component"
        :checked="maps[key].intialTransform(value)"
        @change="
          (e) => {
            // maps[key].eventHandler(e, key)
            handleCommit({
              key,
              value: maps[key].afterTransform(e)
            })
          }
        "
      />
      <component
        v-else
        :is="maps[key].component"
        v-bind="extraProps[key]"
        :value="maps[key].intialTransform(value)"
        @change="
          (e) => {
            // maps[key].eventHandler(e, key)
            handleCommit({
              key,
              value: maps[key].afterTransform(e)
            })
          }
        "
      />
    </li>
  </div>
</template>

<script lang="ts" setup>
import maps from '@/propsMap'
import { useGlobalDataStore } from '@/stores/globalData';
import defaults from '@/defaultProps'

const globalData = useGlobalDataStore();

const originProps = defineProps({
  type: {
    type: String,
    required: true
  },
  props: {
    type: Object,
    required: true
  }
})
const handleCommit = (data: any) => {
  globalData.updateValue(data);
}
const extraProps = defaults[originProps.type].extraProps || {}
</script>
