import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { IoAddCircleSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {toggleTicketModal, fillTicketInputs, createMovieTicket} from '../../slices/ticketSlice'
import AlertError from '../../helpers/AlertError'




const CreateCoursePopup = () => {
    const { 
        loading,
        movies,
        error,
        errorMessage,
        ticketModalOpen,
        fillCourseInputs: {
            name,
            description,
            image_url,
            cost,
            currency,
            stock,
            time,
            date,
            place,
            seats,
            code
        }} = useSelector((store) => store.ticket);
   
    const dispatch = useDispatch()




  return (
    <Wrapper courseModalOpen={ticketModalOpen}>
        <div className="create-course-container">
            <div className="modal-close-container">
                <RxCross2 onClick={() => dispatch(toggleTicketModal())}/>
            </div>
            <h1>Create movie ticket</h1>
            <form className='course-form'>

                {/* ticket title  */}
                <label htmlFor="Title">
                    <h3>Title</h3>
                    <input type="text" 
                    required
                    value={name}
                    onChange={(e) => dispatch(fillTicketInputs({
                        name: e.target.value,
                        description,
                        image_url,
                        cost,
                        currency,
                        stock,
                        time,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    />
                </label>

                {/* ticket description  */}
                <label htmlFor="Description">
                    <h3>Description</h3>
                    <textarea
                    required
                    className='description-input'
                    value={description}
                    onChange={(e) => dispatch(fillTicketInputs({
                        description: e.target.value,
                        name,
                        image_url,
                        cost,
                        currency,
                        stock,
                        time,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    ></textarea>
                </label>

                {/* ticket price  */}
                <label htmlFor="Title" className='price-label'>
                    <h3>Price ($)</h3>
                    <div className="price-label-inputs">
                    <input type="number" 
                    required
                    value={cost}
                    onChange={(e) => dispatch(fillTicketInputs({
                        cost: e.target.value,
                        name,
                        image_url,
                        description,
                        currency,
                        stock,
                        time,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    />
                    </div>
                </label>

               {/* ticket image  */}
               <label htmlFor="Title">
                    <h3>Image Url</h3>
                    <input type="text" 
                    required
                    value={image_url}
                    onChange={(e) => dispatch(fillTicketInputs({
                        image_url: e.target.value,
                        description,
                        name,
                        cost,
                        currency,
                        stock,
                        time,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    />
                </label>

                {/* ticket currency  */}
               <label htmlFor="Currency">
                    <h3>Currency</h3>
                    <input type="text" 
                    required
                    value={currency}
                    onChange={(e) => dispatch(fillTicketInputs({
                        currency: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        stock,
                        time,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    />
                </label>

                {/* ticket stock  */}
               <label htmlFor="Stock">
                    <h3>Stock</h3>
                    <input type="number" 
                    required
                    value={stock}
                    onChange={(e) => dispatch(fillTicketInputs({
                        stock: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        currency,
                        time,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    />
                </label>

                {/* ticket time */}
               <label htmlFor="Time">
                    <h3>Time</h3>
                    <input type="time"
                    required
                    value={time}
                    onChange={(e) => dispatch(fillTicketInputs({
                        time: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        currency,
                        stock,
                        date,
                        place,
                        seats,
                        code
                    }))}
                    />
                </label>

                {/* ticket date */}
               <label htmlFor="Date">
                    <h3>Date</h3>
                    <input type="date" 
                    required
                    value={date}
                    onChange={(e) => dispatch(fillTicketInputs({
                        date: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        currency,
                        stock,
                        time,
                        place,
                        seats,
                        code
                    }))}
                    />
                </label>

                {/* ticket place */}
               <label htmlFor="Place">
                    <h3>Place</h3>
                    <input type="text" 
                    required
                    value={place}
                    onChange={(e) => dispatch(fillTicketInputs({
                        place: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        currency,
                        stock,
                        time,
                        date,
                        seats,
                        code
                    }))}
                    />
                </label>

                 {/* ticket seat */}
               <label htmlFor="Seat">
                    <h3>Seat</h3>
                    <input type="text" 
                    required
                    value={seats}
                    onChange={(e) => dispatch(fillTicketInputs({
                        seats: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        currency,
                        stock,
                        time,
                        date,
                        place,
                        code
                    }))}
                    />
                </label>

                 {/* ticket code */}
               <label htmlFor="Code">
                    <h3>Code</h3>
                    <input type="text" 
                    required
                    value={code}
                    onChange={(e) => dispatch(fillTicketInputs({
                        code: e.target.value,
                        description,
                        name,
                        cost,
                        image_url,
                        currency,
                        stock,
                        time,
                        date,
                        seats,
                        place
                    }))}
                    />
                </label>

                {error && 
                <AlertError message={errorMessage}/>}

                {/* submit button  */}
                <button type="button" className={`submit-btn ${loading ? 'btn-load ' : ''}`} onClick={() => dispatch(createMovieTicket({ name,
                        description,
                        image_url,
                        cost,
                        currency,
                        stock,
                        time,
                        date,
                        place,
                        seats,
                        code
                }))}>
                    Create
                </button>
            </form>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000 !important;
    background: rgba(0, 0, 0, 0.7); 
    display: flex;
    justify-content: center;
    transform: ${({ courseModalOpen }) => (courseModalOpen ? 'translateX(0)' : 'translateX(-100%)')};
    opacity: ${({ courseModalOpen }) => (courseModalOpen ? 1 : 0)};
    transition: transform 0.1s ease-in-out;
    overflow: none;

    /* transform: translateY(-100%); */

    .modal-close-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        font-size: 2em;
        cursor: pointer;
    }

    .create-course-container {
        background: var(--btn);
        border: solid 2px black;
        width: 90%;
        height: 90%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 2rem;
        overflow-y: auto;
    }

    .create-course-container::-webkit-scrollbar {
        width: 6px; 
    }

    .create-course-container::-webkit-scrollbar-track {
        background: #d3d3d3; 
    }

    .create-course-container::-webkit-scrollbar-thumb {
        background: var(--highlight);
     }


    form {
        width: 100%;
    }

    label {
        width: 100%;

        h3 {
            margin-top: 1rem;
        }

        input {
            width: 100%;
            height: 50px;
            padding: 0 2rem 0 1rem;
            margin-top: 0.5rem;
            border-radius: 5px;
            border: solid 0.5px #0000;
            font-size: 1em;
        }
    }

    .description-input {
        width: 100%;
        min-height: 50px;
        min-width: 100%;
        max-width: 100%;
        padding: 1rem 2rem 1rem 1rem;
        margin-top: 0.5rem;
        border-radius: 5px;
        border: solid 2px var(--stroke-color);
        font-size: 1em;
    }

    .price-label {
        width: 100%;
        
    }

    .price-label-inputs {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        select {
            height: 50px;
            width: auto;
            padding: 0.5rem;
            display: grid;
            place-content: center;
            margin: 0.5rem 0.5rem 0 0;
            border: solid 2px var(--stroke-color);
            border-radius: 5px;
        }
    }

    .image-container {
        width: 100%;
        height: auto;
        background: none;
        position: relative;


        .remove-image-container {
            position: absolute;
            top: 15%;
            right: 5%;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: var(--stroke-color);
            color: var(--white-color);
            display: grid;
            place-content: center;
            cursor: pointer;  
        }


        .hide-img-rm {
            display: none;
        }

        img {
            width: 100%;
            min-height: 150px;
            max-height: 200px;
            margin-top: 1rem;
            object-fit: cover;
            background: #f5f5f5;

        }

        .hide-img {
            display: none;
        }

        .skeleton-img {
            margin-top: 1rem;
            width: 100%;
            height: 100%;
        }
    }


    .upload-image-button {
        width: 100%;
        height: 50px;
        margin-top: 0.5rem;
        font-size: 1.1em;
        cursor: pointer;
        background: none;
        border: solid 2px black;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .add-icon {
            margin-right: 0.25rem;
            font-size: 1.5em;
        }
    }

    .submit-btn {
        margin-top: 2rem;
        width: 100%;
        height: 50px;
        font-size: 1.1em;
        background: var(--primary);
        color: var(--primary-font);
        border: none;
        cursor: pointer;
    }

    .btn-load {
        opacity: 0.8;
    }


@media only screen and (min-width: 600px) {
    .create-course-container {
        width: 80%;
    }
}

@media only screen and (min-width: 768px) {
    .create-course-container {
        width: 60%;
    }
}


@media only screen and (min-width: 992px) {
    .create-course-container {
        width: 50%;
    }
}

`
export default CreateCoursePopup