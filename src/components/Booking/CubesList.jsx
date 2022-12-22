import React from 'react'

const CubesList = () => {
  return (
    <div className='flex gap-4 sm:flex-col'>
        <div className='flex items-center'>
            <span className='bg-blue w-4 h-4 block'></span>
            <p className='text-sm font-bold mt-1 ml-2'>დაკავებული</p>
        </div>
        <div className='flex items-center'>
            <span className='border border-gray4 w-4 h-4 block'></span>
            <p className='text-sm font-bold mt-1 ml-2'>თავისუფალი</p>
        </div>
        <div className='flex items-center'>
            <span className='bg-lightBlue w-4 h-4 block'></span>
            <p className='text-sm font-bold mt-1 ml-2'>არჩეული</p>
        </div>
    </div>
  )
}

export default CubesList