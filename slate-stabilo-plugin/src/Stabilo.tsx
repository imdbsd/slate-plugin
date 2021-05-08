import * as React from 'react'
import {RenderLeafProps} from 'slate-react'

export type Props = RenderLeafProps

const DEFAULT_COLOR = '#ffeeba'
const DEFAULT_TEXT_COLOR = 'inherit'

const Stabilo = (props: Props) => {
  const color =
    typeof props.leaf.color === 'string' ? props.leaf.color : DEFAULT_COLOR
  const textColor =
    typeof props.leaf.textColor === 'string'
      ? props.leaf.textColor
      : DEFAULT_TEXT_COLOR
  return (
    <span
      {...props.attributes}
      style={{backgroundColor: color, color: textColor, padding: 4}}
    >
      {props.children}
    </span>
  )
}

export default Stabilo
