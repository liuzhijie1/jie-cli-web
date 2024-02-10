import { useGlobalDataStore } from './stores/globalData'

interface PropDetailType {
  component: string
  eventName: string
  valueProp: string
  intialTransform: (v: any) => any
  afterTransform: (v: any) => any
  text: string
  subComponent?: string
  options?: { text: string; value: any }[]
  extraProps?: { [key: string]: any }
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

const numberToPxHandle = {
  ...defaultMap,
  component: 'a-input-number',
  intialTransform: (v: any) => parseInt(v),
  afterTransform: (e: any) => e + 'px'
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
    ...numberToPxHandle,
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
    afterTransform: (e: any) => (e ? 'bold' : 'normal'),
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
    text: '行高',
    extraProps: { min: 0, max: 10 }
  },
  textAlign: {
    ...defaultMap,
    text: '对齐',
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    afterTransform: (e: any) => e.target.value,
    options: [
      { value: 'left', text: '左' },
      { value: 'center', text: '中' },
      { value: 'right', text: '右' }
    ]
  },
  color: {
    ...defaultMap,
    component: 'color-picker',
    text: '文字颜色'
  },
  backgroundColor: {
    ...defaultMap,
    component: 'color-picker',
    text: '背景颜色'
  },
  actionType: {
    ...defaultMap,
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '点击',
    options: [
      { value: '', text: '无' },
      { value: 'to', text: '跳转到 URL' }
    ]
  },
  url: {
    ...defaultMap,
    text: '链接',
    afterTransform: (e: any) => e.target.value
  },
  // sizes
  height: {
    ...defaultMap,
    component: 'a-input-number',
    text: '高度',
    intialTransform: (v: any) => (v ? parseInt(v) : ''),
    afterTransform: (e: any) => (e ? `${e}px` : '')
  },
  marginLeft: {
    ...numberToPxHandle,
    text: '左边距'
  },
  marginRight: {
    ...numberToPxHandle,
    text: '右边距'
  },
  marginTop: {
    ...numberToPxHandle,
    text: '上边距'
  },
  // border types
  borderStyle: {
    ...defaultMap,
    text: '边框类型',
    component: 'a-select',
    subComponent: 'a-select-option',
    options: [
      { value: 'none', text: '无' },
      { value: 'solid', text: '实线' },
      { value: 'dashed', text: '破折线' },
      { value: 'dotted', text: '点状线' }
    ]
  },
  borderColor: {
    ...defaultMap,
    text: '边框颜色',
    component: 'color-picker'
  },
  borderWidth: {
    ...defaultMap,
    component: 'a-slider',
    intialTransform: (v: any) => parseInt(v),
    afterTransform: (e: any) => e + 'px',
    text: '边框宽度',
    extraProps: { min: 0, max: 20 }
  },
  borderRadius: {
    ...defaultMap,
    component: 'a-slider',
    intialTransform: (v: any) => parseInt(v),
    afterTransform: (e: any) => e + 'px',
    text: '边框圆角',
    extraProps: { min: 0, max: 20 }
  },
  // shadow and opacity
  opacity: {
    ...defaultMap,
    component: 'a-slider',
    text: '透明度',
    intialTransform: (v: any) => (v ? v * 100 : 100),
    afterTransform: (e: any) => e / 100,
    extraProps: { min: 0, max: 100, reverse: false }
  },
  position: {
    ...defaultMap,
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '定位',
    options: [
      { value: '', text: '默认' },
      { value: 'absolute', text: '绝对定位' }
    ]
  },
  left: {
    ...numberToPxHandle,
    text: '位置X'
  },
  top: {
    ...numberToPxHandle,
    text: '位置Y'
  }
}

export default mapPropsToComponents
