import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Editor, { Props } from "./SlatePasteUrl";

export default {
  component: Editor,
  title: "slate-paste-url-plugin",
} as Meta;

const Template: Story<Props> = (args) => <Editor {...args} />;

export const Default = Template.bind({});
// Default.args = {};
