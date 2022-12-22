import React from 'react'
import logo from '../images/logo.png';
import { FiBell } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-8 mb-10'>
        <div className='container flex justify-between items-center'>
            <div>
                <Link to="/"><img src={logo} /></Link>
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center font-bold xxs:hidden md:text-sm sm:hidden'>
                    <li>
                        <Link to="/" className='text-active'>მთავარი გვერდი</Link>
                    </li>
                    <li className='mx-14 sm:mx-4'>
                        <Link to="/everything">ყველა ფილმი</Link>
                    </li>
                    <li>
                        <Link to="/">საიტის შესახებ</Link>
                    </li>
                </ul>
                <FiBell className='ml-10 sm:ml-4 w-[18px] h-[18px] md:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Header