import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { BookingBtn, DateBtn } from '../style';
import dayjs from 'dayjs';
import { Room } from '../../types';
import { BookingType } from '../../types';

interface days {
  ddd: string;
  dd: string;
}

function Booking({ days }: { days: days[] }) {
  const num_Days = useSelector((state: RootState) => state.days);
  const roomDataArr = useSelector((state: RootState) => state.roomData);

  console.log('roomDataArr', roomDataArr); // {room_number: 101, booking:[{date:1,user:13,type:2}]}
  console.log('days', days); // [{ddd: 'Sun', dd: '31'}]



  // Jan 2nd 2024, 그냥 숫자로만 맞춰나서 월자 상관없이 일자만 맞으면 그냥 떠버림;;;;;
  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
        <div>
          {roomDataArr.map((room: any, roomKey: number) => (
            <div key={roomKey} style={{ display: 'flex' }}>
              <BookingBtn>{room.room_number}</BookingBtn>
              {days.map((day, dayKey: number) => {
                const bookingItem = room.booking.find(
                  (book) => book.date === parseInt(day.dd),
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
