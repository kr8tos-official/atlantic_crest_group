import React from 'react'
import Nav from "/components/Nav.js";
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import { about_us } from '../components/Data';


const aboutUs = () => {
  return (
   
    <div className='text-white' style={{backgroundImage:`url(/secondary_bg.jpg)` , backgroundPosition:"center", backgroundSize:"cover"}} >
    

        <div className='relative'>
              <div className='relative w-full h-[25em] max-h-[300px]  md:max-h-[500px] '>
              <Image 
                                      src="/About_Us_Header.jpg"
                                      fill
                                      unoptimized
                                      className="object-cover"
                                      ></Image>
                 
              </div>
              <h1 className='  text-white z-[100] absolute top-[40%] w-full right-0 left-0  font-bold text-[10vw]  md:text-[8vw] lg:text-[5vw]  leading-[1em] text-center '>ABOUT <br/>US</h1>
        </div>
    

        <Layout>


        {about_us.map((each_info, index)=>{
          return <div key={index} className={index % 2 === 1 ? `flex flex-col-reverse items-center   justify-around md:flex-row-reverse mt-[2em]  `:" px-[2em] mt-[2em] flex items-center flex-col-reverse md:flex-row  justify-around "}>
              <div className='w-[80%] mx-auto md:w-1/2 w-full font-bold font-Montserrat'>
              
                <h1 className='hidden md:flex text-[6vw] md:text-[3vw] mt-[1em] md:mt-[0px]   leading-[1em] text-center md:text-left md:w-[80%]'>{each_info.heading}</h1>
                <p  className='font-thin text-center md:text-left w-full text-[2vw] md:text-[1vw] lg:text-[0.8vw] leading-[3em] md:w-[80%] '>{each_info.info}</p>

              </div>

              <div className='w-full  md:w-1/2  '>
              <h1 className='font-Montserrat text-[6vw] md:text-[3vw]  mt-[1em] md:mt-[0px] font-bold md:hidden   leading-[1em] text-center md:text-left md:w-[80%]'>{each_info.heading}</h1>
                   <br/>
                    <div className='relative w-full h-[80vw]  w-[65%] md:w-[55%] md:h-[30vw]    max-h-[500px]  md:max-h-[800px] mx-auto '>
                                      <Image 
                                      src={each_info.image}
                                      fill
                                      unoptimized
                                      className="object-cover"
                                      ></Image>
                  
                    </div>
              </div>

              

             </div>
        })}

        
      </Layout>

       
     
    </div>
  )
}

export default aboutUs