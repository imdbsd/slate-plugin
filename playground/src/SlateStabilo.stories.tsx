import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import Editor from './SlateStabilo'

export default {
  component: Editor,
  title: 'slate-stabilo-plugin',
} as Meta

const Template: Story = (args) => <Editor {...args} />

export const Default = Template.bind({})
// Default.args = {
//   defaultType: 'link',
//   patterns: {
//     capture: '(https|http)://github.com',
//     type: 'github_link',
//   },
// }
