import { useGlobalDataStore } from './stores/globalData'

interface MapTypes {
  [key: string]: any
}

const mapPropsToComponents: MapTypes = {
  // every prop should have four props
  text: {
    component: 'a-input',
    eventName: 'change',
    valueTransform: (v: any) => v,
    eventHandler: (e: any, key: any) => {
      const globalData = useGlobalDataStore()
      globalData.updateValue({
        value: e.target.value,
        key
      })
    }
  },
  fontSize: {
    component: 'a-input-number',
    eventName: 'change',
    valueTransform: (v: any) => parseInt(v),
    eventHandler: (e: any, key: any) => {
      console.log(e, key, 'input-number')
      const globalData = useGlobalDataStore()
      globalData.updateValue({
        key,
        value: e + 'px'
      })
    }
  },
  fontWeight: {
    component: 'a-switch',
    eventName: 'change',
    valueTransform: (v: any) => v === 'bold',
    eventHandler: (e: any, key: any) => {
      const globalData = useGlobalDataStore()
      globalData.updateValue({
        key,
        value: e ? 'bold' : 'normal'
      })
    }
  }
}

export default mapPropsToComponents
