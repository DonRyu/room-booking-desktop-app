import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { BookingBtn, DateBtn } from '../style';

interface Props {}

function Booking(props: Props) {
  const {} = props;
  const num_Days = useSelector((state: RootState) => state.days);

  return (
    <div style={{ height: '95%' }}>
      <div style={{ display: 'flex' }}>
      <BookingBtn>{}</BookingBtn>
        {Array(num_Days)
          .fill(1)
          .map((_,key) => {
            return <BookingBtn key={key}>{}</BookingBtn>;
          })}
      </div>
    </div>
  );
}

export default Booking;
