import React from 'react'

import Link from 'next/link'

import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className='bg-[#141243] font-Montserrat text-white flex flex-col items-center   py-[4vw] 2xl:py-[50px]'>
                <h1 className=' text-white text-[4vw] md:text-[3.5vw] xl:text-[2vw]  leading-[85%]   font-regular 2xl:text-[30px]'>   FOLLOW US ON OUR </h1>
                <h1 className=' text-white text-[4vw] md:text-[3.5vw] xl:text-[2vw]  leading-[85%]   font-regular 2xl:text-[30px]'> SOCIALS</h1>
              
                <p className='text-center text-[2vw] leading-[5vw] md:leading-[2.5vw] md:w-[80%]   md:text-[1vw] font-thin  w-[100%]  md:text-center leading-[4vw] 2xl:text-[15px] 2xl:leading-[1em]  mt-[2em] '>Interact with us and follow us on all Social Media Platforms</p>
                <br/>
                <div className=' w-full flex-wrap  flex items-center justify-around wrap gap-[2vw] 2xl:w-[80%] '>
                            <Link href={"/"}><span className='flex items-center  border-l-[5px] gap-[10px] px-[1vw]  ' ><FontAwesomeIcon icon={faEnvelope}  size ="1x" className='border rounded-full p-[0.5em]'/><p className='text-[2vw] md:text-[1vw] 2xl:text-[18px]  '>absnyark@gmail.com </p></span></Link>  

                            <Link href={"/"}><span className='flex items-center border-l-[5px] gap-[10px] px-[2vw]  ' ><FontAwesomeIcon icon={faPhone} size='1x' className='border rounded-full p-[0.5em]' /><p className='text-[2vw] md:text-[1vw] 2xl:text-[18px]'>facebok_handle </p></span></Link> 

                            <Link href={"/"}><span className='flex items-center border-l-[5px] gap-[10px] px-[1vw]  ' ><FontAwesomeIcon icon={faFacebook} size='1x' className='border rounded-full p-[0.5em]' /><p className='text-[2vw] md:text-[1vw] 2xl:text-[18px] '>facebok_handle </p></span></Link> 

                            <Link href={"/"}><span className='flex items-center border-l-[5px] gap-[10px] px-[2vw]  ' ><FontAwesomeIcon icon={faInstagramSquare} size='1x' className='border rounded-full p-[0.5em]' /><p className='text-[2vw] md:text-[1vw] 2xl:text-[18px]'>facebok_handle </p></span></Link> 
                         </div>
    </div>
  )
}

export default Footer