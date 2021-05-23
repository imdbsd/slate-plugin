import {Element} from 'slate'
import {Pattern, LINK_ELEMENT_TYPE} from './index'
import {getTypeFromArrayOfPatterns} from './utils'
import {UrlElement} from './types'

export const isInline = (
  next: (element: Element) => boolean,
  patterns?: Pattern | Pattern[]
) => (element: Element) => {
  let patternType: string[] = []
  if (patterns) {
    if (Array.isArray(patterns)) {
      patternType = getTypeFromArrayOfPatterns(patterns)
    } else if (patterns.type) {
      patternType = [patterns.type]
    }
  }
  const el = element as UrlElement
  return [...patternType, LINK_ELEMENT_TYPE].includes(el.type) || next(el)
}
