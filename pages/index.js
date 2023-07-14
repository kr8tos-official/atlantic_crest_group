
import Image from 'next/image'
import Nav from "/components/Nav.js"
import Header from '../components/Header'
import Intro from '../components/Intro'
import HomeInfo from '../components/HomeInfo'
import Values from '../components/Values'
import Sectors from '../components/Sectors'
import Layout from '../components/Layout/Layout'



export default function Home() {
  return (
    <div  className='font-Montserrat w-full text-white '>
     
      <div className='bg-[#1E1C59] ' style={{backgroundImage:`url(/background.jpg)` , backgroundPosition:"top", backgroundSize:"cover"}} >
      <Layout>
        <Header></Header>
        <Intro></Intro>
       
        <HomeInfo></HomeInfo>
        <div className='w-full h-[0.5em] mt-[2em] bg-white'></div>
        <Values></Values>

        <div className='w-full h-[0.5em] mt-[2em] bg-white'></div>
        <Sectors></Sectors>
        <div className='w-full h-[0.5em] mt-[2em] bg-white'></div>
        <div className='relative w-full h-[20em] mt-[5vw] md:h-[40em]'>
          <Image
          src={"/NICE_IMAGE.png"}
          fill
          className='object-cover'
          unoptimized
          ></Image>

        </div>
        </Layout>
  
     

      </div>
     
    </div>
  )
}
