import {NodeEntry, Range, Text} from 'slate'
import {Highlight} from './types'
import {getRangeFromString, getRangeFromWordOptions} from './utils'

const decorate = (highlight: Highlight) => ([
  node,
  path,
]: NodeEntry): Range[] => {
  if (Text.isText(node)) {
    const {text} = node
    if (typeof highlight === 'string') {
      return getRangeFromString(text, highlight, path)
    }
    if (!Array.isArray(highlight)) {
      return getRangeFromWordOptions(text, highlight, path)
    }
    return highlight.reduce<Range[]>((range, highlight) => {
      if (typeof highlight === 'string') {
        return [...range, ...getRangeFromString(text, highlight, path)]
      }
      if (typeof highlight === 'object') {
        return [...range, ...getRangeFromWordOptions(text, highlight, path)]
      }
      return range
    }, [])
  }
  return []
}
export default decorate
