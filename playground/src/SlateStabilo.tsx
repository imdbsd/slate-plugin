import {useState, useMemo, FC} from 'react'
import {createEditor, Node} from 'slate'
import {
  Slate,
  Editable,
  withReact,
  DefaultElement,
  DefaultLeaf,
} from 'slate-react'
import {decorate} from 'slate-stabilo-plugin'

const Editor: FC = (props) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [
        {
          text: `lorem ipsum dolor sit amet, lorem ipsum dolor sit amet`,
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
        decorate={decorate({
          highlight: ['lorem', {word: 'ipsum', color: 'red'}],
        })}
        renderLeaf={(props) => {
          if (props.leaf.type === 'stabilo') {
            return (
              <span
                {...props.attributes}
                style={{backgroundColor: props.leaf.color, padding: 4}}
              >
                {props.children}
              </span>
            )
          }
          return <DefaultLeaf {...props} />
        }}
        // renderElement={(props) => {
        //   switch (props.element.type) {
        //     case 'link': {
        //       return (
        //         <a
        //           href={props.element.link as string}
        //           style={{fontWeight: 'bold'}}
        //           {...props.attributes}
        //         >
        //           {props.children}
        //         </a>
        //       )
        //     }
        //     case 'github_link': {
        //       return (
        //         <a
        //           href={props.element.link as string}
        //           style={{fontWeight: 'bold', color: 'blue'}}
        //           {...props.attributes}
        //         >
        //           {props.children}
        //         </a>
        //       )
        //     }
        //     default: {
        //       return <DefaultElement {...props} />
        //     }
        //   }
        // }}
      />
    </Slate>
  )
}

export default Editor
