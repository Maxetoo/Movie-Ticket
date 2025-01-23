import React from 'react'
import styled from 'styled-components'

const SingleTicketSection = ({name, description, id, cost, currency, stock, time, date, place, seats, image_url}) => {
   
  return (
    <Wrapper>
        <img src={image_url} alt={name} />
        <div className="title-header">
            <h3>{name}</h3>
            <p>{currency}{cost}</p>
        </div>
        <p>{description}</p>
        <div className="btn-container">
            <button type='button' className='edit-btn'>Edit Ticket</button>
            <button type='button' className='del-btn'>Delete Ticket</button>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    margin-top: 2rem;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .title-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    .btn-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    } 

    button {
        margin-top: 0.5rem;
        font-size: 1.2em;
        height: 40px;
        width: 100%;
        border: none;
    }

    .edit-btn {
        background: #0c5a0c;
        color: var(--primary-font);
    }

    .del-btn {
        background: var(--error-color);
        color: var(--primary-font);
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
    }

`
export default SingleTicketSection