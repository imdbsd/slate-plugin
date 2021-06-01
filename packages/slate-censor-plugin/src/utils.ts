import {Range, Path} from 'slate'

export const CENSOR_LEAF_TYPE = 'censored'

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
  search: string,
  path: Path
): Range[] => {
  const anchorsOffset = getAllAnchorOffset(text, search)
  const textLength = search.length
  return anchorsOffset.map((offset) => ({
    type: CENSOR_LEAF_TYPE,
    anchor: {path, offset},
    focus: {path, offset: offset + textLength},
  }))
}
