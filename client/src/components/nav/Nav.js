import React, {useState, useEffect} from 'react'
import { navData } from '../../data/data'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    const [displayNav, setDisplayNav] = useState(true)
    const location = useLocation().pathname
   
    useEffect(() => {
        location === '/login' && '/signup' ? setDisplayNav(false) : setDisplayNav(true)   

        console.log(location);
        
    }, [location]);


  return (
    <Wrapper>
        {displayNav && 
        <div className="nav-section">
        <div className='nav-list'>
            {navData.map((value) => {
                const {id, icon, title, path } = value
                return <Link 
                to={path}
                key={id}
                className='nav-list-item'>
                    <div className={`icon ${location === path && 'active-icon'}`}>{icon}</div>
                    
                </Link>
            })}
        </div>
        </div>}
        
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .nav-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 30%;
        position: fixed;
        height: 60px;
        bottom: 5%;
        z-index: 50;
        border: solid 0.5px #000;
        /* border: solid 1px var(--stroke-color); */
        background: var(--highlight);
        color: var(--primary-font);
        border-radius: 25px;
        font-size: 1.4em;
    }

    .nav-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
    }

    .icon {
        color: var(--secondary-font);
    }

    .active-icon {
        color: var(--btn);
    } 

    @media only screen and (min-width: 600px) {
        .nav-section  {
            width: 40%;
        }
    }

    @media only screen and (min-width: 768px) {
        .nav-section  {
            width: 30%;
        }
    }

    @media only screen and (min-width: 992px) {
        .nav-section  {
            width: 20%;
        }
    }

`
export default Nav