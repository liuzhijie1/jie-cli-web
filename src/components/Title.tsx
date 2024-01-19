import { pick } from 'lodash-es'

// default props for Title component
export const defaultProps = {
  text: 'Hello World',
  fontSize: '30px'
}

export const stylePropsArr = ['fontSize']

const Title = (props: any, context: any) => {
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
      {props.text}
    </h2>
  )
}

export default Title;