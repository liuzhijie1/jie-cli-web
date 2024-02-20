import { mapValues } from "lodash-es";

interface DefaultPropsType {
  [key: string]: {
    props: object;
    extraProps?: {
      [key: string]: any
    }
  }
}

export const commonDefaultProps = {
  // Basic props - font styles
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: 1,
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '#ffffff',
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  marginLeft: '0px',
  marginRight: '0px',
  marginTop: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: '',
  left: '0',
  top: '0'
}

export const componentsDefaultProps: DefaultPropsType = {
  'l-title': {
    props: {
      text: '大标题',
      ...commonDefaultProps,
      fontSize: '30px',
    },
    extraProps: {
      lineHeight: {
        min: 0,
        max: 10
      }
    }
  },
  'l-link': {
    props: {
      text: '百度链接',
      href: 'javascript:void()',
      fontSize: '15px'
    }
  }
}

export const transformToComponentProps = (props: {[key: string]: any}) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    }
  })
}

export default componentsDefaultProps;