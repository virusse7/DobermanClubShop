
import { FooterContainer, ListItem, ListHeader, StyledLink, StyledUl } from "./styled";

export const FooterList = () => (
  <FooterContainer>
    <StyledUl>
      <ListHeader>Pomoc</ListHeader>
      <ListItem>
        <StyledLink to={`/DobermanClubShop/regulamin`} >Regulamin</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to={`/DobermanClubShop/zwroty-reklamacje`} >Zwroty i reklamacje</StyledLink>
      </ListItem>
    </StyledUl>
    <StyledUl>
      <ListHeader>O nas</ListHeader>

      <ListItem>
        <StyledLink to={`/DobermanClubShop/kontakt`}>
          Kontakt i dane
        </StyledLink>
      </ListItem>
    </StyledUl>
    <StyledUl>
      <ListHeader>Informacje</ListHeader>

      <ListItem>
        <StyledLink to={`/DobermanClubShop/polityka-prywatnosci`} >Polityka prywatności</StyledLink>
      </ListItem>
    </StyledUl>
  </FooterContainer>
);