import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { CalendarBtn } from '../style';

interface Props {}

function Booking(props: Props) {
  const {} = props;
  const num_Days = useSelector((state: RootState) => state.days);

  return (
    <div style={{display:'flex'}}>
      {Array(num_Days).fill(1).map((_,)=>{
        return <CalendarBtn>{}</CalendarBtn>
      })}
    </div>
  );
}

export default Booking;
