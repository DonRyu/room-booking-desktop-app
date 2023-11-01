import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';

interface Props {}

function Booking(props: Props) {
  const {} = props;
  const num_Days = useSelector((state: RootState) => state.days);

  return (
    <div style={{backgroundColor:'blue'}}>
      {Array(num_Days).fill(1).map((_,)=>{
        return <Button>{}</Button>
      })}
    </div>
  );
}

export default Booking;
