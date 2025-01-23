import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useLocation, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { IoAddCircleSharp } from "react-icons/io5";
import SingleTicket from './SingleTicketSection'
import {toggleTicketModal, getAllMovies} from '../../slices/ticketSlice'


const data = [
    {
        "id": 3,
        "name": "Wakanda",
        "description": "Just a movie",
        "image_url": "https://images.unsplash.com/photo-1733178262883-18a3080e7a5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        "cost": 50,
        "currency": "USD",
        "stock": 50,
        "time": "2024-12-07T18:00:00Z",
        "date": "2024-12-07",
        "place": "Cinema hall",
        "seats": 100,
        "code": "abcde"
    }
]


const CourseSection = () => {
    const {
        loading,
        movies,
        error,
        errorMessage
     } = useSelector((store) => store.ticket);
    const dispatch = useDispatch()
    const location = useLocation()
    const currentPath = location.pathname.toString().substring(1)

    useEffect(() => {
        dispatch(getAllMovies())        
    }, []);


    
  return (
    <Wrapper>
        <h1 className='course-title-label'>Movies</h1>
        <div className="route-container">
        <div>
                <Link to={'/'}>home </Link>
                / {currentPath}
            </div>
        </div>
        
            <div className='ticket-list-container'>
                <div className="add-ticket-container" onClick={() => dispatch(toggleTicketModal())}>
                <IoAddCircleSharp className='add-icon'/>
                <p>Add movie ticket</p>
                </div>

                <div className="movie-list-container">
                    
                    {movies.length === 0 && loading ? <h3 className='loading'>Loading</h3> : (!loading && error) ? <h3>An error occured</h3> : movies.map((val) => {
                        return <SingleTicket {...val} key={val.id}/>
                    })}
                </div>

                {/* {isAdmin && 
                <div className="add-course-container" onClick={() => dispatch(toggleCourseModal())}>
                    <IoAddCircleSharp className='add-icon'/>
                    <p>Add course</p>
                </div>
                } */}
                {/* <div className="course-list-wrapper">
                {isLoading && courses?.length === 0 ? Array(courses?.length || 1).fill().map((_, i) => {
                    return <CourseLoadSkeleton key={i}/>
                }) : courses?.length > 0 ? courses.map((details) => {
                    return <SingleCourseSection {...details} key={details._id}/>
                }) : <div className="empty-course-display">
                <p>No available course!</p>
                </div>
                }
                </div> */}

            </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 8rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .course-title-label {
        color: var(--header-text-color);
    }


    .route-container {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 80%;
        opacity: 0.8;
    }

    .ticket-list-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }

    .add-ticket-container {
        width: 100%;
        height: 100px;
        border: solid 0.5px var(--stroke-color);
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .add-icon {
        font-size: 2.5em;
        }

        p {
            margin-top: 0.5rem;
        }
    }

    .movie-list-container {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            margin-top: 2rem;
        }
    }

    .movie-list-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .empty-course-display {
        margin-top: 3rem;
    } 

    .loader-container {
        margin-top: 3rem;
        width: 100%;

        >* {
            margin-top: 1rem;
        }
    }



@media only screen and (min-width: 600px) {
    .route-container {
        width: 70%;
    }
    .ticket-list-container {
        width: 70%;
    }
}

@media only screen and (min-width: 768px) {
    
        .route-container {
            justify-content: center;
        }

        .ticket-list-container {
            align-items: center;
            width: 80%;
        }

        .add-ticket-container {
            width: 50%;
        }

        .movie-list-wrapper {
            width: 100%;
            display: grid;
            place-items: initial;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-template-rows: subgrid;
            gap: 1rem;
            margin-top: 2rem;
        }

        padding-bottom: 5em;


}


`
export default CourseSection