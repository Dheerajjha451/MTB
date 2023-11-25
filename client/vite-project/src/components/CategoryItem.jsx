import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 28rem;
    position: relative;
    margin-bottom: 2rem;
    border-radius: 5%;
    border: 1px solid trasparent;
    &:hover {
        transform: scale(1.027);
        transition: all 0.5s ease;
        cursor: pointer;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    overflow: hidden;
    width:37rem;
    height: 100%;
    object-fit: cover;
    border-radius: 5%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%; 

    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    margin:9rem 12rem;
`;

const Title = styled.h2`
    Color: #fff;    
    font-size: 3.5rem;
    font-weight: 500;
  
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} alt={item.name} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
      </InfoContainer>
    </Container>
  );
};

export default CategoryItem;
