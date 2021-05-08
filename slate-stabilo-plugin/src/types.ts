import {Location} from 'slate'
export type StabiloNode = 'stabilo'
export const DEFAULT_NODE_TYPE: StabiloNode = 'stabilo'

export type WordOptions = {
  word: string
  color?: string
  at?: Location
}
export type Highlight = string | WordOptions | Array<string | WordOptions>
