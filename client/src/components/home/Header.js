import React from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Wrapper>
        <div className="head-nav-container">
            <div className="head--desc">
                <h1>Hello</h1>
                <p>Book your favourite movie</p>
            </div>
            <div className="head--icon">
                <FaRegUserCircle />
            </div>
        </div>

        <form>
        <FiSearch className='search-icon'/>
        <input type="search" 
            placeholder='Search movie...'
        />
      </form>
       
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;

    .head-nav-container {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 3rem;
    }

    .head--desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .head--icon {
        font-size: 1.5em;
    }

    form {
        margin-top: 3rem;
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 0.5rem;
        border: solid 1px var(--stroke-color);
        background: var(--highlight);
        color: var(--primary-font);
        padding: 1rem;
        border-radius: 25px;

        .search-icon {
            font-size: 1.3em;
            margin-right: 1rem;
        }

        input {
            width: 100%;
            background: none;
            border: none;
            outline: none;
            font-size: 1em;
            overflow: hidden;
            color: var(--primary-font);
        }
  }

  @media only screen and (min-width: 768px) {

    .head-nav-container  {
        width: 40%;
    }

    form {
        width: 40%;
    }
  }

`
export default Header