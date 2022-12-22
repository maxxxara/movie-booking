import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BookingContext from './../../context/BookingContext';

const Order = ({selected, price, movie}) => {
    const {setSelectedMovie} = useContext(BookingContext)

    const fee = 3;
    let n = useNavigate();

    // const submitHandle = () => {
    //     setSelectedMovie(movie)
    //     return n("/checkout");
    // }
  return (
    <div className='w-2/3 border border-gray2 rounded-xl p-6 mt-8 sm:w-full'>
        <p className='text-xl font-bold'>შეკვეთის დადასტურება</p>
        <div className='flex justify-between mt-8 border-b border-gray3 pb-6'>
            <ul>
            <li className='font-bold'>ბილეთის ფასი</li>
            <li className='font-bold mt-2'>არჩეული ბილეთები</li>
            </ul>
            <ul>
            <li className='font-poppins font-medium'>{price}.00$</li>
            <li className='font-poppins font-medium mt-2'>{price * selected.length}.00$</li>
            </ul>
        </div>
        <div className='flex justify-between mt-8 border-b border-gray3 pb-6'>
            <ul>
            <li className='font-bold'>საიტის გადასახადი</li>
            </ul>
            <ul>
            <li className='font-poppins font-medium'>3.00$</li>
            </ul>
        </div>
        <div className='flex justify-between mt-4 pb-3'>
            <ul>
            <li className='font-bold'>ჯამი</li>
            </ul>
            <ul>
            <li className='font-poppins font-medium'>{selected.length > 0 ? price * selected.length + fee + '.00' : 0}$</li>
            </ul>
        </div>
        <Link to={"/checkout"}>
        <button className='w-full mt-4'>გადახდა</button>
        </Link>
        </div>
  )
}

export default Order