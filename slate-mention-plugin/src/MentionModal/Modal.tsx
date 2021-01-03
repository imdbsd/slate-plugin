import * as React from 'react'
import useFetchSuggestions from './useFetchSuggestions'
import Loader from './Loader'
import './styles.css'

export type Suggestion = {
  label: string
  value: any
}

export type FetchFN = (mentionAt: string) => Promise<Suggestion[]>

export type Props = {
  fetchSuggestion: FetchFN
}

const Modal: React.FC<Props & {mentionAt: string}> = (props) => {
  console.log({props})
  const [loading, suggestions] = useFetchSuggestions(
    props.fetchSuggestion,
    props.mentionAt
  )

  const renderSuggestions = React.useCallback(() => {
    if (loading) {
      return <Loader />
    }
    if (!loading && suggestions.length === 0) {
      return 'not found.'
    }
    return 'render here'
  }, [suggestions, loading])

  return (
    <div contentEditable={false} className="mention-modal">
      {renderSuggestions()}
    </div>
  )
}

export default Modal
