import {useState, useMemo, useEffect, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import deserialize, {Options} from '@imdbsd/slate-string-deserialize'

export type Props = {
  value: string
  options?: Options
}
const Editor: FC<Props> = (props) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>(() =>
    deserialize(props.value, props.options)
  )

  useEffect(() => {
    setValue(deserialize(props.value, props.options))
  }, [props.value, props.options])

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
