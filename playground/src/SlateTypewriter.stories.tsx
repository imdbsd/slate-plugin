import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import Editor, {Props} from './SlateTypewriter'

export default {
  component: Editor,
  title: 'slate-typewriter-placeholder',
} as Meta

const Template: Story<Props> = (args) => <Editor {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'This is a custom typewriting placeholder...',
}
