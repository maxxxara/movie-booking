import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ({title, image, category, id}) => {
  return (
    <div className='w-full'>
      <Link to={"/single/" + id}>
        <div className='w-full h-[470px]'>
          <img src={image} className='w-full h-full rounded-2xl'/>
        </div>
        <h4 className='font-bold text-xl mt-10 mb-2'>{title}</h4>
        <span className='font-bold text-xs bg-blueBg px-[8px] py-[6px] text-white rounded-lg'>{category}</span>
      </Link>
    </div>
  )
}

export default MovieItem