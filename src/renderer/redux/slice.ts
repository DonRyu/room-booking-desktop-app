import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { numOfDays } from '../constants';
import dayjs, { Dayjs } from 'dayjs';

export interface CalendarSate {
  days: number;
  selectedDay:string;
}

const initialState: CalendarSate = {
  days: numOfDays.month,
  selectedDay: dayjs().toISOString(),
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changeDays: (state, action: PayloadAction<number>) => {
      state.days = action.payload;
    },
    changeSelectedDay: (state, action: PayloadAction<string>) => {
      state.selectedDay = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDays, changeSelectedDay } = calendarSlice.actions;

export default calendarSlice.reducer;
