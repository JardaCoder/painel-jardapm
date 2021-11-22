import { Story, Meta } from "@storybook/react";
import ActivityCard, {
  ActivityCardProps,
} from "../app/components/ActivityCard";

export default {
  title: "Example/ActivityCard",
  component: ActivityCard,
} as Meta;

const Template: Story<ActivityCardProps> = (args) => <ActivityCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  activity: {
    id: 1,
    inclusionDate: "2021-11-20",
    lastModification: new Date("2021-11-20T17:29:24.301748"),
    situation: "ACTIVE",
    name: "Projeto 1",
    initialDate: "2021-11-01",
    finalDate: "2021-11-04",
    finished: "NO",
    project: null,
    projectId: 1,
  },
};
