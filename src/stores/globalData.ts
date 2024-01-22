import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface globalDataProps {
  components: any[]
  currentElement: number
}

export const useGlobalDataStore = defineStore('globalData', () => {
  const components = ref<any[]>([])
  const currentElement = ref(-1)
  const addComponentToEditor = (component: any) => {
    components.value.push(component)
  }
  const editProps = (index: number) => {
    currentElement.value = index
  }
  const getCurrentElement = computed(() =>
    components.value.find((component, index) => index === currentElement.value)
  )

  const updateValue = ({ key, value }) => {
    const currentComponent = components.value.find(
      (item, index) => index === currentElement.value
    ) as any
    if (currentComponent) {
      // if (typeof value === 'number') {
      //   currentComponent.props[key] = value + 'px'
      // } else {
      //   currentComponent.props[key] = value
      // }
      currentComponent.props[key] = value
    }
  }

  return {
    components,
    currentElement,
    addComponentToEditor,
    editProps,
    getCurrentElement,
    updateValue
  }
})
