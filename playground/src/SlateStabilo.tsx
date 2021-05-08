import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {decorate, renderLeaf, Highlight} from 'slate-stabilo-plugin'

const Editor: FC = (props) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `lorem ipsum dolor sit amet, lorem ipsum dolor sit amet`,
        },
      ],
    },
  ])
  const highlight: Highlight = [
    'lorem',
    {word: 'ipsum', color: 'red', textColor: 'white'},
  ]

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable decorate={decorate(highlight)} renderLeaf={renderLeaf} />
    </Slate>
  )
}

export default Editor
