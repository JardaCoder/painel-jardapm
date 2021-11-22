import styled from "styled-components";
import { transparentize } from "polished";
import { color } from "../../../core/colors";

const THEME = {
  danger: {
    bg: color.danger,
    color: color.primaryForeground,
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    `,
    disabled: {
      color: color.danger,
      bg: transparentize(0.75, color.danger),
    },
  },
  primary: {
    bg: color.primary,
    color: color.primaryForeground,
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    `,
    disabled: {
      color: color.primaryForeground,
      bg: transparentize(0.44, color.primary),
    },
  },
  text: {
    bg: "transparent",
    color: color.secondary,
    onHover: `
      border-color: ${color.secondary};
    `,
    disabled: {
      color: color.secondary,
      bg: transparentize(0.44, "#508AC9"),
    },
  },
};

export const Wrapper = styled.button<{
  variant: "danger" | "primary" | "text";
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${(p) => THEME[p.variant].bg};

  color: ${(p) => THEME[p.variant].color};
  background-color: ${(p) => THEME[p.variant].bg};

  &:hover,
  &:focus {
    ${(p) => THEME[p.variant].onHover};
  }

  &:disabled {
    background-color: ${(p) => THEME[p.variant].disabled.bg};
    color: ${(p) => THEME[p.variant].disabled.color};

    pointer-events: none;
    border-color: transparent;
  }
`;
