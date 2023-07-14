import React from 'react'
import Image from 'next/image'
import { faBars, faClose, faCubesStacked,faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Intro = () => {
  return (
    <div className='flex   flex-col-reverse md:flex-row items-start font-Montserrat text-white  mt-[5em] md:px-[5em]'>

         {/* first div starts here */}

         
        <div className='relative   w-full md:h-[50vw] z-[10]  md:w-[65%]  '>

        
                    <div className='relative   w-[80%] h-[90vw]  md:w-[35vw] md:h-[45vw] max-w-[500px] max-h-[700px] ' >
                            <Image 
                                src="/we_build.png"
                                fill
                                unoptimized
                                className="object-fit"
                                ></Image>
                    </div>

                    <div className='bg-[#19176C] md:px-[3em] px-[6vw] py-[8vw] md:py-[4vw] 2xl:py-[3vw] 2xl:px-[3vw] absolute right-[0px] md:right-[-5vw] top-[15vw] rounded-br-[7vw] w-[60vw] md:w-[30vw]  max-w-[450px] max-h-[700px]   '>
                                <FontAwesomeIcon  icon={faCubesStacked} color='white' className='absolute right-[2em]  w-[2em] h-[2em]' />
                    
                                    <h1 className='font-light text-[5vw] md:text-[3vw]  leading-[1.5vw]'>We </h1>
                                    <h1 className='font-light  text-[6vw]     md:text-[4vw]  leading-[1.5em] '>Build</h1>
                                    <p className='font-thin leading-[5vw] md:leading-[2vw] text-[2vw]  md:text-[1vw] 2xl:text-[15px]  '>As a conglomerate, The Mother Company excels in identifying emerging opportunities and nurturing them into successful ventures. It possesses a diverse portfolio of companies spanning multiple sectors, including technology, energy, healthcare, consumer goods, and more. Through its strategic investments, acquisitions, and entrepreneurial spirit, The Mother Company continually expands its reach and influence across the globe.</p>
                    </div>
        </div>



        {/* second div starts here */}


        <div className='w-full  md:w-[35%] relative md:right-[6.8vw] 2xl:right-[2vw]  md:top-[2vw]  2xl:w-[50%] md:shrink-0  px-[1em]  md:px-[5vw] '>
               
                   <div className=' w-[50vw] h-[50vw]    md:w-[25vw] md:left-[14vw] relative md:absolute md:h-[25vw] md:left-[2vw] object-fit  ' >

                                <Image
                                src="/cut_circle.svg"
                                fill
                                unoptimized
                                className='object-fit'
                                >
                                    
                                </Image>                    
                   </div>
              
              
                <div className='w-full  md:w-full text-right md:text-right right-0 absolute top-[0px] md:left-[2vw]  '>
                    <div className='md:border-r-[1em] px-[1em] ml-[1em]'>
                            <h1 className='text-[6vw] md:text-[1.5vw] font-bold '>MULTINATIONAL</h1>
                            <h1 className=' md:text-[2.5vw] font-bold'>CONGLOMERATE</h1>
                        
                    </div>
                                       
                    <p className='  absolute right-0 w-[60%]  text-justify     md:w-[80%]  border-l-[0.5em] md:px-[1em] md:border-l-0   text-[2vw] md:text-[0.8vw] font-thin md:ml-[3em] w-full leading-[2em] '>With a global presence, Our Company is recognized for its excellence, adaptability, and commitment to creating positive change.  Today, it stands as a powerhouse conglomerate, shaping industries and leading the way in innovation and sustainability.</p>

                </div>

        </div>
        
 
  
  
    </div>
  )
}

export default Intro