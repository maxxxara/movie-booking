import React from 'react'
import logo from '../images/logo2.png';
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='mt-16 border-t pt-16 pb-20 border-gray3'>
        <div className='container'>
            <div className='grid grid-cols-4 gap-4 md:grid-cols-2 md:gap-y-10'>
                <div>
                    <img src={logo}/>
                </div>
                <ul className='text-md md:hidden'>
                    <li className='font-medium text-lg'>Home</li>
                    <li>Everything</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Policy</li>
                    <li>Our Terms</li>
                    <li>Problems</li>
                </ul>
                <div>
                    <p className='font-medium text-lg'>Follow Social Media</p>
                    <div className='flex mt-4'>
                        <FiInstagram className='w-6 h-6'/>
                        <FiTwitter className='w-6 h-6 mx-5'/>
                        <FiFacebook className='w-6 h-6'/>
                    </div>
                    <p className='text-sm font-medium mt-8'>2021 TIX ID - PT Nusantara Elang Sejahtera.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer