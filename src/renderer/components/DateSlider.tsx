import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';
import { Button } from 'antd';

interface Props {}

function DateSlider(props: Props) {
  const {} = props;

  const num_Days = useSelector((state: RootState) => state.days);

  function showDate(num_Days: number) {
    const startOfWeek = dayjs().startOf('week');
    let days = [];
    for (let i = 0; i < num_Days; i++) {
      const date = startOfWeek.add(i, 'day');
      days.push(date.format('DD'));
    }
    return days;
  }


   return(
    <div>
      {showDate(num_Days).map((item)=>{
        return <Button>{item}</Button>
      })}
    </div>
   )
}

export default DateSlider;
