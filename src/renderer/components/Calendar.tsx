import React from 'react';
import DateSlider from './DateSlider';
import { Button } from 'antd';
import Room from './Booking';
import RoomType from './RoomType';

interface Props {}

function Calendar(props: Props) {
  const {} = props;

  return (
    <div
      style={{
        // backgroundColor: 'red',
        height: '100%',
        display: 'flex',
        width: '100%',
        minWidth: 1100,
      }}
    >
      {/* <RoomType /> */}
      <DateSlider />
    </div>
  );
}

export default Calendar;
