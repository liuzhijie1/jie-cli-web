<template>
  <div class="icon-template" @click.prevent="handleClick">
    <a-tooltip :title="title">
      <template v-slot:title>
        {{ tip }}
      </template>
      <a-button :type="checked ? 'primary' : ''" shape="circle">
        <template v-slot:icon>
          <component :is="iconName" />
        </template>
      </a-button>
    </a-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons-vue'

defineOptions({
  components: {
    BoldOutlined,
    ItalicOutlined,
    UnderlineOutlined
  }
})

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  tip: {
    type: String
  },
  title: {
    type: String
  }
})

const emits = defineEmits<{
  (type: 'change', data: any): void
}>()

const handleClick = () => {
  emits('change', !props.checked)
}
</script>
