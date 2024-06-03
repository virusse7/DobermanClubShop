import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: .25rem;
`;

export const ListHeader = styled.li`
  
  list-style: none;
  padding-bottom: 1rem;
  font-weight: bolder;
  font-size: 1.2rem;
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  transition: 1s;

  &:hover {
    color: gray;
  }
`;