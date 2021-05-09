import {useState, useMemo, FC, useRef, useEffect} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {decorate, renderLeaf, Highlight} from 'slate-stabilo-plugin'

export type Props = {search: Highlight; value?: Node[]}
const Editor: FC<Props> = (props) => {
  const counter = useRef(1)
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>(
    props.value || [
      {
        type: 'paragraph',
        children: [
          {
            text: `lorem ipsum dolor sit amet, lorem ipsum dolor sit amet`,
          },
        ],
      },
    ]
  )
  const highlight: Highlight = props.search || []

  useEffect(() => {
    counter.current += 1
  }, [props.search])

  return (
    <Slate
      key={`editor-${counter.current}`}
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable decorate={decorate(highlight)} renderLeaf={renderLeaf} />
    </Slate>
  )
}

export default Editor
