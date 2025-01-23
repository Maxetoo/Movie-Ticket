import React from 'react'
import styled from 'styled-components'
import {TicketSection, CreateTicketSection} from '../components/ticket'

const TicketPage = () => {
  return (
    <Wrapper>
      <CreateTicketSection/>
      <TicketSection/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 4rem;
`

export default TicketPage