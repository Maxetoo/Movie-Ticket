import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ImCross } from 'react-icons/im'
import { BsFillCheckCircleFill } from 'react-icons/bs'
// BsFillCheckCircleFill

const AlertSuccess = ({ message }) => {
  return (
    <Wrapper>
      <div className='alert-container'>
        <div className='alert-text-container'>
          <BsFillCheckCircleFill className='success-icon' />
          <p className='alert-texts'>{message}</p>
        </div>
        <div className='exit-btn'>{/* <ImCross /> */}</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  z-index: 999 !important;
  position: fixed;
  bottom: 20%;

  .alert-container {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -1rem;
    color: #2d3748;
    background: #c6f6d5;
    height: auto;
    padding: 1rem;
    border-radius: 10px;
    border: solid 1px black;
  }

  .alert-text-container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.9em;
  }

  .success-icon {
    font-size: 0.9em;
    width: 10%;
  }

  .alert-texts {
    margin-left: 1rem;
  }

  .exit-btn {
    font-size: 0.7em;
    height: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
  }
`
export default AlertSuccess