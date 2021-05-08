import {NodeEntry, Range, Text} from 'slate'
import {Highlight} from './types'
import {getRangeFromString, getRangeFromWordOptions} from './utils'

export type Options = {
  highlight: Highlight
}

const decorate = (options: Options) => ([node, path]: NodeEntry): Range[] => {
  if (Text.isText(node)) {
    const {text} = node
    if (typeof options.highlight === 'string') {
      return getRangeFromString(text, options.highlight, path)
    }
    if (!Array.isArray(options.highlight)) {
      return getRangeFromWordOptions(text, options.highlight, path)
    }
    const ranges = options.highlight.reduce<Range[]>((range, highlight) => {
      if (typeof highlight === 'string') {
        const hRange = getRangeFromString(text, highlight, path)
        return [...range, ...hRange]
      }
      if (typeof highlight === 'object') {
        const hRange = getRangeFromString(text, highlight.word, path)
        return [...range, ...hRange]
      }
      return range
    }, [])
    return ranges
  }
  return []
}
export default decorate
