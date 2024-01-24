<template>
  <div>
    <a :style="styleProps" :href="href" @click="$event.preventDefault()">
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { pick } from 'lodash-es'
import { computed } from 'vue'
import useStylePick from '@/hooks/useStylePick';
import { componentsDefaultProps, transformToComponentProps } from '@/defaultProps'

// Props
// {
//   text: {
//     type: String,
//     default: '百度链接'
//   },
//   href: {
//     type: String,
//     default: 'http://abc.com'
//   },
//   fontSize: {
//     type: String,
//     default: '15px'
//   }
// }

const props = defineProps(transformToComponentProps(componentsDefaultProps['l-link'].props))

// const stylePropsArr = ['fontSize']

// const styleProps = computed(() => pick(props, stylePropsArr))
const styleProps = useStylePick(props)
</script>
