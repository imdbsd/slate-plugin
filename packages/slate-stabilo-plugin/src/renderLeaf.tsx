import * as React from 'react'
import {DefaultLeaf, RenderLeafProps} from 'slate-react'
import Stabilo, {StabiloRenderLeafProps} from './Stabilo'

const renderLeaf = (props: StabiloRenderLeafProps) => {
  const leaf = props.leaf
  if (leaf.type === 'stabilo') {
    return <Stabilo {...props} />
  }
  return <DefaultLeaf {...props} />
}

export default renderLeaf
