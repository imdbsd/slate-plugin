import * as React from 'react'
import {RenderLeafProps} from 'slate-react'

const RenderLeaf: React.FC<RenderLeafProps> = (props) => {
  console.log({props})
  return (
    <span style={{color: 'blue'}} {...props.attributes}>
      {props.children}
    </span>
  )
}

export default RenderLeaf
