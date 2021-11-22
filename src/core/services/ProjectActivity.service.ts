import api from "./api";
import { ProjectActivity } from "../models/Project.interface";

const saveProjectActivity = async (body: ProjectActivity) => {
  return api.post<ProjectActivity>("/activity", body);
};

const updateProjectActivity = async (body: ProjectActivity) => {
  return api.put<ProjectActivity>("/activity/update", body);
};

const ProjectActivityService = {
  saveProjectActivity,
  updateProjectActivity,
};

export default ProjectActivityService;
