import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import Editor, {Props} from './SlateStabilo'

export default {
  component: Editor,
  title: 'slate-stabilo-plugin',
} as Meta

const Template: Story<Props> = (args) => <Editor {...args} />
export const StringHighlight = Template.bind({})
StringHighlight.args = {
  search: 'lorem',
}
export const RangeHighlight = Template.bind({})
RangeHighlight.args = {
  search: {
    at: {
      anchor: {
        path: [0, 0],
        offset: 20,
      },
      focus: {
        path: [0, 0],
        offset: 25,
      },
    },
    color: 'blue',
  },
}
