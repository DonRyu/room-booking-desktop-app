import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { BookingBtn, DateBtn } from '../style';
import dayjs from 'dayjs';
import { Room } from '../../types';

// [
//   {
//       "id": 4,
//       "type": "Hold",
//       "room_number": 101,
//       "student_number": 12345,
//       "student_name": "Don Ryu",
//       "sex": 1,
//       "check_in": "2023-01-01",
//       "check_out": "2023-01-10",
//       "nationality": "USA",
//       "marketer": "Marketing Team",
//       "created_date": "2023-01-01"
//   }
// ]

// 1                 15
// 1 2 3 4 5 6 7 8 9 (체크아웃 날짜는 포함하지 않음)

// {
//
//   booking: [
//     room: 20223,
//     {
//
//       date: 1,
//       user: 18,
//       type: 2,
//     },
//     {
//
//       date: 2,
//       user: 18,
//       type: 2,
//     },
//   ]
// }

function Booking({ days }: any) {
  const num_Days = useSelector((state: RootState) => state.days);
  const roomDataArr = useSelector((state: RootState) => state.roomData);


  // console.log('roomDataArr', roomDataArr.booking[0].date);
  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
        <BookingBtn>1</BookingBtn>
        {days.map((item: any, key: number) => {
          return (
            <BookingBtn key={key}>

            </BookingBtn>
          );
        })}
      </div>
    </div>
  );
}

export default Booking;
