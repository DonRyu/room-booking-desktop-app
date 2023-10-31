import React from 'react';
import DateSlider from './DateSlider';
import { Button } from 'antd';
import Room from './Room';

interface Props {}

function Calendar(props: Props) {
  const {} = props;

  return (
    <div style={{ backgroundColor: 'red', height: '100%',display:'flex',width:'100%' }}>
      <Room/>
      <DateSlider />
    </div>
  );
}

export default Calendar;
