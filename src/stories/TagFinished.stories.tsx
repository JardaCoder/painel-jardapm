import { Story, Meta } from "@storybook/react";
import TagFinished, {
  TagFinishedProps,
} from "../app/components/TagFinished/TagFinished";

export default {
  title: "Example/TagFinished",
  component: TagFinished,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<TagFinishedProps> = (args) => <TagFinished {...args} />;

export const NoFinished = Template.bind({});
NoFinished.args = {
  finished: "NO",
};
export const Finished = Template.bind({});

Finished.args = {
  finished: "YES",
};
