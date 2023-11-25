import React from 'react'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'
import { popularMoviesGenre } from '../data'

const Container = styled.div`
    margin: 2rem 11rem;
`
const Wrapper = styled.div`
  display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`
const Title = styled.h1`
    font-size: 4.7rem;
`
const Categories = () => {
    return (
        <Container>
            <Title>Search By Popular Genre</Title>
            <Wrapper>

                {popularMoviesGenre.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                )
                )}

            </Wrapper>
        </Container>
    )
}

export default Categories