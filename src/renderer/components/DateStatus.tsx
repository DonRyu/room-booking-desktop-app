import React from 'react';
import type { DatePickerProps, TimeRangePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedDay } from '../redux/slice';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';

interface Props {}

function DateStatus(props: Props) {
  const {} = props;
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.selectedDay);

  const onChange: DatePickerProps['onChange'] = (date, _) => {
    dispatch(changeSelectedDay(date?.toISOString() ?? selectedDay));
  };

  return (
    <DatePicker
      defaultValue={dayjs(selectedDay)}
      onChange={onChange}
      picker="week"
      format={'DD-MMM-YYYY'}
    />
  );
}

export default DateStatus;
