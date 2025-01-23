import { configureStore } from '@reduxjs/toolkit'
import eventSlice from '../slices/eventSlice'
import authSlice from '../slices/authSlice'
import ticketSlice from '../slices/ticketSlice'


export const store = configureStore({
    reducer: {
      actions: eventSlice,
      auth: authSlice,
      ticket: ticketSlice
    },
  })