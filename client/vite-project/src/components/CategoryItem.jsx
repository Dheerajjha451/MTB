import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
  width: 200px; 
  row-gap: initial;
  height: 200px; 
`;

const InfoContainer = styled.div`
`;

const Title = styled.h2`
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
