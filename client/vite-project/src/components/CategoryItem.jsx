import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <ImageContainer>
                <Image src = {item.img} />
            </ImageContainer>
            <InfoConatiner>
                <Title> {item.name} </Title>
            </InfoConatiner>
        </Container>
    )
}

export default CategoryItem