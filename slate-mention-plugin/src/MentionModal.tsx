import * as React from 'react'
import './styles.css'

type Suggestion = {
  label: string
  value: any
}

export type FetchFN = (mentionAt: string) => Promise<Suggestion[]>

export type Props = {
  fetchMention: FetchFN
}

const MentionModal: React.FC<Props & {mentionAt: string}> = (props) => {
  console.log({props})
  const [loading, setLoading] = React.useState<boolean>(false)
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([])
  const fetchTimeout = React.useRef<NodeJS.Timeout | null>(null)

  const renderSuggestions = React.useCallback(() => {
    if (loading) {
      return 'loading...'
    }
    if (!loading && suggestions.length === 0) {
      return 'not found.'
    }
    return 'render here'
  }, [suggestions, loading])

  React.useEffect(() => {
    if (fetchTimeout.current) {
      clearTimeout(fetchTimeout.current)
    }
    fetchTimeout.current = setTimeout(() => {
      setLoading(true)
      props.fetchMention(props.mentionAt).then((result) => {
        setSuggestions(result)
      })
      setLoading(false)
    }, 500)
  }, [props.mentionAt, props.fetchMention])

  return (
    <div contentEditable={false} className="mention-modal">
      {renderSuggestions()}
    </div>
  )
}

export default MentionModal
