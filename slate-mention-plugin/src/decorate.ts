import {NodeEntry, Text, Node, Editor, Range} from 'slate'
import {ReactEditor} from 'slate-react'
import {MENTION_LEAF} from './index'

const MENTION_CAPTURE = /@(\S*)$/

const decorate = (editor: ReactEditor | Editor) => (entry: NodeEntry) => {
  const [node] = entry
  if (!Text.isText(node)) return []
  const content = Node.string(node)
  const result = MENTION_CAPTURE.exec(content)
  if (!result) return []
  const mentionTo = result[0]

  if (!editor.selection) return []

  return [
    {
      anchor: {
        ...editor.selection.anchor,
        offset: editor.selection.anchor.offset - (mentionTo.length + 1),
      },
      focus: editor.selection.focus,
      type: MENTION_LEAF,
    },
  ] as Range[]
}

export default decorate
