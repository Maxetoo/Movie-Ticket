import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url} from '../url/url'
import {formatDate, formatTime, formatToISO} from '../helpers/formatDate'


const initialState = {
    loading: false,
    btnLoading: false,
    movies: [],
    singleMovie: [],
    singleTicketLoad: false,
    singleTicketError: false,
    error: false,
    errorMessage: '',
    ticketModalOpen: false,
    fillCourseInputs: {
        name: "",
        description: "",
        image_url: "",
        cost: 0,
        currency: "",
        stock: 0,
        time: "",
        date: "",
        place: "",
        seats: 0,
        code: ""
      },  

}

export const getAllMovies = createAsyncThunk(
    'actions/getAllMovies',
    async (payload, thunkAPI) => {
        const {auth} = thunkAPI.getState('token')
        const token = auth.token.access
      try {
        const resp = await axios.get(
          `${url}/api/tickets/`,
            {
             headers: {
                Authorization: `Bearer ${token}`
             }, 
             withCredentials: true
            },
          
        )
        
        return { response: resp, status: 'success' }
      } catch (error) {
        return {
          response: error.response.data,
          status: 'error',
          code: error.response.status,
        }
      }
    }
  )

  export const getSingleMovie = createAsyncThunk(
    'actions/getSingleMovie',
    async (payload, thunkAPI) => {
        const {auth} = thunkAPI.getState('token')
        const token = auth.token.access
        const {id} = payload
      try {
        const resp = await axios.get(
          `${url}/api/tickets/${id}/`,
            {
             headers: {
                Authorization: `Bearer ${token}`
             }, 
             withCredentials: true
            },
          
        )
        
        return { response: resp, status: 'success' }
      } catch (error) {
        return {
          response: error.response.data,
          status: 'error',
          code: error.response.status,
        }
      }
    }
  )


  export const createMovieTicket = createAsyncThunk(
    'actions/createTicket',
    async (payload, thunkAPI) => {
        const { name,
            description,
            image_url,
            cost,
            currency,
            stock,
            time,
            date,
            place,
            seats,
            code} = payload
            const {auth} = thunkAPI.getState(' token')
            const token = auth.token.access
      try {
        const resp = await axios.post(
          `${url}/api/tickets/`,
          {
            name,
            description,
            image_url,
            cost,
            currency,
            stock,
            time: formatToISO(date, time),
            date,
            place,
            seats,
            code
          },
          {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true,
          }
        )
        thunkAPI.dispatch(getAllMovies())
        return { response: resp, status: 'success' }
      } catch (error) {
        return {
          response: error.response.data,
          status: 'error',
          code: error.response.status,
        }
      }
    }
  )

export const eventSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        toggleTicketModal: (state, action) => {
            state.ticketModalOpen = !state.ticketModalOpen
        },
        closeTicketPopOver: (state, action) => {
          state.ticketModalOpen = false
        },
        fillTicketInputs: (state, action) => {
            const {
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
            } = action.payload
  
            state.fillCourseInputs.name = name
            state.fillCourseInputs.description = description
            state.fillCourseInputs.image_url = image_url
            state.fillCourseInputs.cost = cost
            state.fillCourseInputs.currency = currency
            state.fillCourseInputs.stock = stock
            state.fillCourseInputs.time = time
            state.fillCourseInputs.date = date
            state.fillCourseInputs.place = place
            state.fillCourseInputs.seats = seats
            state.fillCourseInputs.code = code
          },
    },
    extraReducers(builder) {
        builder
        // login
        .addCase(getAllMovies.pending, (state, action) => {
            state.loading = true
            state.error = false
          })
          .addCase(getAllMovies.fulfilled, (state, action) => {
            state.loading = true
            const { status, code, response } = action.payload
            if (code === 500) {
              state.loading = false
              state.error = true
              state.errorMessage = `Could not get movies`

            } else if (status === 'success') {
              state.loading = false
              state.error = false
              state.movies = response.data

            } else {
              state.loading = false
              state.error = true
              state.errorMessage = 'Could not get movies'           
            }
          })
          .addCase(getAllMovies.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.errorMessage = 'Cannot get movies'
          })
          .addCase(getSingleMovie.pending, (state, action) => {
            state.singleTicketLoad = true
            state.singleTicketError = false
          })
          .addCase(getSingleMovie.fulfilled, (state, action) => {
            state.singleTicketLoad = true
            const { status, code, response } = action.payload
            if (code === 500) {
              state.singleTicketLoad = false
              state.singleTicketError = true
              state.errorMessage = `Could not get movies`

            } else if (status === 'success') {
              state.singleTicketLoad = false
              state.singleTicketError = false
              state.singleMovie = response.data

            } else {
              state.singleTicketLoad = false
              state.singleTicketError = true
              state.errorMessage = 'Could not get movies'           
            }
          })
          .addCase(getSingleMovie.rejected, (state, action) => {
            state.singleTicketLoad = false
            state.singleTicketError = true
            state.errorMessage = 'Cannot get movies'
          })
          
          .addCase(createMovieTicket.pending, (state, action) => {
            state.loading = true
            state.error = false
          })
          .addCase(createMovieTicket.fulfilled, (state, action) => {
            state.loading = true
            const { status, code, response } = action.payload
            if (code === 500) {
              state.loading = false
              state.error = true
              state.errorMessage = `Could not create movie`

            } else if (status === 'success') {
              state.loading = false
              state.error = false
              state.ticketModalOpen = false
            } else {
              state.loading = false
              state.error = true
              state.errorMessage = 'Could not create movie'           
            }
          })
          .addCase(createMovieTicket.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.errorMessage = 'Unable to login'
          })}
})

export default eventSlice.reducer
export const {
    toggleTicketModal, 
    fillTicketInputs
} = eventSlice.actions