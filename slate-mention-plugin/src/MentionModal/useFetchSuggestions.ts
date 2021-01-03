import * as React from 'react'
import {Suggestion, FetchFN} from './Modal'

const useFetchSuggestions = (
  fetchSuggestion: FetchFN,
  mentionAt: string
): [loading: boolean, suggestions: Suggestion[]] => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([])
  const fetchTimeout = React.useRef<NodeJS.Timeout | undefined>()

  const handleFetchSuggestions = React.useCallback(() => {
    setLoading(true)
    fetchSuggestion(mentionAt).then((result) => {
      setSuggestions(result)
    })
    setLoading(false)
  }, [fetchSuggestion, mentionAt])

  React.useEffect(() => {
    if (fetchTimeout.current) {
      clearTimeout(fetchTimeout.current)
    }
    fetchTimeout.current = setTimeout(() => {
      handleFetchSuggestions()
    }, 500)
  }, [handleFetchSuggestions])

  return [loading, suggestions]
}

export default useFetchSuggestions
