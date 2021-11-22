import styled from "styled-components";

export default function Logo() {
  return (
    <Wrapper>
      <h2>Jarda-PM</h2>
      <img
        src={
          "https://media.discordapp.net/attachments/911683943206629426/912062154230870076/unknown.png?width=461&height=461"
        }
        alt="Logo jardaPm"
        width={40}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
