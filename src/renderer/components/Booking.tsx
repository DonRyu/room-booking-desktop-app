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
//   room: 20223,
//   booking: [
//     {
//       date: 1,
//       user: 18,
//       type: 2,
//     },
//     {
//       date: 2,
//       user: 18,
//       type: 2,
//     },
//   ]
// }

function Booking({ days }: any) {
  const num_Days = useSelector((state: RootState) => state.days);
  const roomDataArr = useSelector((state: RootState) => state.roomData);

  const convertRoomData = () => {
    const dateFormat = 'YYYY-MM-DD';

    let result = roomDataArr.map((item) => {
      let booking = [];
      const checkInDate = dayjs(item.check_in, { format: dateFormat });
      const checkOutDate = dayjs(item.check_out, { format: dateFormat });
      const differenceInDays = checkOutDate.diff(checkInDate, 'day');
      for (let i = 1; i <= differenceInDays; i++) {
        booking.push({
          date: checkInDate.day() + i,
          user: item.id,
          type: item.type,
        });
      }
      return {
        room: item.room_number,
        booking,
      };
    });
    return result;
  };

  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
        {convertRoomData().map((item) => {
          return <BookingBtn>{item.room}</BookingBtn>;
        })}
      </div>
    </div>
  );
}

export default Booking;
