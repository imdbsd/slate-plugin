import {useState, useMemo, useEffect, FC} from 'react'
import {createEditor, Descendant} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {renderPlaceholder} from '@imdbsd/slate-typewriter-placeholder-plugin'

export type Props = {
  placeholder: string
}
const Editor: FC<Props> = (props) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: '',
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
        placeholder={props.placeholder}
        renderPlaceholder={renderPlaceholder}
      />
    </Slate>
  )
}

export default Editor
