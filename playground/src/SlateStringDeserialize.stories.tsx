import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Editor, { Props } from "./SlateStringDeserialize";

export default {
  component: Editor,
  title: "slate-string-deserialize",
} as Meta;

const Template: Story<Props> = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {
  value:
    "slate string deserialize example, try changing the value to see the result.",
  options: {
    defaultElement: "paragraph",
    defaultMarks: {},
    delimiter: "\n",
  },
};
