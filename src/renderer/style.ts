import styled from 'styled-components';
import { Button } from 'antd';

export const DateBtn = styled.div`
  width: 100%;
  min-width: 50px;
  max-height: 40px;
  height: 100%;
  border: 2px solid;
`;

export const BookingBtn = styled.button`
  width: 100%;
  height: 100%;
  min-height: 40px;
  min-width: 50px;
  background-color:${(props) => props.color || ''};
`;

export const HeaderBtn = styled(Button)`
  height: 80%;
  font-size: 20px;
`;
