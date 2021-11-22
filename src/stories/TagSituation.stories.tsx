import { Story, Meta } from "@storybook/react";
import TagSituation, {
  TagSituationProps,
} from "../app/components/TagSituation/TagSituation";

export default {
  title: "Example/TagSituation",
  component: TagSituation,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<TagSituationProps> = (args) => <TagSituation {...args} />;

export const NoLate = Template.bind({});
NoLate.args = {
  late: "NO",
};
export const Late = Template.bind({});

Late.args = {
  late: "YES",
};
