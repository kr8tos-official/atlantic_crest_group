import React from 'react';
// import small_logo from  "../public/assets/small_logo.svg"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { faBars, faClose, faCubesStacked,faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { subsidiaries } from './Data';
const Nav = () => {
  const [menu, setmenu] = useState(true)
  const [set_subdidiaries, show_subsidiaries] =  useState(false)



 
  useEffect(() => {

    window.addEventListener("resize", ()=>{

      if(window.innerWidth < 640){
        setmenu(false)
      }else{
        setmenu(true)
      }
    })

  }, [])
  
useEffect(() => {
  if(menu & window.innerWidth < 640) {
    setmenu(false)
  }

}, [])

const handle_menu=()=>{
  show_subsidiaries(true) 
  if(window.innerWidth < 640){
    setmenu(false)
  }
  
}
  return (

      
        
    <div >

  
       <nav className='fixed z-[10000] text-[white]  h-auto top-0 left-0  bg-gradient-to-r from-[#262468] to-[#524B40]  w-full p-1 shadow gap-10 py-[4vw] md:py-[1vw]  flex items-center flex-col  md:flex-row md:w-full md:items-center md:justify-between font-Montserrat' >
       
      {!menu &&<FontAwesomeIcon  icon={faBars}color='white' className='absolute left-[3vw] md:hidden bottom-[2vw] w-[20px]' onClick={()=>{ setmenu(!menu)}}/>}
     
        {menu ?    
        
             <>
             <FontAwesomeIcon  icon={faClose}color='white' className='absolute left-[3vw] md:hidden w-[20px]' onClick={()=>{ setmenu(!menu)}}/>
              <div className=' w-auto  flex  h-auto items-center cursor-pointer md:ml-[2vw] gap-[1vw] md:w-1/5 '  >
                          
                          {/* <img
                          className='h-10 inline'
                          src={small_logo.src}/> */}
                          <h1 className='text-[0.8em] font-[Montserrat] font-medium text-white'>Atlantic Crest Group</h1>
              </div>

              <ul   className='w-full flex flex-col justify-evenly items-center  flex-wrap gap-6  md:flex-row md:w-[full]    md:gap-5 md:w-[70%] 2xl:w-3/6 duration-300'>
                  <li className='w-auto hover:border-l-[1vw]  hover:border-[orange] duration-300'>
                    <Link href="/"><p className=' text-resp text-white w-auto md:hover:text-2xl hover:font-thin duration-500 font-thin font-[Montserrat] md:text-resp2 lg:text-[1em] '>Home</p></Link> 
                  </li>

                  <li className='w-auto hover:border-l-[1vw] hover:border-[orange] duration-300' >
                <Link href={"/abs_nyark/shimoks"}><p className='text-resp text-white w-auto md:hover:text-lg hover:font-thin duration-500 font-thin font-[Montserrat] md:text-resp2 lg:text-[1em]'>Intro</p></Link> 
                  </li>

                  <li className=' md:w-auto md:hover:border-l-[1vw] md:hover:border-[orange] duration-300  ' onMouseEnter={()=> {handle_menu()}}  >
                        <div className='flex items-center justify-evenly md:gap-[4px]'>
                              <p  className='text-resp text-white w-auto md:hover:text-lg md:hover:font-thin duration-500 font-thin font-[Montserrat] md:text-resp2 lg:text-[1em]' >Our Subsidiaries</p>
                              <FontAwesomeIcon icon={faCubesStacked} size='sm' />
                              <p className='bg-[white] text-[black] text-center rounded-[10vw] px-[8px] '>4</p>
                        </div>
                          {set_subdidiaries && <ul onMouseLeave={()=>{show_subsidiaries(false)}} className='w-auto mt-[1em] md:mt-[0px] flex flex-col gap-[10px] border-l-4 px-[1em] border-indigo-500  md:absolute top-[70px] '>
                          {subsidiaries.map((each_subsidiary, index)=>{
                            return<Link  key={index} href={"/"}><  li   className=' md:bg-[#1F1D53] md:shadow md:px-[20px] md:py-[6px] font-thin text-[0.8em]  md:text-[1em]'><p className='hover:border-l-4 border-[orange] duration-200'>{each_subsidiary.company_name}</p></li></Link>
                          })}
                          </ul>}

                          
                         
                          

                 
                  </li>

                  <li className='w-auto hover:border-l-[1vw] md:hover:border-[orange] duration-300'>
                  <Link href={"/aboutUs"} scroll={true}><p className='text-resp text-white w-auto md:hover:text-lg hover:font-thin duration-500 font-thin font-[Montserrat] md:text-resp2 lg:text-[1em]'>About Us</p></Link>
                  </li>

                  <li className='w-auto hover:border-l-[1vw] md:hover:border-[orange] duration-300'>
                  <Link href={"/contactUs"} scroll={true}><p  className='text-resp text-white w-auto md:hover:text-lg hover:font-thin duration-500 font-thin font-[Montserrat] md:text-resp2 lg:text-[1em]'>Contact Us</p></Link>
                  </li>

                 

              </ul>


          </>: <></>}



  
       </nav>

 
       
  </div>


  )
}


  


export default Nav