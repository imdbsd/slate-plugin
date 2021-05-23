import {Location, Range} from 'slate'
export type StabiloNode = 'stabilo'
export const DEFAULT_NODE_TYPE: StabiloNode = 'stabilo'

export type StabiloType = {
  color?: string
  textColor?: string
}

export type WordOptions = {
  word: string
} & StabiloType
export type RangeOptions = {
  at: Range
} & StabiloType

export type Highlight =
  | string
  | WordOptions
  | Range
  | RangeOptions
  | Array<string | WordOptions | RangeOptions | Range>
