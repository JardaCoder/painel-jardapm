import api from "./api";
import {
  Project,
  ProjectDetailsDto,
  ProjectDto,
} from "../models/Project.interface";

const getProjectList = async () => {
  return api.get<ProjectDto[]>("/project/list/dto");
};

const saveProject = async (body: Project) => {
  return api.post<Project>("/project", body);
};

const updateProject = async (body: Project) => {
  return api.put<Project>("/project/update", body);
};

const deleteProject = async (projectId: number) => {
  return api.delete<void>(`/project/${projectId}`);
};

const getProjectDetail = async (projectId: number) => {
  return api.get<ProjectDetailsDto>(`/project/details/${projectId}`);
};

const ProjectService = {
  getProjectList,
  saveProject,
  deleteProject,
  updateProject,
  getProjectDetail,
};

export default ProjectService;
