import * as React from 'react'
import {DefaultLeaf, RenderLeafProps} from 'slate-react'
import Stabilo from './Stabilo'

const renderLeaf = (props: RenderLeafProps) => {
  if (props.leaf.type === 'stabilo') {
    return <Stabilo {...props} />
  }
  return <DefaultLeaf {...props} />
}

export default renderLeaf
