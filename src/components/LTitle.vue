<template>
  <h2 :style="styleProps" @click.prevent="handleClick">
    {{ text }}
  </h2>
</template>

<script lang="ts" setup>
import { pick } from 'lodash-es'
import { computed } from 'vue'
import useStylePick from '@/hooks/useStylePick'
import { componentsDefaultProps, transformToComponentProps } from '@/defaultProps'

// Props
// {
//   text: {
//     type: String,
//     default: '大标题'
//   },
//   fontSize: {
//     type: String,
//     default: '30px'
//   },
//   fontWeight: {
//     type: String,
//     default: 'normal'
//   },
//   lineHeight: {
//     type: Number,
//     default: 1
//   },
//   textAlign: {
//     type: String,
//     default: 'left'
//   }
// }

const props = defineProps(transformToComponentProps(componentsDefaultProps['l-title'].props))

// const stylePropsArr = ['fontSize', 'fontWeight', 'lineHeight', 'textAlign']

// const styleProps = computed(() => pick(props, stylePropsArr))
const styleProps = useStylePick(props)

const handleClick = () => {
  if (props.actionType && props.url) {
    window.location.href = props.url;
  }
}
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
