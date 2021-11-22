import { useEffect, useState } from "react";
import styled from "styled-components";
import useProject from "../../core/hooks/useProject";
import { ProjectDto } from "../../core/models/Project.interface";
import ErrorBoundary from "../components/ErrorBoundary";
import NoData from "../components/NoData/NoData";
import ProjectCard from "../components/ProjectCard";
import ProjectTotalizer from "./ProjectTotalizer";

export default function EditorsList() {
  const [projects, setProjects] = useState<ProjectDto[]>([]);

  const { getProjectList } = useProject();

  useEffect(() => {
    try {
      getProjectList()
        .then((projectsList) => {
          if (projectsList) {
            setProjects(projectsList);
          }
        })
        .then((error) => {});
    } catch (error) {
      throw new Error("Erro ao buscar projetos");
    }
  }, []);

  return (
    <>
      <ErrorBoundary>
        <ProjectTotalizer projects={projects} />
      </ErrorBoundary>
      <ProjectListWrapper>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectListWrapper>
      {projects.length < 1 && <NoData />}
    </>
  );
}

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
