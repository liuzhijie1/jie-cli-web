<template>
  <a-collapse v-model:activeKey="currentKey">
    <a-collapse-panel v-for="item in editGroups" :key="item.text" :header="item.text">
      <props-table :props="item.props"></props-table>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { difference } from 'lodash-es'
import { computed, ref, type PropType } from 'vue'
import PropsTable from '../components/PropsTable.vue'

const props = defineProps({
  props: {
    type: Object,
    required: true
  },
  groups: {
    type: Array as PropType<GroupProps[]>,
    default: () => defaultEditGroups
  }
})
const currentKey = ref(props.groups.length ? props.groups[0].text : '')
const newGroups = computed(() => {
  const allNormalProps = defaultEditGroups.reduce((prev, current) => {
    return [...prev, ...current.items]
  }, [] as string[])
  const speicalProps = difference(Object.keys(props.props), allNormalProps)
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  currentKey.value = '基本属性'
  return [
    {
      text: '基本属性',
      items: speicalProps
    },
    ...props.groups
  ]
})

const editGroups = computed(() => {
  return newGroups.value.map((group) => {
    const propsMap = {} as { [key: string]: any }
    group.items.forEach((item) => {
      propsMap[item] = props.props[item]
    })
    return {
      ...group,
      props: propsMap
    }
  })
})
</script>

<script lang="ts">
interface GroupProps {
  text: string
  items: string[]
}
const defaultEditGroups: GroupProps[] = [
  {
    text: '事件功能',
    items: ['actionType', 'url']
  },
  {
    text: '尺寸',
    items: ['height', 'marginLeft', 'marginRight', 'marginTop']
  },
  {
    text: '边框',
    items: ['borderStyle', 'borderColor', 'borderWidth', 'borderRadius']
  },
  {
    text: '阴影与透明度',
    items: ['opacity', 'boxShadow']
  },
  {
    text: '尺寸与位置',
    items: ['position', 'left', 'top']
  }
]
</script>
