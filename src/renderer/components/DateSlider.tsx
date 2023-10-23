import React, { useState } from 'react'

interface Props {}

function DateSlider(props: Props) {
  const {} = props
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay());
  const setDate = useState()



  return (
  <div>
    {startDate.toLocaleString()}
  </div>
  )
}

export default DateSlider
