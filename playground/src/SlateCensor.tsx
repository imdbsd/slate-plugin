import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {decorate, renderLeaf} from '@imdbsd/slate-censor-plugin'

export type Props = {
  blacklist?: string
  censorChar?: string
}

const Editor: FC<Props> = (props) => {
  const blacklist = props.blacklist ? props.blacklist.split(';') : []
  const censorChar = props.censorChar || '*'
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `Try typing the  blacklisted word that appear on adon`,
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
        decorate={decorate(blacklist)}
        renderLeaf={renderLeaf(censorChar)}
      />
    </Slate>
  )
}

export default Editor
