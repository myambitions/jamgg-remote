import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Channel } from "./Channel";

export default {
  title: "Channel",
  component: Channel,
} as ComponentMeta<typeof Channel>;

const Template: ComponentStory<typeof Channel> = (args) => (
  <Channel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currentChannel: 2,
};
