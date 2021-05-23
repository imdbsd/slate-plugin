import {Range, Path} from 'slate'
import {DEFAULT_NODE_TYPE, WordOptions, RangeOptions} from './types'

const getAllAnchorOffset = (text: string, search: string): Array<number> => {
  let start = 0
  const offset: Array<number> = []
  while (text.indexOf(search, start) !== -1) {
    const index = text.indexOf(search, start)
    offset.push(index)
    start += index + search.length
  }
  return offset
}

export const isRangeOptions = (options: any): options is RangeOptions => {
  if (typeof options === 'object' && Range.isRange(options.at)) {
    return true
  }
  return false
}

export const isWordOptions = (options: any): options is WordOptions => {
  if (typeof options === 'object' && typeof options.word === 'string') {
    return true
  }
  return false
}

type StabiloRange = {
  type: 'stabilo'
  color?: string
  textColor?: string
} & Range

export const getRangeFromString = (
  text: string,
  highlight: string,
  path: Path
): StabiloRange[] => {
  const anchorsOffset = getAllAnchorOffset(text, highlight)
  const textLength = highlight.length
  return anchorsOffset.map((offset) => ({
    type: DEFAULT_NODE_TYPE,
    anchor: {path, offset},
    focus: {path, offset: offset + textLength},
  }))
}

export const getRangeFromWordOptions = (
  text: string,
  highlight: WordOptions,
  path: Path
): StabiloRange[] => {
  const anchorsOffset = getAllAnchorOffset(text, highlight.word)
  const textLength = highlight.word.length
  const color = highlight.color
  const textColor = highlight.textColor
  return anchorsOffset.map((offset) => ({
    type: DEFAULT_NODE_TYPE,
    anchor: {path, offset},
    focus: {path, offset: offset + textLength},
    color,
    textColor,
  }))
}

export const getRangeFromRange = (
  highlight: RangeOptions | Range
): StabiloRange[] => {
  const at: Range = Range.isRange(highlight) ? highlight : highlight.at
  if (Range.isExpanded(at)) {
    return [
      {
        type: 'stabilo',
        anchor: at.anchor,
        focus: at.focus,
        color: !Range.isRange(highlight) ? highlight.color : undefined,
        textColor: !Range.isRange(highlight) ? highlight.textColor : undefined,
      },
    ]
  }
  return []
}
