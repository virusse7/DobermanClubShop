import {
  Header,
  MainContainer,
  ImageContainer,
  Image,
  StyledButton,
  ButtonContainer,
  ProductsGridContainer
} from "./styled";
import { FooterList } from "./footerList/index.js"
import { Tile } from "./Tile/index.js";
import backgroundImage from "./images/background.jpeg";
import gridIcon from "./images/gridIcon.png";
import columnIcon from "./images/columnIcon.png";


function App() {
  return (
    <MainContainer>
      <Header>
        Doberman Club
      </Header>
      <ImageContainer>
        <Image src={backgroundImage} />
      </ImageContainer>
      <div>
        Produkty
        <ButtonContainer>
          <StyledButton>
            <img src={gridIcon} width="24px" height="24px" ></img>
          </StyledButton>
          <StyledButton>
            <img src={columnIcon} width="24px" height="24px" />
          </StyledButton>
        </ButtonContainer>
        <ProductsGridContainer>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
        </ProductsGridContainer>
      </div>
      <FooterList></FooterList>
    </MainContainer >
  );
}

export default App;
