import React from 'react'
import styled from 'styled-components'
import { FaHistory } from "react-icons/fa";
// import { Link} from 'react-router-dom';
// import { IoMdMenu } from "react-icons/io";
// import { RiShoppingBag4Fill } from "react-icons/ri";
// import { useDispatch, useSelector} from 'react-redux'
// import {toggleNavMenu} from '../../slices/eventSlice'
// import { toggleCartPopup } from '../../slices/cartSlice'
// import LogoMain from '../../assets/images/main-header-logo-bg.png'

const HeaderSmall = () => {

  return (
    <Wrapper>
      <FaHistory className='history--icon'/>
      <h3>Bookit.</h3>
    </Wrapper>
  )
}


const Wrapper = styled.header`
   
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    max-height: 80px;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--btn);
    color: var(--primary-font);
    border-top: solid 0.5px var(--stroke-color);
    border-bottom: solid 0.5px var(--stroke-color);
    z-index: 500;

    h3 {
        font-family: "Jaro", sans-serif;
        font-optical-sizing: auto;
        font-size: 1.5em;
    }

    .history--icon {
      font-size: 1.2em;
    }


  @media only screen and (min-width: 992px) {
    display: none;
  }

`
export default HeaderSmall