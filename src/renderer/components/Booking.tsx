import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { BookingBtn, DateBtn } from '../style';
import dayjs from 'dayjs';
import { Room, booking,days } from '../../types';



export let BookingType = {
  Hold: 'red',
  Offer: 'green',
  Book: 'blue',
};

function Booking({ days }: { days: days[] }) {
  const num_Days = useSelector((state: RootState) => state.days);
  const roomDataArr = useSelector((state: RootState) => state.roomData);

  //testing
  console.log('roomDataArr', roomDataArr); // {room_number: 101, booking:[{date:1,user:13,type:2}]}
  console.log('days', days); // [{ddd: 'Sun', dd: '31'}]

  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
        <div style={{width:'100%'}}>
          {roomDataArr.map((room: any, roomKey: number) => (
            <div key={roomKey} style={{ display: 'flex' }}>
              <BookingBtn>{room.room_number}</BookingBtn>
              {days.map((day, dayKey: number) => {
                const bookingItem:booking = room.booking.find(
                  (book:booking) => book.date === day.ts,
                );
                return (
                  <BookingBtn
                    color={BookingType[bookingItem?.type] ?? ''}
                    key={dayKey}
                  >
                    {day.dd}
                  </BookingBtn>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Booking;
