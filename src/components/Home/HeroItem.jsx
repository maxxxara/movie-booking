import React from 'react'
import { Link } from 'react-router-dom';

const HeroItem = ({image, title, category, m_id}) => {
  return (
    <div className='flex flex-col items-center cursor-pointer w-full'>
      <Link to={"/single/" + m_id}>
          <div className='w-full h-[600px] md:h-[500px]'>
              <img src={image} className='w-full h-full rounded-lg'/>
          </div>
          <h4 className='font-bold text-xl mt-7'>{title}</h4>
          <span className='mt-2 font-bold text-xs bg-blueBg px-[8px] py-[6px] text-white rounded-lg'>{category}</span>
     </Link>
    </div>
  )
}

export default HeroItem