import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { BookingBtn, DateBtn } from '../style';

interface Props {}

function Booking(props: Props) {
  const {} = props;
  const num_Days = useSelector((state: RootState) => state.days);

  return (
    <div style={{height:'100%',maxHeight:61}}>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        {Array(num_Days)
          .fill(1)
          .map((_) => {
            return <BookingBtn>{}</BookingBtn>;
          })}
      </div>
    </div>
  );
}

export default Booking;
