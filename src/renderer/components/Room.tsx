import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';

interface Props {}

function Room(props: Props) {
  const {} = props;
  const num_Days = useSelector((state: RootState) => state.days);

  return (
    <div style={{backgroundColor:'blue',marginTop:20}}>
      <div>203</div>
      {/* {Array(num_Days).map((_,)=>{
        return <Button>{item}</Button>
      })} */}
    </div>
  );
}

export default Room;
