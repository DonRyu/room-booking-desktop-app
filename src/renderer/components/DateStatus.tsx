import React from 'react';
import type { DatePickerProps, TimeRangePickerProps } from 'antd';
import { Button, DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedDay } from '../redux/slice';
import { RootState } from '../redux/store';
import dayjs from 'dayjs';
import { HeaderBtn } from '../style';

interface Props {}

function DateStatus(props: Props) {
  const {} = props;
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.selectedDay);

  const onChange: DatePickerProps['onChange'] = (date, _) => {
    dispatch(changeSelectedDay(date?.toISOString() ?? selectedDay));
  };

  const resetDate = () => {
    dispatch(changeSelectedDay(dayjs().toISOString()));
  };

  return (
    <>
      <DatePicker
        size={'large'}
        style={{ marginRight: 5, height: '80%' }}
        value={dayjs(selectedDay)}
        onChange={onChange}
        picker="week"
        format={'DD-MMM-YYYY'}
      />
      <HeaderBtn style={{ height: '80%', fontSize: 20 }} onClick={resetDate}>
        Today
      </HeaderBtn>
    </>
  );
}

export default DateStatus;
