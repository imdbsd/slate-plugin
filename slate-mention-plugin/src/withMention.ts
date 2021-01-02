import {Editor} from 'slate'
import {ReactEditor} from 'slate-react'

const MENTION_NODE = 'mention'

const withMention = (editor: Editor) => {
  const {onChange} = editor
  editor.onChange = () => {
    console.log('change')
    return onChange
  }
  return editor
}

export default withMention
