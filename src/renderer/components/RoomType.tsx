import React from 'react';

interface Props {}

function RoomType(props: Props) {
  const {} = props;

  return (
    <div
      style={{
        // backgroundColor: 'grey',
        borderRight:'1px solid black',

        // marginTop: 30,
        width: 100,
        maxWidth:100,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        {/* max 6 letters */}
        203
      </div>
    </div>
  );
}

export default RoomType;
