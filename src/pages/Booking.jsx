import React, { useContext, useEffect, useState } from 'react'
import Order from '../components/Booking/Order';
import Seats from '../components/Booking/Seats';
import CubesList from './../components/Booking/CubesList';
import { makeRequest } from './../axios';
import { useParams } from 'react-router-dom';
import Loader from './../components/Loader';
import { useQuery, useQueryClient } from 'react-query';
import BookingContext from './../context/BookingContext';

const Booking = () => {
  const {selected, setSelected, selectedMovie, setSelectedMovie} = useContext(BookingContext)
  let c_id = useParams().id;

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selected, setSelected] = useState([]);
  useEffect(() => {
    makeRequest.get("/calendar/single/" + c_id).then((res) => {
      setMovie(res.data[0])
      setLoading(false);
    })
  }, [])

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["seats"], () =>
    makeRequest.get("/seats/all/" + c_id).then((res) => {
      return res.data.taken;
    })
  );
  
  useEffect(() => {
    if(selectedMovie.id != c_id) {
      setSelectedMovie(movie);
      setSelected([]);
    }
  }, [])

  const seatClicked = (item) => {
    if(data[item] !== 1) {
      if(selected.length > 0) {
        selected.map(i => {
          if(i == item) {
            let local = selected.filter(val => val !== item)
            setSelected(local);
            setSelectedMovie(movie)
          } else {
            setSelected([...selected, item]);
            setSelectedMovie(movie)
          }
        })
      }else {
        setSelected([...selected, item]);
        setSelectedMovie(movie)
      }
    }
  }


  return (
    <div className='container pb-10'>
      {loading ? <Loader /> : (
      <div className='flex gap-10 lg:flex-col'>
        <div className='w-1/2 lg:w-full'>
          <h1 className='font-bold text-2xl'>აირჩიეთ ადგილები</h1>
          <p className='text-sm text-gray6 mt-4 mb-8'>ადგილების ადგილზე გადაცვლა შეუძლებელია, გთხოვთ იყოთ ყურადღებით.</p>
          <CubesList />
          <Seats isLoading={isLoading} data={data} selected={selected}  seatClicked={(item) => seatClicked(item)}/>
        </div>
        <div className='w-1/2 lg:w-full'>
          <h1 className='font-poppins text-2xl font-medium'>{movie.title}</h1>
          <div className='flex gap-4 mt-2'>
            <p className='font-poppins text-sm font-medium'>{movie.start_time.slice(17,22)}</p>
          </div>
          <Order selected={selected} price={movie.price} movie={movie} />
        </div>
      </div>
      )}
      
    </div>
  )
}

export default Booking