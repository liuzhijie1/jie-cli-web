<template>
  <div class="list-wrapper" @click="itemClick">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

// defineOptions({ name: 'ListWrapper' })
const emit = defineEmits<{
  (event: 'item-click'): void
}>();

const itemClick = () => {
  emit('item-click')
}
</script>
