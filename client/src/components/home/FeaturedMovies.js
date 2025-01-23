import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards} from 'swiper/modules';
import TicketPosterSingle from './TicketPosterSingle'
import {getAllMovies} from '../../slices/ticketSlice'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [{
    id: 0,
    image: 'https://images.unsplash.com/photo-1733178262883-18a3080e7a5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    name: 'Fast and furious'
}, {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1732836191120-bf9930bd8ff0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    name: 'Batman'
}]



const FeaturedMovies = () => {
  const {
    loading,
    movies,
    error,
    errorMessage
 } = useSelector((store) => store.ticket);
  const dispatch = useDispatch()


useEffect(() => {
    dispatch(getAllMovies())        
}, []);
  return (
    <Wrapper>
        <div className="feature-section">
        <h1>Featured Movies</h1>
        </div>

        {/* {movies.length === 0 && loading ? <h3 className='loading'>Loading</h3> : (!loading && error) ? <h3>An error occured</h3> : movies.map((val) => {
              return <SingleTicket {...val} key={val.id}/>
                    })} */}
        {movies.length === 0 && loading ? <h3 className='load'>Loading...</h3> : (!loading && error) ? <h3 className='error'>An error occured</h3> : 
        <Swiper 
         effect={'cards'}
         grabCursor={true}
         modules={[EffectCards]}
       className="mySwiper">
        {movies.map((val) => {
            return <SwiperSlide>
                <TicketPosterSingle {...val} key={val.id}/>
            </SwiperSlide>
        })}
      </Swiper>}
        

        {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}

    </Wrapper>
  )
}


const Wrapper = styled.div`
    height: auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;

    .feature-section {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        h1 {
            font-size: 1.5em;
        }
    }

    .mySwiper {
    width: 100vw;
    height: auto;
    margin-top: 2rem;
    padding-left: 1rem;
    padding-bottom: 3rem;
  }

  .load, .error {
    margin-top: 1.5rem;
  }
  .swiper {
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
  }

  .slide {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    .feature-section {
        /* width: 0%;
        display: flex;
        align-items: center; */
        width: 50%;
        align-items: center;
    }

    .mySwiper {
        width: 50vw;
    }
  }

`
export default FeaturedMovies