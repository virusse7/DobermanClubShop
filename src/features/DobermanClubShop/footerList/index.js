
import { FooterContainer, ListItem, ListHeader, StyledLink } from "./styled";

export const FooterList = () => (
  <FooterContainer>
    <ul>
      <ListHeader>Pomoc</ListHeader>
      <ListItem>
        <StyledLink to={`/DobermanClubShop/regulamin`} >Regulamin</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={`/DobermanClubShop/zwroty-reklamacje`} >Zwroty i reklamacje</StyledLink>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>O nas</ListHeader>

      <ListItem>
        <StyledLink to={`/DobermanClubShop/kontakt`}>
          Kontakt i dane
        </StyledLink>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>Informacje</ListHeader>

      <ListItem>
        <StyledLink to={`/DobermanClubShop/polityka-prywatnosci`} >Polityka prywatności</StyledLink>
      </ListItem>
    </ul>
  </FooterContainer>
);