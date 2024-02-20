<template>
  <div class="l-image-component">
    <img :src="imageSrc" alt="" :style="styleProps" @click.prevent="handleClick" />
  </div>
</template>

<script setup lang="ts">
import useStylePick from '@/hooks/useStylePick'
import { componentsDefaultProps, transformToComponentProps } from '@/defaultProps'

defineOptions({
  name: 'l-image'
})

const props = defineProps(transformToComponentProps(componentsDefaultProps['l-image'].props))

const styleProps = useStylePick(props)

const handleClick = () => {
  if (props.actionType && props.url) {
    window.location.href = props.url
  }
}

</script>

<style scoped>
.l-text-component h2, .l-text-component p {
  margin-bottom: 0;
}
.l-text-component button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>