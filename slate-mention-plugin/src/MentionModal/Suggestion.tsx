import * as React from 'react'
import {insertMention} from '../commands'

export type SuggestionType = {
  label: string
  value: any
}

type Props = SuggestionType

const Suggestion: React.FC<Props> = (props) => {
  const {label, value} = props
  const handleOnClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault()
      console.log({label, value})
      insertMention()
    },
    [label, value]
  )
  return (
    <div className="mention-modal__suggestion" onClick={handleOnClick}>
      <span>{label}</span>
    </div>
  )
}

export default Suggestion
