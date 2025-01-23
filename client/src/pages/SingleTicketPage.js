import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {
    useLocation,
    useNavigate,
    useParams,
    Link
  } from 'react-router-dom'
import {getSingleMovie} from '../slices/ticketSlice'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'



const SingleTicketPage = () => {
    const { id } = useParams()
    // const {image, name, } = data[0]
    const dispatch = useDispatch()
    const {
        singleMovie,
        singleTicketLoad,
        singleTicketError,
      } = useSelector((store) => store.ticket)

    useEffect(() => {
        if (id) {
        dispatch(getSingleMovie({id}))
        }
    }, [dispatch, id]);

    const {cost, currency, description, name, image_url, date, time, stock, seats} = singleMovie || {}

  return (

    <Wrapper>
        {singleTicketLoad ? <h3 className='load'>Loading...</h3> : singleTicketError ? <h3 className='error'>An error occured</h3> : 
        <>
        <div className="img-container">
        <img src={image_url} alt="" />

        </div>
        <div className="movie-ticket-details">
            <h1>{name}</h1>
            <div className="other-detaiks-container">
                <h3>Description</h3>
                <p>{description}</p>
                <h3>Date</h3>
                <p>{moment(`${date}`).format('L')}</p>
                <h3>Time</h3>
                <p>{moment(`${time}`).format('LT')}</p>
                <h3>Stock</h3>
                <p>{stock}</p>
                <h3>Seats</h3>
                <p>{seats}</p>
                <h3>Cost</h3>
                <p>{currency === 'USD' ? '$' : currency === 'NGN' ? 'N' : currency}{cost}</p>
            </div>

            <div className="btn-container">
            <Link to={'/checkout'}>
            <button type='button'>Book Ticket</button>
            </Link>
            </div>
        </div>
        </>
        }
    </Wrapper>
  )
}


const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;

    .img-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }


    img {
        width: 100%;
        height: auto;
    }

    h1 {
        margin-top: -1rem;
        text-align: center;
    }

    .load, .error {
        margin-top: 7rem;
        color: var(--primary-font);
        font-size: 1.5em;
        text-align: center;
    }

    h3 {
        font-size: 1.1em;
    }

    p {
        margin-top: 0.5rem;
    }

    .other-detaiks-container {
        width: 100%;
        padding: 2rem;

        h3 {
            margin-top: 0.5rem;
        }
    }

    .btn-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    /* a, button {
        background: var(--btn);
        width: 80%;
        height: 55px;
        border-radius: 25px;
        border: none;
        font-size: 1.1em;
        color: var(--primary-font);
    } */

    a {
        background: var(--btn);
        width: 80%;
        height: 55px;
        border-radius: 25px;
        border: none;
        font-size: 1.1em;
        color: var(--primary-font);
    }

    button {
        background: var(--btn);
        width: 100%;
        height: 100%;
        border-radius: 25px;
        border: none;
        font-size: 1.1em;
        color: var(--primary-font);
    }


    @media only screen and (min-width: 768px) {
        img {
            max-height: auto;
            width: 50%;
        }

        .other-detaiks-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        a {
            width: 30%;
        }

        
    }

    
`

export default SingleTicketPage