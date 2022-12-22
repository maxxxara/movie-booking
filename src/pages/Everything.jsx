import React from 'react'
import MovieItem from '../components/MovieItem'
import img1 from '../images/movie1.jpg';

const Everything = () => {
  return (
    <div className='container'>
        <h4 className='font-bold text-xl'>ფილმები კინოთეატრში</h4>
        <div className='mt-8 grid grid-cols-3 gap-8 lg:grid-cols-2 everything-row mb-10'>
            <MovieItem image={img1} title={"Spider Man"} category={"Action"}/>
        </div>
    </div>
  )
}

export default Everything