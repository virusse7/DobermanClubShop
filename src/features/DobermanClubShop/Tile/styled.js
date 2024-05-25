import styled from "styled-components";

export const TileContainer = styled.div`
  list-style: none;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  margin-bottom: .5rem;
`;

export const Image = styled.img`
  padding: .5rem;
`;

export const Description = styled.div`
font-size: 1.2rem;
`;

export const ProductPrice = styled.div`
font-weight: bold;
padding: 5px 0;
`;

export const OrderButton = styled.button`
width: 75%;
padding: 0.5rem;
margin: 10px 0;
font-weight:bold;
`;