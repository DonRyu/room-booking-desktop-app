import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { numOfDays } from '../constants'

export interface CalendarSate {
  days: number
}

const initialState: CalendarSate = {
  days: numOfDays.biWeek,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changeDays: (state, action: PayloadAction<number>) => {
      state.days = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDays } = calendarSlice.actions

export default calendarSlice.reducer
