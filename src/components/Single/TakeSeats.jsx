import React from 'react'
import { Link } from 'react-router-dom';

const TakeSeats = ({selected}) => {
  return (
    <div className='border w-full mt-8 py-8 px-8 border-gray6 rounded-xl'>
        <h4 className='font-bold text-xl'>Batumi APOLLO</h4>
        {!selected.start_time ? null : (
        <>
        <p className='text-gray6 text-xs mt-2 mb-2 font-poppins'>{selected.start_time.slice(5, 16)}</p>
        <p className='font-medium text-xl font-poppins'>{selected.start_time.slice(17, 22)}</p>
        <Link to={"/booking/" + selected.id}>
          <button className='w-full mt-4 font-bold text-xs'>ადგილების დაჯავშნა</button>
        </Link>
        </>
        )}
    </div>
  )
}

export default TakeSeats