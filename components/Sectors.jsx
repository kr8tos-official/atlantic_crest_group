import React from 'react'
import { subsidiaries } from './Data'
import Image from 'next/image'
import { useState } from 'react'


const Sectors = () => {
    
  const [current, set_current] = useState(-1)

  return (
    <div className='mt-[5vw] md:mt-[8em]'>
        <h1 className='font-bold text-[2em] md:text-[4em]  leading-[1em]'> OUR </h1>
        <h1 className='font-bold text-[2em] md:text-[5.5em] tracking-[0.2em] leading-[1em]'> SECTORS </h1>
        <p className='md:w-1/2 font-thin text-[0.5em] md:text-[1em] leading-[2em] '>Welcome to the vibrant world of Atlantic Crest's subsidiary companies.  As a renowned conglomerate in the industry, Atlantic Crest is proud to present a curated collection of exceptional our children companies that cater to the diverse interests and global needs. </p>
     
        

    <div className='flex  flex-wrap items-start justify-around  '>
        
            {subsidiaries.map((each_sector, index)=>{
                return <div key={index} className={index % 2 === 0 ? `mt-[2em] md:mt-[0px]`:" mt-[4em]"}>

                        <div  className={current ===index ? ' flex max-w-full  md:max-h-[600px] gap-[2em]':" flex max-w-[400px] gap-[2em] "} onMouseEnter={()=>{set_current(index)}}  onMouseLeave={()=>{set_current(-1)}}   >
                          <h1 className='text-[4em] font-bold  '>{index + 1}</h1>
                            <div className={current===index ? `w-full relative   ` : " w-auto"}>
                              <div className={current===index ? "relative duration-200 w-[65vw] h-[50vw] md:w-[33em] md:h-[25em]  ":  `relative w-[50vw] h-[60vw] md:w-[15em] md:h-[20em] duration-300`}> 
                                    <Image 
                                    fill
                                    unoptimized
                                    src= {each_sector.images}
                                    className='object-cover'
                                    >
                                    
                                    </Image>

                              </div>
                              {current === index ?
                              <div className=' w-[100%] p-[1em] md:p-[2em] max-w-[600px] bg-gradient-to-r from-[#1E1C59] shadow-lg to-[rgba(100,100,100,0.5)]  md:relative md:bottom-[10em] md:right-[-5em] '>
                                <div className='flex items-center justify-between flex-row-reverse '>
                                    <img src={each_sector.icon} className=' w-[2em] top-0 right-[1em]'></img>
                                    <h1 className='md:text-[1.5vw] font-medium'>{each_sector.company_name}</h1>

                                </div>

                                <h1 className='text-xs uppercase'>{each_sector.sector}</h1>
                                
                                <p className='font-thin text-[2vw] md:text-[0.8vw]' >{each_sector.details}</p>
                              </div> : <></>}
                              

                              {current !== index ? 
                              <div className='small_words '> 
                                  <p className=''>{each_sector.company_name}</p>
                              <p id="short_dec" className='font-thin text-[0.6em] '>{each_sector.details}</p>
                              <p id="short_dec" className='font-bold text-[orange] text-[0.6em] '>READ MORE</p>
                              </div> : <></> }
                            
                            </div>
                        </div>
                </div>
               
            })}
    </div>
    </div>
  )
}

export default Sectors