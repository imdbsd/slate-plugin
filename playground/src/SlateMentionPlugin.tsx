import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact, DefaultLeaf} from 'slate-react'
import {decorate, RenderLeaf} from 'slate-mention-plugin'

const Editor: FC<any> = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `coba mention `,
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
      <Editable
        renderLeaf={(props) => {
          return <RenderLeaf {...props} /> || <DefaultLeaf {...props} />
        }}
        decorate={(entry) => {
          const range = decorate(editor)(entry)
          console.log({range})
          return range
        }}
      />
    </Slate>
  )
}

export default Editor
