import React from 'react';
import type { TimeRangePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

interface Props {}

function DateStatus(props: Props) {
  const {} = props;
// need to use preset range
  return <div><RangePicker picker="week"/></div>;
}

export default DateStatus;
