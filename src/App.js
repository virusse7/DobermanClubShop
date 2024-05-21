import {
  Header,
  MainContainer,
  ImageContainer,
  Image,
  Tile,
  StyledButton,
  ButtonContainer,
  ProductsGridContainer
} from "./styled";
import backgroundImage from "./images/background.jpeg"
import gridIcon from "./images/gridIcon.png";
import columnIcon from "./images/columnIcon.png";
import product from "./images/product.jpeg"

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
          <Tile>
            <img src={product} width="100%" ></img>
            T-shirt classic

          </Tile>
          <Tile>
            <img src={product} width="100%" ></img>
            T-shirt classic

          </Tile>
          <Tile>
            <img src={product} width="100%" ></img>
            T-shirt classic

          </Tile>
          <Tile>
            <img src={product} width="100%" ></img>
            T-shirt classic

          </Tile>
        </ProductsGridContainer>
      </div>
    </MainContainer >
  );
}

export default App;
