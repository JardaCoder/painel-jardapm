import info from "../utils/info";
import { ProjectActivity } from "../models/Project.interface";
import ProjectActivityService from "../services/ProjectActivity.service";
import useErrors from "./useErrors";

export default function useProjectActivity() {
  const { formatAlertFromRequest } = useErrors();

  const saveProjectActivity = async (body: ProjectActivity) => {
    var activity = {} as ProjectActivity;
    await ProjectActivityService.saveProjectActivity(body)
      .then((result) => {
        activity = result.data;
        info({
          title: "Atividade salva!",
          description: "Você acabou de salvar a atividade!",
        });
      })
      .catch((e) => {
        formatAlertFromRequest(e);
        throw new Error("");
      });
    return activity;
  };

  const alterActivityStatus = async (body: ProjectActivity) => {
    var project = {} as ProjectActivity;

    if (body.finished === "YES") {
      body.finished = "NO";
    } else {
      body.finished = "YES";
    }

    await ProjectActivityService.updateProjectActivity(body)
      .then((result) => {
        project = result.data;
        info({
          title: "Status alterado!",
          description: "Status alterado com sucesso!",
        });
      })
      .catch((e) => {
        formatAlertFromRequest(e);
        throw new Error("");
      });

    return project;
  };

  return { saveProjectActivity, alterActivityStatus };
}
