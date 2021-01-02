import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
// @ts-ignore
import withMention from 'slate-mention-plugin'

const Editor: FC<any> = () => {
  const editor = useMemo(() => withMention(withReact(createEditor())), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `Slate paste url example, try block some text and paste url or github url to the blocked text.
            `,
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'To change how the url rendered, edit the renderElement in SlatePasteUrl.tsx',
        },
      ],
    },
  ])

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  )
}

export default Editor
