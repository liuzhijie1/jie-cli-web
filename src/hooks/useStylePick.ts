import { pick, without } from 'lodash-es'
import { computed } from 'vue'
// const defaultStyles = ['fontSize', 'fontWeight', 'textAlign', 'lineHeight', 'color']
import { commonDefaultProps } from '../defaultProps'

const defaultStyles = without(Object.keys(commonDefaultProps), 'actionType', 'url', 'text')

const useStylePick = (props: Readonly<any>, pickStyles = defaultStyles) => {
  return computed(() => pick(props, pickStyles))
}

export default useStylePick
