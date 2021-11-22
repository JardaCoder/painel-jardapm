import styled from "styled-components";
import { YesNo } from "../../../core/models/types/types";
import { color } from "../../../core/colors";

export const Wrapper = styled.div<{
  finished: YesNo;
}>`
  padding: 6px 8px 4px;
  border: 1px solid
    ${(p) => (p.finished === "YES" ? color.primary : color.danger)};
  color: ${(p) => color.primaryForeground};
  background-color: ${(p) =>
    p.finished === "YES" ? color.primary : color.danger};
  border-radius: 10px;
  text-align: center;
`;
