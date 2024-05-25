import { Description, Image, OrderButton, ProductPrice, TileContainer } from "./styled";

export const Tile = ({ id, name, image, price }) => (
  <TileContainer key={id}>
    <Image src={image} width="100%" ></Image>
    <Description>{name}</Description>
    <ProductPrice>{price}</ProductPrice>
    <OrderButton>Do koszyka</OrderButton>
  </TileContainer >
);