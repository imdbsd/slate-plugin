import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import Editor from './SlateMentionPlugin'

export default {
  component: Editor,
  title: 'slate-mention-plugin',
} as Meta

const Template: Story<any> = (args) => <Editor {...args} />

export const Default = Template.bind({})
Default.args = {}
