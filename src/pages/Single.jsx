import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Calendar from '../components/Single/Calendar'
import CalendarItem from '../components/Single/CalendarItem'
import TakeSeats from '../components/Single/TakeSeats'
import img1 from '../images/hero1.jpg'
import { useQuery, useQueryClient } from 'react-query';
import { makeRequest } from './../axios';
import Loader from './../components/Loader';
import MoreInfo from './../components/Single/MoreInfo';
const Single = () => {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [DatesLoading, setDatesLoading] = useState(true);
  const [selected, setSelected] = useState([]); 
  const m_id = useParams().id;
  useEffect(() => {
    makeRequest.get("/movies/single/" + m_id).then((res) => {
      console.log(res.data[0])
      setData(res.data[0])
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    if(data.title) {
      makeRequest.get("/calendar/dates/" + m_id).then((res) => {
        setDates(res.data)
        setDatesLoading(false)
      })
    }
  }, [data])
  const getCalendarInfo = (item) => {
    setSelected(item)
  }


  return (
    <div className='container pb-20'>
      {loading ? <Loader /> : (
      <div className='flex justify-between w-full gap-44 lg:flex-col lg:gap-2'>
        <div className='w-2/3 lg:w-full'>
          {DatesLoading ? <Loader /> : (<Calendar dates={dates} get={(info) => getCalendarInfo(info)} />)}
          <hr className='text-gray2 mt-6'/>
          <>
          <h1 className='font-medium text-xl mt-10 mb-6'>{data.title}</h1>
          <div className='w-64 h-64 mb-6 hidden lg:flex sm:w-full sm:h-full'>
            <img src={data.image} className='w-full h-full rounded-xl'/>
          </div>
          <MoreInfo category={data.category} language={data.language} duration={data.duration}/>
          <p className='mt-6 leading-8 text-sm'>{data.description}</p>
          </>
        </div>
        <div className='w-1/3 lg:w-full'>
          <div className='w-full h-[360px] lg:hidden'>
            <img className='w-full h-full rounded-xl' src={data.image} />
          </div>
          <TakeSeats selected={selected}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default Single