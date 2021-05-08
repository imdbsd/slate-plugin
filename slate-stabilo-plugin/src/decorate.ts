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
    return options.highlight.reduce<Range[]>((range, highlight) => {
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
