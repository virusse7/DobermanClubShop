import { FooterContainer, ListItem, ListHeader, Link } from "./styled";

export const FooterList = () => (
  <FooterContainer>
    <ul>
      <ListHeader>Pomoc</ListHeader>
      <ListItem>
        <Link href="">Regulamin</Link>
      </ListItem>
      <ListItem>
        <Link href="">Zwroty i reklamacje</Link>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>
        O nas
      </ListHeader>
      <ListItem>
        <Link href="">Kontakt i dane</Link>
      </ListItem>
    </ul>
    <ul>
      <ListHeader>
        Informacje
      </ListHeader>
      <ListItem>
        <Link href="">Polityka prywatności</Link>
      </ListItem>
    </ul>
  </FooterContainer>
);