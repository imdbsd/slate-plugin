import {Descendant, BaseElement} from 'slate'

export type UrlElement = BaseElement & {
  type: string
  link: string
  children: Descendant[]
}
