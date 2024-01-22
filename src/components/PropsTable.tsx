import maps from '../propsMap'
import { map } from 'lodash-es'
import { h } from 'vue'

const PropsTable = (props: any, context: any) => {
  console.log('PropsTableTSX', props)
  return (
    <div class="props-tab">
      <h1>hello</h1>
      {map(props.props, (value, key) => {
        console.log(key)
        const { component, valueTransform, eventHandler, eventName } = maps[key]
        const TagName = component || 'a-input'
        const props = {
          value: valueTransform(value),
          onChange: (e: any) => {
            eventHandler(e, key)
          }
        }
        return <TagName {...props} />
      })}
    </div>
  )
}
