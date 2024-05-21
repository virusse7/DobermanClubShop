import styled from "styled-components";

export const MainContainer = styled.div`
    
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 5px;
`;

export const Header = styled.h1`
    text-align: center;
    font-size: 3rem;
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

export const ProductsGridContainer = styled.div`
  margin-top: .5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;