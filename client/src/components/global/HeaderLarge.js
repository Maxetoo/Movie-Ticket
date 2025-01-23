import React from 'react'
import styled from 'styled-components'
import { FaHistory } from "react-icons/fa";

// import { Link} from 'react-router-dom';
// import { useDispatch, useSelector} from 'react-redux'
// import { toggleCartPopup } from '../../slices/cartSlice'
// import {navMenuRoutes} from '../../utils/navMenuRoutes'
// import { RiShoppingBag4Fill, RiAccountCircleFill} from "react-icons/ri";
// import { FiSearch } from "react-icons/fi";
// import {initialCaps} from '../../utils/utilsFunctions'
// import LogoMain from '../../assets/images/main-header-logo-bg.png'
// import {handleDisplaySearch} from '../../slices/productSlice'


const HeaderLarge = () => {

  return (
    <Wrapper>
       <h3>Bookit</h3>
    </Wrapper>
  )
}


const Wrapper = styled.header`
    display: none;

    @media only screen and (min-width: 992px) {
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
        justify-content: start;
        background: var(--btn);
        color: var(--primary-font);
        border-top: solid 0.5px var(--stroke-color);
        border-bottom: solid 0.5px var(--stroke-color);
        z-index: 500;

        h3 {
        font-family: "Jaro", sans-serif;
        font-optical-sizing: auto;
        font-size: 5em;
    }

        .title-label {
            height: 40px;
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        }

        img {
        height: 100%;
        object-fit: cover;
        }


        .title {
        font-size: 2em;
        }

        .menu-nav-container {
            width: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

            h3 {
                position: relative;
                margin-right: 1rem;
                font-family: 'DK Frozen Memory';
            }

            .not-available {
                font-size: 0.8em;
            }

            
        }

        .action-nav-container {
            width: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .action-list {
                height: 30px;
                width: 30px;
                margin-right: 1rem;
                cursor: pointer;
                display: grid;
                place-content: center;

                p {
                    margin-right: 0.5rem;
                }

                .action--icon {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    place-content: center;
                    font-size: 1.3em;
                }

                .shop {
                    font-size: 1.3em;
                }


                .cart {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 100%;
                
                }

                .cart--icon {
                font-size: 1.2em;
                }

                .cart--count {
                font-size: 1em;
                }
            }
        }

    }


`
export default HeaderLarge