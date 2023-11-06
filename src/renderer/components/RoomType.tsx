import React from 'react';
import { BookingBtn, DateBtn } from '../style';

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
        <DateBtn>Room</DateBtn>
        <BookingBtn>asd</BookingBtn>
      </div>
    </>
  );
}

export default RoomType;
