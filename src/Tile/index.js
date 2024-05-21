import { Description, Image, OrderButton, ProductPrice, TileContainer } from "./styled";
import product from "../images/product.jpeg";

export const Tile = ({ productImage, description, productPrice }) => (
  <TileContainer>
    <Image src={product} width="100%" ></Image>
    <Description>T-shirt classic</Description>
    <ProductPrice>129zl</ProductPrice>
    <OrderButton>Do koszyka</OrderButton>
  </TileContainer>
);