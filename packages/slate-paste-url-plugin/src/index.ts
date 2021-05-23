import {ReactEditor} from 'slate-react'
import {isInline as isInlineFN} from './isInline'
import {insertData as insertDataFN} from './insertData'

export type Pattern = {
  type?: string
  capture: RegExp
}

export type Options = {
  patterns?: Pattern | Pattern[]
  defaultType?: string
}

export const LINK_ELEMENT_TYPE = 'link'

export const withPasteUrl = (editor: ReactEditor) => {
  const {insertData, isInline} = editor

  editor.isInline = isInlineFN(isInline)
  editor.insertData = insertDataFN(editor, insertData)

  return editor
}

const pasteUrl = (options?: Options) => (editor: ReactEditor) =>
  withPasteUrl(editor)

export const usePasteUrl = (options?: Options) => pasteUrl(options)

export default pasteUrl
