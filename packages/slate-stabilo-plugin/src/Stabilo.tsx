import * as React from 'react'
import {RenderLeafProps} from 'slate-react'
import {StabiloType} from './types'

type StabiloTextType = {
  type: 'stabilo'
} & StabiloType
export type StabiloRenderLeafProps = RenderLeafProps & {
  leaf: Text & StabiloTextType
}

const DEFAULT_COLOR = '#ffeeba'
const DEFAULT_TEXT_COLOR = 'inherit'

const Stabilo = (props: StabiloRenderLeafProps) => {
  const color =
    typeof props.leaf.color === 'string' ? props.leaf.color : DEFAULT_COLOR
  const textColor =
    typeof props.leaf.textColor === 'string'
      ? props.leaf.textColor
      : DEFAULT_TEXT_COLOR
  return (
    <span
      {...props.attributes}
      style={{backgroundColor: color, color: textColor, padding: 0.5}}
    >
      {props.children}
    </span>
  )
}

export default Stabilo
