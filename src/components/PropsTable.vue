<template>
  <div class="props-table">
    {{ type }}
    <li v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span class="label">{{ value.text }}:</span>
      <div :class="`prop-component component-${value.component}`">
        <component
          v-if="!value.options"
          :is="value.component"
          v-bind="value.extraProps"
          :[value.valueProp]="value.value"
          v-on="value.events"
        />
        <component
          v-else
          :is="value.component"
          v-bind="value.extraProps"
          :[value.valueProp]="value.value"
          v-on="value.events"
        >
          <component :is="value.subComponents" v-for="(option, k) in value.options" :value="option.value" :key="k">
            {{ option.text }}
          </component>
        </component>
      </div>
      <!-- {{ key }}:
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
      /> -->
    </li>
  </div>
</template>

<script lang="ts" setup>
import maps from '@/propsMap'
import { useGlobalDataStore } from '@/stores/globalData'
import defaults from '@/defaultProps'
import { computed } from 'vue'
import { map } from 'lodash-es'

const globalData = useGlobalDataStore()

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
  globalData.updateValue(data)
}
const extraProps = computed(() => defaults[originProps.type].extraProps || {})
const finalProps = computed(() => {
  return map(originProps.props, (value, key) => {
    const {
      component,
      intialTransform,
      afterTransform,
      eventName,
      text,
      valueProp,
      options,
      subComponents
    } = maps[key]
    return {
      component,
      text,
      value: intialTransform(value),
      valueProp,
      extraProps: extraProps,
      events: {
        [eventName]: (e: any) => {
          console.log('change', key, e)
          handleCommit({
            key,
            value: afterTransform(e)
          })
        }
      },
      options,
      subComponents
    }
  })
})
</script>
<style>
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.label {
  margin-right: 20px;
}
.component-a-slider {
  width: 80%;
}
</style>
