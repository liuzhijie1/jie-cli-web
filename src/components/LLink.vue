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
    default: '百度链接'
  },
  href: {
    type: String,
    default: 'http://abc.com'
  },
  fontSize: {
    type: String,
    default: '15px'
  }
})

const stylePropsArr = ['fontSize']

const styleProps = computed(() => pick(props, stylePropsArr))
</script>
