import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { BookingBtn, DateBtn } from '../style';


function Booking() {
  const num_Days = useSelector((state: RootState) => state.days);
  const test = [1,2,3,4]
  const [obj,setObj] = useState({kim:'asd',b:'qwe'})

  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
        <BookingBtn></BookingBtn>
        {Array(num_Days)
          .fill(1)
          .map((_, key) => {
            return <BookingBtn key={key}>{}</BookingBtn>;
          })}
      </div>
    </div>
  );
}

export default Booking;
