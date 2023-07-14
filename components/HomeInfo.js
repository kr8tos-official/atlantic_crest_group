import React from 'react'
import Image from 'next/image'
import { faBars, faClose, faCubesStacked,faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeInfo = () => {
    const qualities = [
        {
        heading:"INDUSTRIOUS",
        details:"The Mother Company's transformative approach sets it apart from its peers. It continually seeks new ways to revolutionize industries, challenging traditional norms and fostering innovation at every turn",
        icon:"/industrious_icon.svg",
        color:"#54FFF5"
    },
    {
        heading:"INDUSTRIOUS",
        details:"The Mother Company's transformative approach sets it apart from its peers. It continually seeks new ways to revolutionize industries, challenging traditional norms and fostering innovation at every turn",
        icon:"/industrious_icon.svg",
        color:"#54FFF5"
    },
    {
        heading:"INDUSTRIOUS",
        details:"The Mother Company's transformative approach sets it apart from its peers. It continually seeks new ways to revolutionize industries, challenging traditional norms and fostering innovation at every turn",
        icon:"/industrious_icon.svg",
        color:"#3A96EC"
    },
  
]
  return (
    <div className='relative font-Montserrat text-white mt-[3em] md:mt-[10em]    '>
        <div className='w-full h-[0.3em] bg-white mt-[0.5em]'></div>
        <div className='w-full h-[0.3em] bg-white mt-[1em]'></div>
        
                     <div className='relative md:w-[30vw] max-w-[700px] mt-[4em] ' >
                     <img src={"/complex_circles.png"}  className='w-full'/> 
                            {/* <Image 
                                src="/complex_circles.png"
                                fill
                                
                                className="object-cover"
                                ></Image> */}
                    </div>


                    <div className='flex flex-col md:flex-row items-center text-white font-Montserrat'>
                        <div className='w-full md:w-1/2 shrink-0'>
                            <p className=' font-thin text-[1em] md:text-[2em] md:hover:tracking-[0.1em] md:hover:text-[orange] duration-200'>TO PARTICIPATE IN THE</p>
                            <h2 className=' font-medium text-[1.4em] md:hover:tracking-[0.2em] md:hover:text-[orange] duration-300'>BUILDING OF A</h2>
                            <h1  className=' font-bold text-[1.7em] md:text-[3em] md:hover:tracking-[0.3em] md:hover:text-[orange] duration-500'>GLOABL STATE</h1>
                        </div>

                        <div className='md:w-1/2 flex flex-col gap-[2em]'>
                            {qualities.map((each_quality, index)=>{
                                return < div key={index} className='flex items-center gap-[1em]'> 
                                           
                                                <img src={each_quality.icon} className='w-[3em]'></img>
                                                <div className= {`border-l-8 px-[1em] border-[${each_quality.color}] `}> 
                                                    <h1 className='font-bold' >{each_quality.heading}</h1>
                                                    <p className='font-thin text-[0.7em] w-full md:text-[0.8em] w-[80%]'> {each_quality.details}</p>
                                                </div>
                                           
                                         </div>
                            })}

                        </div>
                    </div>

                    <div className='flex flex-col-reverse md:flex-row  mt-[4em] md:mt-[10em]'>
                        <div className='md:w-1/2'>
                            <h1 className='font-medium w-full text-[6vw] md:text-[2em]'>WE BUILD INTERNATIONAL </h1>
                            <h1 className='font-medium text-[5vw]  md:text-[2em]'>COOPERATIONS GLOABALLY </h1>
                            <br/>
                            
                            <p className='font-thin text-[3vw]  w-full md:text-[0.9em] text-justify leading-[2em] md:hover:leading-[3em] w-[80%] duration-200'>With an astute understanding of international markets, The Mother Company identifies promising opportunities across the globe. It carefully selects industries and regions where it can make a significant impact and effectively builds companies that align with its vision and values.</p>
                        </div>
                        <div className='w-full md:md:w-1/2 '>
                            <img  src="/building_blocks.svg"  className='w-[30vw] md:w-[15em] md:mx-auto'  />
                            {/* <div className='relative  w-[40%]'>
                                    <Image 
                                        src="/building_blocks.svg"
                                        fill
                                        unoptimized
                                        className="object-cover"
                                        ></Image>
                            </div> */}
                        
                        </div>
                    </div>














    </div>
  )
}

export default HomeInfo