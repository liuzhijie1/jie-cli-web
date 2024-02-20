<template>
  <div class="edit-wrapper" @click="itemClick" :class="{ active: active }" :style="styleProps" :draggable="true" @dragstart="handleDragStart">
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

const handleDragStart = (e: DragEvent) => {
  const currentElement = e.currentTarget as HTMLElement
  currentElement.style.backgroundColor = 'yellow'
  console.log(e.clientX)
  console.log(e.clientY)
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
.edit-wrapper h2 {
  position: static !important;
}
</style>
