import styled from "styled-components";
import { color } from "../../../core/colors";

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid ${color.gray};
  padding: 16px;
  cursor: pointer;
  transition: box-shadow 0.15s ease;
  text-decoration: none;
  color: #274060;
  max-width: 300px;
  justify-content: center;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 5px ${color.primary};
    border-color: ${color.primary};
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;
export const Name = styled.h3`
  font-size: 18px;
`;
export const Description = styled.div`
  font-size: 12px;
`;
