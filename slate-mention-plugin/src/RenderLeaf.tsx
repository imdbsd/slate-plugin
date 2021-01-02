import * as React from 'react'
import {RenderLeafProps} from 'slate-react'
import {MENTION_LEAF} from './index'

const RenderLeaf: React.FC<RenderLeafProps> = (props) => {
  console.log({props})
  if (props.leaf.type === MENTION_LEAF) {
    return (
      <span style={{color: 'blue'}} {...props.attributes}>
        {props.children}
      </span>
    )
  }
  return null
}

export default RenderLeaf
