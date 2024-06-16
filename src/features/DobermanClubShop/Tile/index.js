import { Description, Image, OrderButton, ProductPrice, TileContainer, Link } from "./styled";

export const Tile = ({ id, name, image, price, alt }) => (
  <TileContainer key={id}>
    <Link href={`/DobermanClubShop/`}>
    <Image src={image} width="100%" alt={alt}></Image>
    <Description>{name}</Description>
    </Link>
    <ProductPrice>{price}</ProductPrice>
    <OrderButton>Do koszyka</OrderButton>
  </TileContainer >
);