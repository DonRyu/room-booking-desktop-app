import React from 'react';
import DateSlider from './DateSlider';

interface Props {}

function Calendar(props: Props) {
  const {} = props;

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        width: '100%',
      }}
    >
      <DateSlider />
    </div>
  );
}

export default Calendar;
