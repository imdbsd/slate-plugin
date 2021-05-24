import * as React from 'react'
import {RenderPlaceholderProps, useFocused} from 'slate-react'
import './styles.css'

let focusRef = false

const TypewriterPlaceholder = (props: RenderPlaceholderProps) => {
  const isEditorFocus = useFocused()

  React.useEffect(() => {
    if (isEditorFocus) {
      focusRef = isEditorFocus
    }
  }, [isEditorFocus])

  const focus = focusRef || isEditorFocus ? 'focus' : ''

  return (
    <div
      className={`slate-typewriter-placeholder ${focus}`}
      {...props.attributes}
    >
      <p className={`slate-typewriter-animate ${focus}`}>
        <span>{props.children}</span>
      </p>
    </div>
  )
}

export const renderPlaceholder = (props: RenderPlaceholderProps) => (
  <TypewriterPlaceholder {...props} />
)

export default TypewriterPlaceholder
