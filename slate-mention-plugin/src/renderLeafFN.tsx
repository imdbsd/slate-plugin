import * as React from 'react'
import {RenderLeafProps} from 'slate-react'
import RenderLeaf from './RenderLeaf'
import {Props} from './MentionModal'
import {MENTION_LEAF} from './index'

const renderLeafFN = (mentionProps: Props) => (
  props: RenderLeafProps
): null | React.ReactElement<RenderLeafProps> => {
  if (props.leaf.type === MENTION_LEAF) {
    return <RenderLeaf {...mentionProps} {...props} />
  }
  return null
}

export default renderLeafFN
