
import { FooterContainer, ListItem, ListHeader, StyledLink } from "./styled";
import { Link } from "react-router-dom";

export const FooterList = () => (
  <FooterContainer>
    <ul>
      <ListHeader>Pomoc</ListHeader>
      <ListItem>
        <StyledLink href="">Regulamin</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="">Zwroty i reklamacje</StyledLink>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>
        O nas
      </ListHeader>
      <ListItem>
        <Link to={`/DobermanClubShop/kontakt`}>
          Kontakt i dane
        </Link>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>
        Informacje
      </ListHeader>
      <ListItem>
        <StyledLink href="">Polityka prywatności</StyledLink>
      </ListItem>
    </ul>
  </FooterContainer>
);