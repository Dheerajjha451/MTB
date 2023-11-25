import React from 'react'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'
import { moviesGenre } from '../data'

const Container = styled.div`
  
    margin: 2rem 11rem;
`
const Wrapper = styled.div`
  display: flex;
    flex-wrap: wrap;
`
const Categories = () => {
    return (
        <Container>
            <Wrapper>
                {moviesGenre.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                )
                )}
            </Wrapper>
        </Container>
    )
}

export default Categories