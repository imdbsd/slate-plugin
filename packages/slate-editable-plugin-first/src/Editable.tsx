import * as React from 'react'
import {createEditor, Descendant, NodeEntry, Editor} from 'slate'
import {
  Editable as SlateEditable,
  RenderElementProps,
  RenderLeafProps,
  RenderPlaceholderProps,
  ReactEditor,
  Slate,
  withReact,
} from 'slate-react'
import {DOMRange} from 'slate-react/dist/utils/dom'
import useCreateEditor from 'useCreateEditor'

type Plugin = {
  withPlugin?: <T extends Editor>(editor: T) => T
  renderElement?: (props: RenderElementProps) => JSX.Element
  renderLeaf?: (props: RenderLeafProps) => JSX.Element
  renderPlaceholder?: (props: RenderPlaceholderProps) => JSX.Element
  decorate?: (entry: NodeEntry) => Range[]
  onDOMBeforeInput?: (event: InputEvent) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  onCopy?: (event: React.ClipboardEvent<HTMLDivElement>) => void
  onCut?: (event: React.ClipboardEvent<HTMLDivElement>) => void
  onPaste?: (event: React.ClipboardEvent<HTMLDivElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void
  onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void
  onCompositionStart?: (event: React.CompositionEvent<HTMLDivElement>) => void
  onCompositionUpdate?: (event: React.CompositionEvent<HTMLDivElement>) => void
  onCompositionEnd?: (event: React.CompositionEvent<HTMLDivElement>) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
  onBeforeInput?: (event: React.FormEvent<HTMLDivElement>) => void
}

type Props = {
  editorRef?: any
  value: Descendant[]
  onChange: (value: Descendant[]) => void
  plugins?: Plugin[]

  // Editable vanila props
  placeholder?: string
  readOnly?: boolean
  style?: React.CSSProperties
  scrollSelectionIntoView?: (editor: ReactEditor, domRange: DOMRange) => void
  as?: React.ElementType
}

const Editable = (props: Props): React.ReactNode => {
  const {value, onChange, plugins, editorRef, ...editableProps} = props
  const editor = useCreateEditor()

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <SlateEditable {...editableProps} />
    </Slate>
  )
}

export default Editable
