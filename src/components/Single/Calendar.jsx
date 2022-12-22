import React, { useEffect, useState } from 'react'
import CalendarItem from './CalendarItem';

const Calendar = ({dates, get}) => {
  
  const [activeItem, setActiveItem] = useState(-1);

  return (
    <>
    <h1 className='font-bold text-2xl'>კალენდარი</h1>
    <p className='text-md text-gray6 mt-3'>აირჩიეთ სასურველი თარიღი.</p>
    <div className='mt-6 flex gap-6 sm:flex-wrap'>
      {dates.map(item => (
        <CalendarItem key={item.id} handle={() => {setActiveItem(item.id); get(item)}} active={activeItem == item.id} date={item.start_time.slice(5, 11)} time={item.start_time.slice(17, 22)}/>
      ))}
    </div>
    </>
  )
}

export default Calendar