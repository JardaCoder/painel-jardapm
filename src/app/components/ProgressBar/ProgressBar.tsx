import { transparentize } from "polished";
import styled from "styled-components";
import { color } from "../../../core/colors";

export interface ProgressBarProps {
  title: string;
  progress: number;
  theme: "primary" | "secondary";
  width?: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <ProgressBarWrapper
      style={{
        width: props.width || "auto",
        color: props.progress === 0 ? color.secondary : color.primaryForeground,
      }}
    >
      <span>{props.progress}%</span>
      <CurrentProgress
        progress={props.progress}
        theme={props.theme}
      ></CurrentProgress>
    </ProgressBarWrapper>
  );
}

const ProgressBarWrapper = styled.div`
  height: 24px;
  color: ${color.primaryForeground};
  background-color: ${transparentize(0.85, color.secondary)};
  position: relative;

  span {
    position: absolute;
    z-index: 10;
    left: 2px;
  }
`;

const CurrentProgress = styled.div<{
  progress: number;
}>`
  height: 100%;
  background-color: ${color.primary};
  width: ${(p) => p.progress}%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;
  ${(p) => (p.progress > 0 ? "padding-left: 4px;" : "")}
  transition: .25s ease;
  z-index: 2;
  position: relative;
`;
