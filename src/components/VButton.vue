<template>
  <button :style="styleProps">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { pick } from 'lodash-es'
import { computed, defineProps } from 'vue'

const TitleProps = {
  text: {
    type: String,
    default: '按钮'
  },
  fontSize: {
    type: String,
    default: '30px'
  }
}

const defaultProps = {
  text: 'Hello world',
  fontSize: '30px'
}

const props = defineProps({
  text: {
    type: String,
    default: '按钮'
  },
  fontSize: {
    type: String,
    default: '30px'
  }
})

const stylePropsArr = ['fontSize']

const styleProps = computed(() => pick(props, stylePropsArr))
</script>
