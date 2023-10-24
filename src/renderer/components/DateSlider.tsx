import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props {}

function DateSlider(props: Props) {
  const {} = props;

  const num_Days = useSelector((state: RootState) => state.days);

  const showDate = () => {
    const today = new Date();
    const startDate = new Date(today);

    return 0;
  };

  return <div>{showDate()}</div>;
}

export default DateSlider;
