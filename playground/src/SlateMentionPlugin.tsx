import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact, DefaultLeaf} from 'slate-react'
import {decorate, renderLeafFN} from 'slate-mention-plugin'

const users = ['Mallory', 'Amanda', 'Adele', 'Moira', 'Cassie']
const fetchSuggestion = async (mention: string) => {
  return users
    .filter((user) => user.toLowerCase().indexOf(mention) !== -1)
    .map((user) => ({
      label: user,
      value: {
        user,
      },
    }))
}

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
          const mentionLeaf = renderLeafFN({
            fetchSuggestion,
          })(props)
          return mentionLeaf || <DefaultLeaf {...props} />
        }}
        decorate={decorate(editor)}
      />
    </Slate>
  )
}

export default Editor
