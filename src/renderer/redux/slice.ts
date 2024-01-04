import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { numOfDays } from '../constants';
import dayjs, { Dayjs } from 'dayjs';
import { Room } from '../../types';

export interface CalendarSate {
  days: number;
  selectedDay: string;
  roomData: any;
}

const initialState: CalendarSate = {
  days: numOfDays.month,
  selectedDay: dayjs().toISOString(),
  roomData: [],
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
    getRoomData: (state, action: PayloadAction<Room[]>) => {
      const dateFormat = 'YYYY-MM-DD';
      let result = [];
      result = action.payload.map((item) => {
        let booking = [];
        const checkInDate = dayjs(item.check_in, { format: dateFormat });
        const checkOutDate = dayjs(item.check_out, { format: dateFormat });
        const differenceInDays = checkOutDate.diff(checkInDate, 'day');
        for (let i = 1; i <= differenceInDays; i++) {
          const currentDate = checkInDate.add(i, 'day');
          const timestamp = currentDate.unix();

          booking.push({
            date: timestamp,
            user: item.id,
            type: item.type,
          });
        }
        return {
          room_number: item.room_number,
          booking,
        };
      });
      state.roomData = result;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDays, changeSelectedDay, getRoomData } =
  calendarSlice.actions;

export default calendarSlice.reducer;
