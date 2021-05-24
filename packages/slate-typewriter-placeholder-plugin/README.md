# Slate Typewriting Placeholder Plugin

Typewriting placeholder style effect for slate.js editor

## Install

```
$ yarn add @imdbsd/slate-typewriter-placeholder-plugin
```

## Usage

Use this plugin as value for slate-react renderPlaceholder props

```
import {useState, useMemo, FC} from 'react'
import {createEditor, Descendant} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import {renderPlaceholder} from '@imdbsd/slate-typewriter-placeholder-plugin'

const Editor: FC = (props) => {
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
        placeholder="This is placeholder..."
        renderPlaceholder={renderPlaceholder}
      />
    </Slate>
  )
}
```

Or import `TypewritingPlaceholder` element and use it on your own `renderPlaceholder` function

```
import TypewritingPlaceholder from '@imdbsd/slate-typewriter-placeholder-plugin'

...
`   <Editable
        placeholder="This is placeholder..."
        renderPlaceholder={(props) => {
            // logic here
            return <TypewritingPlaceholder {...props} />
        }}
    />
```
