import {
  MainContainer,
  ImageContainer,
  Image,
  ProductsGridContainer,
  SubHeader
} from "./styled.js";
import { Header } from "./Header/index.js";
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
        <Image src={backgroundImage} alt="banner" />
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
            alt={product.alt}
          />
        ))}
      </ProductsGridContainer>
      <Line />
      <FooterList />
    </MainContainer >
  );
};

