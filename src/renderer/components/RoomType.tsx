import React from 'react';
import { DateBtn } from '../style';

interface Props {}

function RoomType(props: Props) {
  const {} = props;

  return (
    <>
      <div
        style={{
          // backgroundColor: 'grey',
          borderRight: '1px solid black',
          width: 100,
          maxWidth: 100,
          textAlign: 'center',
        }}
      >
        <DateBtn style={{height:30}}>Room</DateBtn>
        <div
          style={{
            marginTop: 20,
            fontSize: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >
          {/* max 6 letters */}
          203
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* max 6 letters */}
          1104
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* max 6 letters */}
          103
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* max 6 letters */}
          622
        </div>
      </div>
    </>
  );
}

export default RoomType;
