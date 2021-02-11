import * as React from 'react'
import {FetchFN} from './Modal'
import {SuggestionType} from './Suggestion'

const useFetchSuggestions = (
  fetchSuggestion: FetchFN,
  mentionAt: string
): [loading: boolean, suggestions: SuggestionType[]] => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [suggestions, setSuggestions] = React.useState<SuggestionType[]>([])
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
