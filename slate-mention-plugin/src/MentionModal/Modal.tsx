import * as React from 'react'
import {useEditor} from 'slate-react'
import useFetchSuggestions from './useFetchSuggestions'
import Loader from './Loader'
import Suggestion, {SuggestionType} from './Suggestion'
import './styles.css'
import {Editor} from 'slate'

export type FetchFN = (mentionAt: string) => Promise<SuggestionType[]>

export type Props = {
  fetchSuggestion: FetchFN
}

const Modal: React.FC<Props & {mentionAt: string}> = (props) => {
  const editor = useEditor()
  const mentionPathRef = React.useMemo(() => {
    if (editor.selection) {
      return Editor.rangeRef(
        editor,
        {
          anchor: editor.selection.anchor,
          focus: editor.selection.focus,
          type: 'mention-ref',
        },
        {
          affinity: 'inward',
        }
      )
    }
  }, [editor])
  console.log({mentionPathRef})
  const [loading, suggestions] = useFetchSuggestions(
    props.fetchSuggestion,
    props.mentionAt
  )

  const renderSuggestions = React.useCallback(() => {
    if (loading) {
      return <Loader />
    }
    if (!loading && suggestions.length === 0) {
      return <span className="mention-modal__not-found">not found...</span>
    }
    return (
      <React.Fragment>
        {suggestions.map((suggestion) => (
          <Suggestion
            key={`suggestion-for-${suggestion.label}`}
            mentionAt={props.mentionAt}
            {...suggestion}
          />
        ))}
      </React.Fragment>
    )
  }, [suggestions, loading])

  return (
    <div contentEditable={false} className="mention-modal">
      {renderSuggestions()}
    </div>
  )
}

export default Modal
