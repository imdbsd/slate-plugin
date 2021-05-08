import {Range, Path} from 'slate'
import {DEFAULT_NODE_TYPE, WordOptions} from './types'

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

export const getRangeFromString = (
  text: string,
  highlight: string,
  path: Path
): Range[] => {
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
): Range[] => {
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
