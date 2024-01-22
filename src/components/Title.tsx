import { pick } from 'lodash-es'


export const TitleProps = {
  text: {
    type: String,
    default: '大标题'
  },
  fontSize: {
    type: String,
    default: '30px'
  },
  fontWeight: {
    type: String,
    default: 'normal'
  }
}

// default props for Title component
export const defaultProps = {
  text: '大标题',
  fontSize: '30px',
  fontWeight: 'normal'
}

export const stylePropsArr = ['fontSize', 'fontWeight']

const Title = (props: any, context: any) => {
  console.log(props, '111')
  const mergeProps = { ...defaultProps, ...props}
  const styleProps = pick(mergeProps, stylePropsArr)
  console.log('mergeProps', mergeProps)
  console.log('styleProps', styleProps)
  return (
    <h2
      style={styleProps}
      onClick={() => {
        context.emit('item-click', {
          name: 'Title',
          props: {
            ...mergeProps
          }
        })
      }}
    >
      {props.text || mergeProps.text}
    </h2>
  )
}

export default Title;