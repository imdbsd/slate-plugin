import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {Slate, Editable, withReact, DefaultElement} from 'slate-react'
import {usePasteUrl, Options} from 'slate-paste-url-plugin'

export type Props = {
  defaultType?: string
  patterns?:
    | {capture: string; type?: string}
    | {capture: string; type?: string}[]
}

const Editor: FC<Props> = (props) => {
  const options: Options = {
    defaultType: props.defaultType,
    patterns: props.patterns
      ? Array.isArray(props.patterns)
        ? props.patterns.map((pattern) => ({
            type: pattern.type,
            capture: new RegExp(pattern.capture, 'i'),
          }))
        : {
            type: props.patterns.type,
            capture: new RegExp(props.patterns.capture, 'i'),
          }
      : undefined,
  }
  const withPasteUrl = usePasteUrl(options)
  const editor = useMemo(() => withPasteUrl(withReact(createEditor())), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `Slate paste url example, try block some text and paste url or github url to the blocked text.
            `,
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'To change how the url rendered, edit the renderElement in SlatePasteUrl.tsx',
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
            case 'github_link': {
              return (
                <a
                  href={props.element.link as string}
                  style={{fontWeight: 'bold', color: 'blue'}}
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

export default Editor
