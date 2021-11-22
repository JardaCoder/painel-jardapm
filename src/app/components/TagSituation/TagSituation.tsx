import { YesNo } from "../../../core/models/types/types";
import * as T from "./TagSituation.styles";

export interface TagSituationProps {
  late: YesNo;
}

export default function TagSituation({ late }: TagSituationProps) {
  return (
    <T.Wrapper late={late}>
      <text>{late === "YES" ? "Atrasado" : "Não atrasado"}</text>
    </T.Wrapper>
  );
}
