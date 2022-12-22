import React from 'react'
import Loader from '../Loader'
import clsx from 'clsx';

const Seats = ({isLoading, data, seatClicked, selected}) => {
  return (
    <div className='mt-4 w-full'>
        <div className='grid grid-cols-10 gap-2 w-full sm:grid-cols-5'>
          {isLoading ? <Loader /> : (
            data.map((takenSeat, i) => (
              <div onClick={() => seatClicked(i)} key={i} className={clsx(selected.map(item => item == i && 'bg-lightBlue text-white border-0'),   takenSeat == 1 && 'bg-blue text-white cursor-default', 'cursor-pointer flex items-center justify-center text-xs font-bold font-poppins border border-gray4 w-[40px] h-[36px] rounded-md')}>{i}</div>
            ))
          )}
        </div>
    </div>
  )
}

export default Seats