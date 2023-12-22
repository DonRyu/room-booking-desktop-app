import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';
import { Button } from 'antd';
import { DateBtn } from '../style';
import Booking from './Booking';
import { Room } from '../../types';

interface Props {}

let dummy = [
  {
    room: 211,
    booking: [
      {
        date: 0,
        user: 18,
        type: 2,
      },
      {
        date: 1,
        user: 18,
        type: 2,
      },
    ],
  },
  {
    room: 20223,
    booking: [
      {
        date: 0,
        user: 18,
        type: 2,
      },
      {
        date: 1,
        user: 18,
        type: 2,
      },
    ],
  },
];

function DateSlider(props: Props) {
  const {} = props;
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.selectedDay);
  const num_Days = useSelector((state: RootState) => state.days);
  const roomData = useSelector((state: RootState) => state.roomData);

  useEffect(() => {
    window.api.getRoomData().then((res: Room[]) => {
      // dispatch(
      //   roomData(res),
      // );
    });
  }, []);

  function showDate(num_Days: number) {
    const startOfWeek = dayjs(selectedDay).startOf('week');
    let days = [];
    for (let i = 0; i < num_Days; i++) {
      const date = startOfWeek.add(i, 'day');
      days.push({ ddd: date.format('ddd'), dd: date.format('DD') });
    }
    return days;
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', height: '5%' }}>
        <DateBtn>Room</DateBtn>
        {showDate(num_Days).map((item, key) => {
          return (
            <DateBtn
              key={key}
              style={
                item.dd === dayjs(selectedDay).format('DD')
                  ? { backgroundColor: '#1677FF', color: 'white' }
                  : {}
              }
            >{`${item.ddd} ${item.dd}`}</DateBtn>
          );
        })}
      </div>
      <Booking />
    </div>
  );
}

export default DateSlider;
