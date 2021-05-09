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

export const Showcase = Template.bind({})
Showcase.args = {
  search: [
    'three',
    {word: 'Guardian Flame', color: 'red', textColor: 'white'},
    {
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
      color: 'green',
    },
  ],
  value: [
    {
      type: 'paragraph',
      children: [
        {
          text: 'Please see story file about how to configure',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Lost within the Wailing Mountains, the Fortress of Flares lay abandoned, its training halls empty, its courtyard covered in leaves and dust. Upon a dais in its sealed temple rests a topaz cauldron filled with ancient ash, remnants of a pyre for the warrior-poet Xin. For three generations, Xin taught his acolytes the Bonds of the Guardian Flame, a series of mantras to train the mind and body for the harsh realities beyond the fortress walls.',
        },
      ],
    },
  ],
}
Showcase.argTypes = {
  search: {
    table: {
      disable: true,
    },
  },
  value: {
    table: {
      disable: true,
    },
  },
}
