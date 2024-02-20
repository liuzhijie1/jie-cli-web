<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      @click.prevent="onItemClick(item)"
      :key="index"
      class="component-item"
    >
      <component :is="item.name" v-bind="item.props" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LText from './LText.vue';
import { commonDefaultProps } from '@/defaultProps';

const componentList = [
  {
    name: 'l-text',
    props: {
      text: '大标题',
      ...commonDefaultProps,
      fontSize: '30px',
      fontWeight: 'bold',
      tag: 'h2'
    }
  }, 
  {
    name: 'l-text',
    props: {
      text: '正文内容',
      ...commonDefaultProps,
      tag: 'p'
    }
  },
  {
    name: 'l-text',
    props: {
      text: '链接内容',
      ...commonDefaultProps,
      color: '#1890ff',
      textDecoration: 'underline',
      tag: 'p'
    }
  },
  {
    name: 'l-text',
    props: {
      text: '按钮内容',
      ...commonDefaultProps,
      color: '#ffffff',
      backgroundColor: '#1890ff',
      borderWidth: '1px',
      borderColor: '#1890ff',
      borderRadius: '2px',
      tag: 'button'
    }
  }
]

defineOptions({
  components: {
    LText
  }
})

const emits = defineEmits<{
  (event: 'on-item-click', type: string): void
}>()

const list = computed(() => componentList)

const onItemClick = (type: any) => {
  emits('on-item-click', type);
}

</script>

<style scoped>
.component-item {
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
