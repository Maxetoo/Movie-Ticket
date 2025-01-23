import React from 'react'
import styled from 'styled-components'
import {Header, FeaturedMovies} from '../components/home'

const HomePage = () => {
  return (
    <Wrapper>
        <Header/>
        <FeaturedMovies/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    height: auto;
    /* padding-bottom: 4rem; */
`
export default HomePage