import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';

interface Props {}

function DateSlider(props: Props) {
  const {} = props;

  const num_Days = useSelector((state: RootState) => state.days);

  function generateDateArray(buttonCount: number): number[] {
    const today = dayjs(); // 1일로 가정
    const days = [];

    // for (let i = 0; i < buttonCount; i++) {
    //   const date = today.add(i, 'day');

    //   // 현재 날짜의 월과 다음 날짜의 월을 비교하여 윤년 여부를 확인
    //   const isCurrentDateLeapYear = date.isLeapYear();
    //   const isNextDateLeapYear = date.add(1, 'day').isLeapYear();

    //   // 다음 날짜가 윤년인 경우 2월은 29일까지, 아닌 경우 2월은 28일까지
    //   if (date.month() === 1 && isNextDateLeapYear) {
    //     days.push(29);
    //   } else {
    //     days.push(date.date());
    //   }
    // }

    // return days;
  }
  // return <div>{showDate()}</div>;
}

export default DateSlider;
