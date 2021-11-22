import { BaseEntity } from "./BaseEntity";
import { YesNo } from "./types/types";

export interface ProjectDto {
  name: string;
  id: number;
  initialDate: string;
  finalDate: string;
  percentageProgress: number;
  projectActivities: ProjectActivity[];
  finished: YesNo;
  late: YesNo;
  totalActivities: number;
}

export interface ProjectActivity extends BaseEntity {
  name: string;
  initialDate: string;
  finalDate: string;
  finished: YesNo;
  project?: any;
  projectId: number;
}

export interface Project extends BaseEntity {
  name: string;
  initialDate: string;
  finalDate: string;
}

export interface ProjectDetailsDto {
  project: Project;
  activities: ProjectActivity[];
}
