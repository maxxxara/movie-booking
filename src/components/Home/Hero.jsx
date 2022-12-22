import React from 'react'
import hero1 from '../../images/hero1.jpg'
import hero2 from '../../images/hero2.jpg'
import HeroItem from './HeroItem'
import { useQuery, useQueryClient } from 'react-query';
import { makeRequest } from './../../axios';
import Loader from '../Loader';

const Hero = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["hero"], () =>
    makeRequest.get("/movies/newest").then((res) => {
      return res.data;
    })
  );


  return (
    <div className='container'>
      <h4 className='text-xl font-bold mb-8 text-center'>უახლოესი ფილმები</h4>
      <div className='flex justify-between gap-10 md:flex-col'>
        {isLoading ? <Loader /> : data.map(item => (
          <HeroItem key={item.id} m_id={item.m_id} title={item.title} image={item.image} category={item.category} />
        ))}
      </div>
    </div>
  )
}

export default Hero