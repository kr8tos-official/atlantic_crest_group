import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col  items-center md:flex-row'>
        <div className='w-full  md:w-1/2'>
            <img src='/logo.svg' className=' w-[35%] mx-auto md:mx-[0px] '></img>
            <div className=''>
                <h1 className='font-medium text-[8vw] md:text-[4vw] text-center md:text-left 2xl:text-[65px]'>ATLANTIC</h1>
                <h1 className='font-medium text-[9vw] md:text-[4.5vw] text-center md:text-left 2xl:text-[80px]'>CREST GROUP</h1>
                <p className='font-thin  w-[70%] mx-auto md:mx-[0px] leading-[3em] text-[2vw] text-center md:text-[0.8vw] md:text-left'>The Atlantic Crest Group was founded with a vision for driving innovation and making a lasting impact globally. Over the years, it has grown into a diverse organization, acquiring businesses across sectors, and embracing emerging technologies. </p>
               <br/>
                <Link href="/">  <button type="button"  className="  bg-[#3954DF] ml-[40%] md:ml-[0px] px-6 md:px-4 pt-2.5 pb-2 text-[1.5vw] md:text-[0.8vw] font-light uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-700 ease-in-out  hover:bg-[orange] hover:text-[white]"> EXOLORE MORE{">>"} </button>     </Link>
                  
            </div>
        </div>

        <div className='relative  hidden md:flex md:w-1/2 h-full object-fit' >
          <img src="/header_Image.png" />


        </div>

    </div>
  )
}

export default Header