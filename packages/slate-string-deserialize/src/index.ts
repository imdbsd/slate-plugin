import {Node} from 'slate'

export type Options = {
  defaultElement?: string
  defaultMarks?: {[key: string]: any}
  delimiter?: string
}

const DEFAULT_ELEMENT = 'paragraph'
const DEFAULT_MARKS = {}
const DEFAULT_DELIMITER = '\n'

const deserialiaze = (value: string, options?: Options): Node[] => {
  const {
    delimiter = DEFAULT_DELIMITER,
    defaultMarks = DEFAULT_MARKS,
    defaultElement = DEFAULT_ELEMENT,
  } = options || {}

  const nodes: Node[] = value.split(delimiter).map((val) => ({
    type: defaultElement,
    children: [{text: val, ...defaultMarks}],
  }))
  return nodes
}

export default deserialiaze
