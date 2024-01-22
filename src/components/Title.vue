<template>
  <h2 :style="styleProps">
    {{ text }}
  </h2>
</template>

<script lang="ts" setup>
import { pick } from 'lodash-es'
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '大标题'
  },
  fontSize: {
    type: String,
    default: '30px'
  },
  fontWeight: {
    type: String,
    default: 'normal'
  }
})

const stylePropsArr = ['fontSize', 'fontWeight']

const styleProps = computed(() => pick(props, stylePropsArr))
</script>
<script lang="ts">
export const defaultProps = {
  text: '大标题',
  fontSize: '30px',
  fontWeight: 'normal'
}
</script>
