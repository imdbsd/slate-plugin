import * as React from 'react'
import {RenderPlaceholderProps, useFocused} from 'slate-react'
import './styles.css'

const TypewriterPlaceholder = (props: RenderPlaceholderProps) => {
  const isFocus = useFocused()
  return (
    <div className="slate-typewriter-placeholder" {...props.attributes}>
      <span
        style={{borderColor: isFocus ? 'transparent !important' : 'orange'}}
      >
        {props.children}
      </span>
    </div>
  )
}

export const renderPlaceholder = (props: RenderPlaceholderProps) => (
  <TypewriterPlaceholder {...props} />
)

export default TypewriterPlaceholder
