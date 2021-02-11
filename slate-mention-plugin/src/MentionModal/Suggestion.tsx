import * as React from 'react'
import {RangeRef} from 'slate'
import {useEditor, useSlate} from 'slate-react'
import {insertMention} from '../commands'

export type SuggestionType = {
  label: string
  value: any
}

type Props = SuggestionType & {
  mentionAt: string
}

const Suggestion: React.FC<Props> = (props) => {
  const {label, value, mentionAt} = props
  const editor = useEditor()
  console.log('editor: ', editor.selection)
  const handleOnClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault()
      console.log({label, value})
      console.log('editor on click', editor.selection)
      insertMention(editor, mentionAt, label, value)
    },
    [label, value, editor]
  )
  return (
    <div className="mention-modal__suggestion" onClick={handleOnClick}>
      <span>{label}</span>
    </div>
  )
}

export default Suggestion
