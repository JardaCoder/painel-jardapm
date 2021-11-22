import { Story, Meta } from "@storybook/react";
import ProgressBar, {
  ProgressBarProps,
} from "../app/components/ProgressBar/ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Você tem certeza?",
  progress: 50,
  theme: "primary",
  width: 375,
};
