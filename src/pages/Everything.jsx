import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { makeRequest } from '../axios';
import Loader from '../components/Loader';
import MovieItem from '../components/MovieItem'
import img1 from '../images/movie1.jpg';

const Everything = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["homeList"], () =>
    makeRequest.get("/movies/filter?max=10").then((res) => {
      return res.data;
    })
  );
  return (
    <div className='container'>
        <h4 className='font-bold text-xl'>ფილმები კინოთეატრში</h4>
        <div className='mt-8 grid grid-cols-3 gap-8 lg:grid-cols-2 everything-row mb-10'>
            
          {isLoading ? <Loader /> : data.map(item => (
            <MovieItem key={item.id} id={item.id} title={item.title} image={item.image} category={item.category} />
          ))}
        </div>
    </div>
  )
}

export default Everything