<template>
  <div class="edit-wrapper" @click="itemClick" :class="{ active: active }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

// defineOptions({
//   name: 'ListWrapper'
// })

const props = defineProps({
  itemKey: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits<{
  (event: 'edit', data: any): void
}>()

const itemClick = () => {
  emits('edit', props.itemKey)
}
</script>

<style>
.edit-wrapper {
  padding: 5px;
  border: 1px dotted #efefef;
  cursor: pointer;
}
.edit-wrapper.active {
  border: 1px solid #1890ff;
}
</style>
