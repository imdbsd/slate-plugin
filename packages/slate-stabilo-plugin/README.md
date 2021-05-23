# Slate Stabilo Plugin

text highlighting plugin for slate js

## Install

tbd publish to npm

## Usage

highlight a word in a slate document with this config

```
import * as React from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {decorate, renderLeaf, Highlight} from 'slate-stabilo-plugin'

const Editor: FC = (props) => {
  const counter = React.useRef(1)
  const editor = React.useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = React.useState<Node[]>([
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
  // highlight every word 'lorem'
  const highlight: Highlight = 'lorem'
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
```
