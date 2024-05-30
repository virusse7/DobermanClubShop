import {
  Header,
  MainContainer,
  ImageContainer,
  Image,
  ProductsGridContainer,
  SubHeader
} from "./styled.js";
import { Line } from "../../common/Line/styled.js";
import { FooterList } from "./FooterList/index.js";
import { Tile } from "./Tile/index.js";
import backgroundImage from "./images/background.jpeg";
import { productsData } from "./productsData/productsData.js";


export const DobermanClubShop = () => {
  return (
    <MainContainer>
      <Header>
        Doberman Club
      </Header>
      <ImageContainer>
        <Image src={backgroundImage} />
      </ImageContainer>
      <SubHeader>
        Produkty
      </SubHeader>
      <Line />
      <ProductsGridContainer>
        {productsData.map(product => (
          <Tile
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </ProductsGridContainer>
      <Line />
      <FooterList></FooterList>
    </MainContainer >
  );
};

