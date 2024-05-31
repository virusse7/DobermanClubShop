import styled from "styled-components";

export const MainContainer = styled.div`
    
`;

export const Header = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-style: italic;
    margin: .5rem;
`;

export const ImageContainer = styled.div`
    overflow: hidden;
`;

export const Image = styled.img`
max-height: 300px;
aspect-ratio: 16 / 9;
width: 100%;
object-fit: cover;
object-position: center;
display: block;
`;

export const SubHeader = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 20px 0;
`;

export const ProductsGridContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
