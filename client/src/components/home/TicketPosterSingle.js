import React from 'react'
import styled from 'styled-components'

const TicketPosterSingle = ({image_url, name, id}) => {
  return (
    <Wrapper href={`/ticket/${id}`}>
        <div className="image-container">
        <img src={image_url} alt={name} />
        <div className="text-overlay">
            <div className="title-cont">
              <h3>{name}</h3>
            </div>
        </div>
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.a`
    .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0; 
    }

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    z-index: 1; 
  }

  .text-overlay {
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* color: var(--btn); */
    text-align: center;
    font-size: 1em;
    z-index: 2; 
    display: flex;
    flex-direction: column;
    align-items: center;

    /* h3 {
      position: absolute;
      font-size: 1.3em;
      width: 100%;
      font-family: 'Inter', sans-serif;
      opacity: 0.6;
      bottom: 20%;

    } */

      .title-cont {
        width: auto;
        padding: 1.2rem;
        background: var(--btn);
        height: 40px;
        border-radius: 25px;
        position: absolute;
        bottom: -5%;
        display: grid;
        place-content: center;

      }
  }

    
`
export default TicketPosterSingle