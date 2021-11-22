import { YesNo } from "../../../core/models/types/types";
import * as T from "./TagFinished.styles";

export interface TagFinishedProps {
  finished: YesNo;
}

export default function TagFinished({ finished }: TagFinishedProps) {
  return (
    <T.Wrapper finished={finished}>
      <text>{finished === "YES" ? "Finalizado" : "Não finalizado"}</text>
    </T.Wrapper>
  );
}
