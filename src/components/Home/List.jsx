import React from 'react'
import img1 from '../../images/movie1.jpg';
import img2 from '../../images/movie2.jpg';
import img3 from '../../images/movie3.jpg';
import MovieItem from './../MovieItem';
import ListTexts from './ListTexts';
import { useQuery, useQueryClient } from 'react-query';
import { makeRequest } from './../../axios';
import Loader from './../Loader';
const List = () => {

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["homeList"], () =>
    makeRequest.get("/movies/filter?max=3").then((res) => {
      return res.data;
    })
  );

  return (
    <div className='py-16 container'>
        <ListTexts />
        <div className='mt-10 grid grid-cols-3 gap-4 place-items-center lg:grid-cols-2 lg:gap-y-14 movies-list'>
          {isLoading ? <Loader /> : data.map(item => (
            <MovieItem key={item.id} id={item.id} title={item.title} image={item.image} category={item.category} />
          ))}
        </div>
    </div>
  )
}

export default List