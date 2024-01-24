<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      @click.prevent="onItemClick(item)"
      :key="index"
      class="component-item"
    >
      <component :is="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LLink from './LLink.vue';
import LTitle from './LTitle.vue';
const componentList = ['l-title', 'l-link']

defineOptions({
  components: {
    LLink,
    LTitle
  }
})

const emits = defineEmits<{
  (event: 'on-item-click', type: string): void
}>()

const list = computed(() => componentList)

const onItemClick = (type: string) => {
  emits('on-item-click', type);
}

</script>

<style scoped>
.component-item {
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
