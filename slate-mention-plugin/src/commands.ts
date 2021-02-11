import {Transforms, Editor} from 'slate'
import {MENTION_ELEMENT} from './index'

export const insertMention = (
  editor: Editor,
  mentionAt: string,
  text: string,
  mentionValue: any
) => {
  console.log(editor.selection)
  if (editor.selection) {
    Transforms.delete(editor, {
      at: {
        anchor: {
          path: editor.selection.anchor.path,
          offset: editor.selection.anchor.offset - (mentionAt.length + 1),
        },
        focus: editor.selection.focus,
      },
    })
    Transforms.insertNodes(editor, {
      type: MENTION_ELEMENT,
      mentionValue,
      children: [
        {
          text,
        },
      ],
    })
  }
}
