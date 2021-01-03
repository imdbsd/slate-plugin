import * as React from 'react'
import useFetchSuggestions from './useFetchSuggestions'
import Loader from './Loader'
import Suggestion, {SuggestionType} from './Suggestion'
import './styles.css'

export type FetchFN = (mentionAt: string) => Promise<SuggestionType[]>

export type Props = {
  fetchSuggestion: FetchFN
}

const Modal: React.FC<Props & {mentionAt: string}> = (props) => {
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
