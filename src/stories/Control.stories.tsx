import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Controls } from "./Controls";

export default {
  title: "Controls",
  component: Controls,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Controls>;

const Template: ComponentStory<typeof Controls> = (args) => (
  <Controls {...args} />
);

export const Default = Template.bind({});
Default.args = {};
