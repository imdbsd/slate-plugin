import {NodeEntry, Range, Text, Editor} from 'slate'
import {Highlight} from './types'
import {
  isWordOptions,
  isRangeOptions,
  getRangeFromRange,
  getRangeFromString,
  getRangeFromWordOptions,
} from './utils'

const decorate = (highlight: Highlight) => ([
  node,
  path,
]: NodeEntry): Range[] => {
  if (Editor.isEditor(node)) {
    if (Range.isRange(highlight)) {
      return getRangeFromRange(highlight)
    }
    if (isRangeOptions(highlight)) {
      return getRangeFromRange(highlight)
    }
    if (Array.isArray(highlight)) {
      return highlight.reduce<Range[]>((range, highlight) => {
        if (Range.isRange(highlight) || isRangeOptions(highlight)) {
          return [...range, ...getRangeFromRange(highlight)]
        }
        return range
      }, [])
    }
  }
  if (Text.isText(node)) {
    const {text} = node
    if (typeof highlight === 'string') {
      return getRangeFromString(text, highlight, path)
    }

    if (isWordOptions(highlight)) {
      return getRangeFromWordOptions(text, highlight, path)
    }
    if (Array.isArray(highlight)) {
      return highlight.reduce<Range[]>((range, highlight) => {
        if (typeof highlight === 'string') {
          return [...range, ...getRangeFromString(text, highlight, path)]
        }
        if (isWordOptions(highlight)) {
          return [...range, ...getRangeFromWordOptions(text, highlight, path)]
        }
        return range
      }, [])
    }
  }
  return []
}
export default decorate
