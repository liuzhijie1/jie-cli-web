import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'


interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
}

export interface globalDataProps {
  components: ComponentData[]
  currentElement: string
}

export const useGlobalDataStore = defineStore('globalData', () => {
  const components = ref<any[]>([])
  const currentElement = ref('')
  const addComponentToEditor = (component: any) => {
    component.id = uuidv4();
    components.value.push(component)
  }
  const editProps = (index: string) => {
    currentElement.value = index
  }
  const getCurrentElement = computed(() =>
    components.value.find((component) => component.id === currentElement.value)
  )

  const updateValue = ({ key, value }: {key: string; value: any}) => {
    const currentComponent = components.value.find(
      (item) => item.id === currentElement.value
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
