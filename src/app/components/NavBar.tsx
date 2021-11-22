import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../core/colors";

export default function NavBar() {
  return (
    <>
      <List>
        <Item>
          <NavLink exact to="/">
            Projetos
          </NavLink>
        </Item>
        <Item>
          <NavLink exact to="/novo-projeto">
            novo projeto
          </NavLink>
        </Item>
      </List>
    </>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;

  a {
    text-decoration: none;
    color: ${color.secondary};

    &.active {
      color: ${color.primary};
    }
  }
`;
