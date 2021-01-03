import * as React from 'react'
import {RenderLeafProps} from 'slate-react'
import MentionModal, {Props} from './MentionModal'

const RenderLeaf: React.FC<RenderLeafProps & Props> = (props) => {
  const mentionAt = props.leaf.text.substr(1) // removing '@'
  return (
    <span style={{color: 'blue', position: 'relative'}} {...props.attributes}>
      {props.children}
      <MentionModal mentionAt={mentionAt} fetchMention={props.fetchMention} />
    </span>
  )
}

export default RenderLeaf
