import { ProjectActivity } from "../../../core/models/Project.interface";
import Button from "../Button/Button";
import TagFinished from "../TagFinished/TagFinished";
import * as A from "./ActivityCard.styles";
import moment from "moment";

export interface ActivityCardProps {
  activity: ProjectActivity;
  updateStatus: (activity: ProjectActivity) => void;
}

function AcitivityCard({ activity, updateStatus }: ActivityCardProps) {
  return (
    <A.Wrapper>
      <A.Info>
        <A.Name>{activity.name}</A.Name>
        <A.Description>
          Data de início: {moment(activity.initialDate).format("DD/MM/YYYY")}
        </A.Description>
        <A.Description>
          Data final: {moment(activity.finalDate).format("DD/MM/YYY")}
        </A.Description>
        <TagFinished finished={activity.finished} />
        <Button
          type="button"
          variant={activity.finished === "YES" ? "primary" : "danger"}
          label={
            activity.finished === "YES"
              ? "Marcar como não concluida"
              : "Marcar como concluido"
          }
          onClick={() => updateStatus(activity)}
        />
      </A.Info>
    </A.Wrapper>
  );
}

export default AcitivityCard;
