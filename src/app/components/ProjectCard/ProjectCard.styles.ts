import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../core/colors";

export const Wrapper = styled(Link)`
  display: flex;
  max-width: 300px;
  gap: 24px;
  border: 1px solid ${color.gray};
  padding: 16px;
  justify-content: center;

  cursor: pointer;

  transition: box-shadow 0.15s ease;

  text-decoration: none;
  color: ${color.secondary};

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 5px ${color.primary};
    border-color: ${color.primary};
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
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
