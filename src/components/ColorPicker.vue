<template>
  <div class="lego-color-picker">
    <div class="native-color-container">
      <input type="color" :value="value" @change="onChange(($event as any)?.target?.value ?? '')" />
    </div>
    <ul class="picked-color-list">
      <li v-for="(item, key) in colors" :key="key" @click.prevent="onChange(item)">
        <div :style="{ backgroundColor: item }" class="color-item"></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({
  name: 'color-picker'
})

defineProps({
  value: {
    type: String
  },
  colors: {
    type: Array as PropType<string[]>,
    default: () => defaultColors
  }
})

const emits = defineEmits<{
  (type: 'change', data: any): void
}>()

const onChange = (color: string) => {
  emits('change', color)
}
</script>

<script lang="ts">
const defaultColors: String[] = [
  '#fff',
  '#f5222d',
  '#fa541c',
  '#fadb14',
  '#52c41a',
  '#13c2c2',
  '#1890ff',
  '#722ed1',
  '#8c8c8c',
  '#000000'
]
</script>

<style>
.lego-color-picker {
  display: flex;
}
.native-color-container {
  width: 40%;
}
.native-color-container input[type='color'] {
  width: 100%;
  cursor: pointer;
  height: 50%;
  border: 0;
  padding: 0;
  background-color: transparent;
}
.picked-color-list {
  padding: 0 0 0 5px;
  margin: 0;
  width: 60%;
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
}
.picked-color-list li {
  flex: 1;
  width: 20%;
  min-width: 20%;
  max-width: 20%;
}
.color-item {
  padding: 3px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
}
</style>
