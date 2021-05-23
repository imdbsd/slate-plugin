export type Pattern = {
  type?: string
  capture: RegExp
}

export const LINK_ELEMENT_TYPE = 'link'

export const getLinkType = (
  pattern?: Pattern,
  defaultType?: string
): string => {
  if (pattern && pattern.type) return pattern.type
  return defaultType || LINK_ELEMENT_TYPE
}

export const getTypeFromArrayOfPatterns = (patterns: Pattern[]): string[] => {
  return patterns.reduce<string[]>((sum, pattern) => {
    if (pattern.type) {
      return [...sum, pattern.type]
    }
    return sum
  }, [])
}
