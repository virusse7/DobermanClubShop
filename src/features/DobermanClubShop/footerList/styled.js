import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const ListHeader = styled.li`
  list-style: none;
  padding-bottom: .5rem;
  font-weight: bolder;
  font-size: large;
`;

export const Link = styled.a`
  text-decoration: none;
`;