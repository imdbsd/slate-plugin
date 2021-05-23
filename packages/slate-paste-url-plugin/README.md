# Slate Paste Url

Paste url and transforms into anchor element

## Install

```
npm install slate-paste-url
// or
yarn add slate-paste-url
```

## Example
```
import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact, DefaultElement} from 'slate-react'
import {withPasteUrl} from 'slate-paste-url-plugin'

const Editor: FC<any> = (props) => {
  const editor = useMemo(() => withPasteUrl(withReact(createEditor())), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `hello world`,
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
        renderElement={(props) => {
          switch (props.element.type) {
            case 'link': {
              return (
                <a
                  href={props.element.link as string}
                  style={{fontWeight: 'bold'}}
                  {...props.attributes}
                >
                  {props.children}
                </a>
              )
            }            
            default: {
              return <DefaultElement {...props} />
            }
          }
        }}
      />
    </Slate>
  )
}
```

## Options

- `defaultType: string`

    Default element type for anchor, default was setted to `link`

- `capture: Pattern | Pattern[]`

    Capture pasted url to match certain url, it accepts `Pattern` or `Pattern[]`. 
    ```
    type Pattern = {
        type?: string
        capture: RegExp
    }
    ```