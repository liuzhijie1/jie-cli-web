<template>
  <div class="edit-wrapper" @click="itemClick" :class="{ active: active }" :style="styleProps">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import useStylePick from '@/hooks/useStylePick';

// defineOptions({
//   name: 'ListWrapper'
// })

const props = defineProps({
  itemKey: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  props: {
    type: Object
  }
})

const emits = defineEmits<{
  (event: 'edit', data: any): void
}>()

const itemClick = () => {
  emits('edit', props.itemKey)
}

const styleProps = useStylePick(props.props || {}, ['position', 'top', 'left'])

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
.edit-wrapper h2 {
  position: static !important;
}
</style>
