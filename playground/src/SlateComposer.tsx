import {useState, useMemo, useEffect, FC} from 'react'
import {createEditor, Descendant} from 'slate'
import {Editable} from '@imdbsd/slate-plugin-composer'

export type Props = {
  value: string
}
const Editor: FC<Props> = (props) => {
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `Slate paste url example, try block some text and paste url or github url to the blocked text.`,
        },
      ],
    },
  ])
  return <Editable value={value} onChange={setValue} />
}

export default Editor
