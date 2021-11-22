import { ProjectDto } from "../../../core/models/Project.interface";
import * as P from "./ProjectCard.styles";
import { MemoryRouter } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import moment from "moment";
import TagSituation from "../TagSituation/TagSituation";

export interface ProjectCardProps {
  project: ProjectDto;
}

function Profile({ project, ...props }: ProjectCardProps) {
  return (
    <P.Wrapper tabIndex={0} to={`/editar-projeto/${project.id}`}>
      <P.Info>
        <P.Name>
          {project.name} - cód: {project.id}
        </P.Name>
        <ProgressBar
          title={"Progress"}
          progress={project.percentageProgress}
          theme="primary"
        />
        <P.Description>
          Data de início: {moment(project.initialDate).format("DD/MM/YYYY")}
        </P.Description>
        <P.Description>
          Data final: {moment(project.finalDate).format("DD/MM/YYYY")}
        </P.Description>
        <P.Description>Atividades: {project.totalActivities}</P.Description>
        <TagSituation late={project.late} />
      </P.Info>
    </P.Wrapper>
  );
}

export default Profile;
