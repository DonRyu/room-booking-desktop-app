import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { BookingBtn, DateBtn } from '../style';
import dayjs from 'dayjs';
import { Room } from '../../types';

interface days {
  ddd: string;
  dd: string;
}

function Booking({ days }: { days: days[] }) {
  const num_Days = useSelector((state: RootState) => state.days);
  const roomDataArr = useSelector((state: RootState) => state.roomData);

  console.log('roomDataArr', roomDataArr); // {room_number: 101, booking: Array(9)}
  console.log('days', days); // [{ddd: 'Sun', dd: '31'}]
  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
        <div>
          {roomDataArr.map((room: any, key: number) => {
            return (
              <div style={{ display: 'flex' }}>
                <BookingBtn>{room.room_number}</BookingBtn>
                {days.map((day,key) => {
                  return (
                    <BookingBtn>
                      {day.dd === room.booking[key]?.date ? 1: 'a22d'}
                    </BookingBtn>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Booking;
