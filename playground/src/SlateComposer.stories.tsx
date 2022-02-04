import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import Editor, {Props} from './SlateComposer'

export default {
  component: Editor,
  title: 'slate-plugin-composer',
} as Meta

const Template: Story<Props> = (args) => <Editor {...args} />

export const Default = Template.bind({})
Default.args = {}
