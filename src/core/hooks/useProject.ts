import info from "../utils/info";
import { Project, ProjectDetailsDto } from "../models/Project.interface";
import ProjectService from "../services/Project.service";
import useErrors from "./useErrors";
import { useHistory } from "react-router";

export default function useProject() {
  const { formatAlertFromRequest } = useErrors();
  const history = useHistory();

  const getProjectList = async () => {
    var projects = await ProjectService.getProjectList();
    return projects.data;
  };

  const saveProject = async (body: Project) => {
    var project = {} as Project;

    await ProjectService.saveProject(body)
      .then((result) => {
        project = result.data;
        info({
          title: "Projeto salvo!",
          description: "Você acabou de salvar o projeto",
        });
      })
      .catch((e) => {
        formatAlertFromRequest(e);
      });

    return project;
  };

  const updateProject = async (body: Project) => {
    var project = {} as Project;

    await ProjectService.updateProject(body)
      .then((result) => {
        project = result.data;
        info({
          title: "Projeto salvo!",
          description: "Você acabou de editar o projeto",
        });
      })
      .catch((e) => {
        formatAlertFromRequest(e);
      });

    return project;
  };

  const deleteProject = async (projectId: number) => {
    ProjectService.deleteProject(projectId)
      .then(() => {
        info({
          title: "Projeto excluido!",
          description: "O projeto foi excluido",
        });

        history.replace("/");
      })
      .catch((e) => {
        formatAlertFromRequest(e);
        return;
      });
  };

  const getProjectDetails = async (projectId: number) => {
    var project = {} as ProjectDetailsDto;

    await ProjectService.getProjectDetail(projectId)
      .then((result) => {
        project = result.data;
      })
      .catch((e) => {
        formatAlertFromRequest(e);
      });

    return project;
  };

  return {
    getProjectList,
    saveProject,
    deleteProject,
    getProjectDetails,
    updateProject,
  };
}
