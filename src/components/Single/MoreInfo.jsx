import React from 'react'

const MoreInfo = ({category, duration, language}) => {
  return (
    <div className='flex gap-8 lg:justify-between'>
        <ul className='flex flex-col gap-y-3 text-left'>
            <li>Genre:</li>
            <li>Duration:</li>
            <li>Language:</li>
        </ul>
        <ul className='flex flex-col gap-y-3 lg:text-right'>
            <li>{category}</li>
            <li>{duration}</li>
            <li>{language}</li>
        </ul>
    </div>
  )
}

export default MoreInfo