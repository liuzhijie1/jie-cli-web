import { useGlobalDataStore } from './stores/globalData'

interface MapTypes {
  [key: string]: any
}

const defaultMap = {
  component: 'a-input',
  eventName: 'change',
  intialTransform: (v: any) => v,
  afterTransform: (e: any) => e
}

const mapPropsToComponents: MapTypes = {
  // every prop should have four props
  text: {
    ...defaultMap,
    afterTransform: (e: any) => e.target.value
  },
  href: {
    ...defaultMap,
    afterTransform: (e: any) => e.target.value
  },
  fontSize: {
    component: 'a-input-number',
    eventName: 'change',
    intialTransform: (v: any) => parseInt(v),
    afterTransform: (e: any) => e + 'px'
    // valueTransform: (v: any) => parseInt(v),
    // eventHandler: (e: any, key: any) => {
    //   console.log(e, key, 'input-number')
    //   const globalData = useGlobalDataStore()
    //   globalData.updateValue({
    //     key,
    //     value: e + 'px'
    //   })
    // }
  },
  fontWeight: {
    component: 'a-switch',
    eventName: 'change',
    intialTransform: (v: any) => v === 'bold',
    afterTransform: (e: any) => e ? 'bold' : 'normal'
    // valueTransform: (v: any) => v === 'bold',
    // eventHandler: (e: any, key: any) => {
    //   const globalData = useGlobalDataStore()
    //   globalData.updateValue({
    //     key,
    //     value: e ? 'bold' : 'normal'
    //   })
    // }
  },
  lineHeight: {
    ...defaultMap,
    component: 'a-slider'
  }
}

export default mapPropsToComponents
