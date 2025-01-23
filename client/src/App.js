import React from 'react'
import {
  Route,
  Routes,
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { CheckoutPage,
  ErrorPage,
  HomePage,
  LoginPage,
  SignupPage,
  SingleTicketPage,
  TicketPage
} from './pages'
import Nav from './components/nav/Nav'
import {HeaderSmall, HeaderLarge} from './components/global'
import {AuthRoute} from './helpers'
import styled from 'styled-components'


const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={
          <AuthRoute>
            <HomePage/>
          </AuthRoute>
          } />
        <Route path='/ticket' element={
          <AuthRoute>
              <TicketPage/>
          </AuthRoute>
         } />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/checkout' element={
          <AuthRoute>
            <CheckoutPage/>
          </AuthRoute>
          } />
        <Route path='/ticket/:id' element={
          <AuthRoute>
          <SingleTicketPage/>

          </AuthRoute>
          } />
        <Route path='*' element={<ErrorPage/>} />
    </Routes> 

    <HeaderSmall/>
    <HeaderLarge/>
    <Nav/>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`

export default App