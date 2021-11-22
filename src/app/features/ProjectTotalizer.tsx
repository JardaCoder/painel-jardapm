import styled from "styled-components";
import { ProjectDto } from "../../core/models/Project.interface";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

interface ProjectTotalizerProps {
  projects: ProjectDto[];
}

export default function ProjectTotalizer({ projects = [] }: ProjectTotalizerProps) {
  return (
    <Wrapper>
      <ValueDescriptor description="Total de projetos" value={projects.length} color="primary" />
      <ValueDescriptor
        description="Projetos finalizados"
        value={projects.filter((p) => p.finished === "YES").length}
        color="primary"
      />
      <ValueDescriptor
        description="Projetos que terminaram ou estão em atraso"
        value={projects.filter((p) => p.late === "YES").length}
        color="primary"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
