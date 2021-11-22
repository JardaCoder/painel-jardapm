import { Story, Meta } from "@storybook/react";
import ProjectCard, { ProjectCardProps } from "../app/components/ProjectCard";

export default {
  title: "Example/ProjectCard",
  component: ProjectCard,
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: {
    name: "Projeto 2",
    id: 1,
    initialDate: "2021-11-01",
    finalDate: "2021-11-10",
    percentageProgress: 66.67,
    totalActivities: 10,
    projectActivities: [
      {
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
      {
        id: 3,
        inclusionDate: "2021-11-20",
        lastModification: new Date("2021-11-20T17:29:24.301748"),
        situation: "ACTIVE",
        name: "Projeto 1",
        initialDate: "2021-11-01",
        finalDate: "2021-11-02",
        finished: "YES",
        project: null,
        projectId: 1,
      },
      {
        id: 2,
        inclusionDate: "2021-11-20",
        lastModification: new Date("2021-11-20T17:29:24.301748"),
        situation: "ACTIVE",
        name: "Projeto 1",
        initialDate: "2021-11-01",
        finalDate: "2021-10-03",
        finished: "YES",
        project: null,
        projectId: 1,
      },
    ],
    finished: "NO",
    late: "NO",
  },
};
