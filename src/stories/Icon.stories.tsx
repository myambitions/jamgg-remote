import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CoreIcon as Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const LeftArrow = Template.bind({});
LeftArrow.args = {
  name: "arrowLeft",
};

export const RightArrow = Template.bind({});
RightArrow.args = {
  name: "arrowRight",
};
