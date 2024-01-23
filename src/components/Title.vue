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
  },
  lineHeight: {
    type: Number,
    default: 1
  },
  textAlign: {
    type: String,
    default: 'left'
  }
})

const stylePropsArr = ['fontSize', 'fontWeight', 'lineHeight', 'textAlign']

const styleProps = computed(() => pick(props, stylePropsArr))
</script>
<script lang="ts">
// export const defaultProps = {
//   text: '大标题',
//   fontSize: '30px',
//   fontWeight: 'normal'
// }
</script>

<style scoped>
h2 {
  margin-bottom: 0;
}
</style>
