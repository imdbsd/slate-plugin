import * as React from 'react'
import {NodeEntry, Range, Text} from 'slate'
import {RenderLeafProps, DefaultLeaf} from 'slate-react'
import {CENSOR_LEAF_TYPE, getRangeFromString} from './utils'

export type CensorLeafProps = RenderLeafProps & {
  leaf: Text & {type: string}
  censorChar?: string
}

export const CensorLeaf = (props: CensorLeafProps) => {
  const censorChar = props.censorChar?.trim() || '*'
  if (props.leaf.type === CENSOR_LEAF_TYPE) {
    return (
      <span {...props.attributes}>
        <span data-slate-string>
          {censorChar.repeat(props.leaf.text.length)}
        </span>
      </span>
    )
  }
  return <DefaultLeaf {...props} />
}
export const renderLeaf = (censorChar?: string) => (props: CensorLeafProps) => (
  <CensorLeaf {...props} censorChar={censorChar} />
)

export const decorate = (blacklists: string[]) => ([
  node,
  path,
]: NodeEntry): Range[] => {
  if (Text.isText(node)) {
    const {text} = node
    const decorates = blacklists.reduce<Range[]>((accDecorate, blacklist) => {
      return [...accDecorate, ...getRangeFromString(text, blacklist, path)]
    }, [])
    return decorates
  }
  return []
}

export {CENSOR_LEAF_TYPE}
