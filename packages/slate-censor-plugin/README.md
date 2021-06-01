# Slate Censor Plugin

slate.js plugin for censoring text in slate.js document

## Instal

```
$ yarn add @imdbsd/slate-censor-plugin
```

## Usage

Define list of the censored word in an array and past it to the decorate function

```
import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {decorate, renderLeaf} from '@imdbsd/slate-censor-plugin'

const blacklist = ['fuck']

const Editor: FC = (props) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `This fuck word will getting censored`,
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
      <Editable decorate={decorate(blacklist)} renderLeaf={renderLeaf('')} />
    </Slate>
  )
}

export default Editor
```

## Options

### decorate

| options   |            type            |                  Description |
| --------- | :------------------------: | ---------------------------: |
| blacklist | `required` `Array<string>` | List of the blacklisted word |

### renderLeaf / CensorLeaf

| props/args |        type         |                                            Description |
| ---------- | :-----------------: | -----------------------------------------------------: |
| censorChar | `optional` `string` | Char that will used to censor the word, default is `*` |
