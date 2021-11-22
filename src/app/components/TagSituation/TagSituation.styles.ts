import styled from "styled-components";
import { YesNo } from "../../../core/models/types/types";
import { color } from "../../../core/colors";

export const Wrapper = styled.div<{
  late: YesNo;
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${(p) => (p.late === "YES" ? color.danger : color.primary)};
  color: ${(p) => color.primaryForeground};
  background-color: ${(p) => (p.late === "YES" ? color.danger : color.primary)};
  border-radius: 10px;
  text-align: center;
`;
