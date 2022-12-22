import React, { useEffect, useState } from 'react'
import { makeRequest } from './../axios';

const Ticket = () => {
  const orn = [1,2,3,4,5,6,7,8,9, 10];
  const [data, setData] = useState([]);
  let token = window.location.pathname.split("/").pop()
  useEffect(() => {
    makeRequest.get("/seats/getsell/" + token).then((res) => {
      setData(res.data);
    })
  }, [])
  return (  
    <div className='container'>
      {!data.s_id ? <h4 className='font-bold text-2xl text-center'>ბილეთი ვერ მოიძებნა</h4> : (
        <div className='flex flex-col items-center'>
          <h4 className='font-bold text-2xl text-center justify-center'>ბილეთი {data.s_id}</h4>
          <div className='w-[520px] md:w-full mt-10'>
            <div className='bg-blue rounded-t-xl  px-6 py-6 w-full'>
              <h3 className='font-poppins font-medium text-lg text-pastel'>{data.title}</h3>
              <div className='mt-4'>
                <span className='text-gray4 text-xs'>დრო</span>
                <p className='text-white font-poppins text-sm'>{data.start_time.slice(5, 12)} {data.start_time.slice(17, 22)}</p>
              </div>
              <div className='mt-2'>
                <span className='text-gray4 text-xs'>ხანგრძლივობა</span>
                <p className='text-white font-poppins text-sm'>{data.duration}</p>
              </div>
              <div className='mt-2'>
                <span className='text-gray4 text-xs'>გახმოვანება</span>
                <p className='text-white font-poppins text-sm'>{data.language}</p>
              </div>
            </div>
            <div className='bg-pastel px-6 py-8 rounded-t-0 relative w-full'>
              <div className='flex gap-12 items-center md:gap-0 md:justify-between'>
                <ul className='font-bold text-md sm:text-sm'>
                  <li>ბილეთის ნომერი</li>
                  <li className='my-3'>ბილეთის ტოკენი</li>
                  <li>ყიდვის თარიღი</li>
                  <li className='mt-3'>არჩეული ადგილები</li>
                </ul>
                <ul className='text-md font-medium sm:text-sm md:text-right'>
                  <li className='font-poppins'>{data.s_id}</li>
                  <li className='font-poppins my-3'>{token}</li>
                  <li className='font-poppins'>{data.but_time.slice(5, 12)} {data.but_time.slice(17, 22)}</li>
                  <li className='font-poppins mt-3'>{data.selected}</li>
                </ul>
              </div>
              <div className='absolute bottom-0 translate-y-[50%] w-full flex justify-between px-6 sm:hidden'>
                {orn.map(item => (
                  <span className={`block w-[24px] h-[24px] translate-x-[-100%] rounded-full bg-white `}></span>
                ))}
              </div>
            </div>
            <div className='mt-10'>
                <h4 className='font-bold text-2xl'>გადახდა</h4>
                <div className='flex justify-between items-center'>
                  <ul className='font-bold mt-5'>
                    <li>ბილეთის ფასი</li>
                    <li className='my-2'>შესყიდული ბილეთები</li>
                    <li>საიტის საკომისიო</li>
                  </ul>
                  <ul className='text-right'>
                    <li className='font-poppins'>{data.price}.00 $</li>
                    <li className='font-poppins my-2'>{data.selected.split(",").length * data.price}.00 $</li>
                    <li className='font-poppins'>3.00 $</li>
                  </ul>
                </div>
                <hr className='text-grayBorder mt-3 mb-6'/>
                <div className='flex justify-between items-center'>
                  <p className='font-bold text-2xl'>ჯამი</p>
                  <p className='font-poppins font-bold'>{data.selected.split(",").length * data.price + 3}.00 $</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ticket