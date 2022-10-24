import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Remote } from "./Remote";

export default {
  title: "Full Remote",
  component: Remote,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Remote>;

const Template: ComponentStory<typeof Remote> = (args) => <Remote {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentChannel: 3,
};
