import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    activeOrderStatus: 'Open',
    activeTradeStatus: 'Favourites'
}

export const eventSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        setOrderStatus : (state, action) => {
            state.activeOrderStatus = action.payload
        },
        setTradeStatus : (state, action) => {
            state.activeTradeStatus = action.payload
        }
    }
})

export default eventSlice.reducer
export const {
    setOrderStatus,
    setTradeStatus
} = eventSlice.actions