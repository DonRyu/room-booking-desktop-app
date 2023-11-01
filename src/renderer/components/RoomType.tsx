import React from 'react';

interface Props {}

function RoomType(props: Props) {
  const {} = props;

  return (
    <div
      style={{
        backgroundColor: 'green',
        marginTop: 30,
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
        aa203a
      </div>
    </div>
  );
}

export default RoomType;
