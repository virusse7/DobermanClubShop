
import { FooterContainer, ListItem, ListHeader, StyledLink } from "./styled";
import { Link } from "react-router-dom";

export const FooterList = () => (
  <FooterContainer>
    <ul>
      <ListHeader>Pomoc</ListHeader>
      <ListItem>
        <Link to={`/DobermanClubShop/regulamin`} >Regulamin</Link>
      </ListItem>
      <ListItem>
        <Link to={`/DobermanClubShop/zwroty-reklamacje`} >Zwroty i reklamacje</Link>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>O nas</ListHeader>
    
      <ListItem>
        <Link to={`/DobermanClubShop/kontakt`}>
          Kontakt i dane
        </Link>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>Informacje</ListHeader>
    
      <ListItem>
        <Link to={`/DobermanClubShop/polityka-prywatnosci`} >Polityka prywatności</Link>
      </ListItem>
    </ul>
  </FooterContainer>
);