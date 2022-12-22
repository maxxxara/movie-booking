import React from 'react'

const ListTexts = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h4 className='font-bold text-xl'>მომავალი ფილმები</h4>
            <p className='text-gray6 text-md mt-4 sm:text-sm'>ფილმები რომლის ნახვაც შეგიძლიათ კინოთეატრში.</p>
        </div>
        <div>
            <a href='#' className='text-lightBlue font-bold text-lg'>ყველას ნახვა</a>
        </div>
    </div>
  )
}

export default ListTexts