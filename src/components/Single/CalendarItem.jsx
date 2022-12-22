import React from 'react'

const CalendarItem = ({active, date, time, handle}) => {
  return (
    <div onClick={() => handle()} className={`${!active ? 'border border-gray6' : 'bg-blue'} rounded-md cursor-pointer py-3 px-4 text-center`}>
        <p className='font-medium font-poppins text-sm text-gray6'>{date}</p>
        <p className={`text-lg font-medium font-poppins ${active && 'text-white'} `}>{time}</p>
    </div>
  )
}

export default CalendarItem