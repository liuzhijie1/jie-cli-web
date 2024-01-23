import { useGlobalDataStore } from './stores/globalData'

interface PropDetailType {
  component: string;
  eventName: string;
  valueProp: string;
  intialTransform: (v: any) => any;
  afterTransform: (v: any) => any;
  text: string;
  subComponents?: string,
  options?: {text: string; value: any}[];
}
interface MapTypes {
  [key: string]: PropDetailType
}

const defaultMap = {
  component: 'a-input',
  eventName: 'change',
  valueProp: 'value',
  intialTransform: (v: any) => v,
  afterTransform: (e: any) => e
}

const mapPropsToComponents: MapTypes = {
  // every prop should have four props
  text: {
    ...defaultMap,
    afterTransform: (e: any) => e.target.value,
    text: '文本'
  },
  href: {
    ...defaultMap,
    afterTransform: (e: any) => e.target.value,
    text: '链接'
  },
  fontSize: {
    ...defaultMap,
    component: 'a-input-number',
    intialTransform: (v: any) => parseInt(v),
    afterTransform: (e: any) => e + 'px',
    text: '字号'
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
    ...defaultMap,
    component: 'a-switch',
    valueProp: 'checked',
    intialTransform: (v: any) => v === 'bold',
    afterTransform: (e: any) => e ? 'bold' : 'normal',
    text: '是否加粗'
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
    component: 'a-slider',
    text: '行高'
  },
  textAlign: {
    ...defaultMap,
    text: '对齐',
    component: 'a-radio-group',
    subComponents: 'a-radio-button',
    afterTransform: (e: any) => e.target.value,
    options: [
      {value: 'left', text: '左'},
      {value: 'center', text: '中'},
      {value: 'right', text: '右'},
    ]
  }
}

export default mapPropsToComponents
