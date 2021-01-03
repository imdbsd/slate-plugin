import * as React from 'react'
import {RenderLeafProps} from 'slate-react'
import RenderLeaf from './RenderLeaf'
import {MENTION_LEAF} from './index'

const renderLeafFN = (
  props: RenderLeafProps
): null | React.ReactElement<RenderLeafProps> => {
  if (props.leaf.type === MENTION_LEAF) {
    return <RenderLeaf {...props} />
  }
  return null
}

export default renderLeafFN
