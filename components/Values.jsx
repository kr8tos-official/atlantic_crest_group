import React from 'react'

const Values = () => {
    const core_values = [
        {
            heading:"INNOVATIVE",
            details:"The Mother Company's transformative approach sets it apart from its peers. It continually seeks new ways to revolutionize industries, challenging traditional norms and fostering innovation at every turn",
            icon:"/industrious_icon.svg",
            color:"#54FFF5"
        },
        {
            heading:"RESILIENT",
            details:"The Mother Company's transformative approach sets it apart from its peers. It continually seeks new ways to revolutionize industries, challenging traditional norms and fostering innovation at every turn",
            icon:"/industrious_icon.svg",
            color:"#54FFF5"
        },
        {
            heading:"DIVERSE",
            details:"The Mother Company's transformative approach sets it apart from its peers. It continually seeks new ways to revolutionize industries, challenging traditional norms and fostering innovation at every turn",
            icon:"/industrious_icon.svg",
            color:"#54FFF5"
        },
    ]
  return (
    <div className='w-full font-Montserrat text-white text-center mt-[5vw] md:mt-[5em]'>
        <h1 className='font-medium text-[1.5em]'>OUR CORE <br/>VALUES</h1>
        <br/>
        
        <div className='flex w-full border  justify-evenly   items-center gap-[-5em] overflow-x-scroll   '>
        {
            core_values.map((each_value, index)=>{
                return <div key={index} className=' bg-gradient-to-r from-[#6751E9] to-[#1E1458]  md:w-[15em] md:h-[18em] p-[0.5em]' >
                    <div className='bg-gradient-to-b from-[#1E1458] from-10% to-[rgba(233,33,100,0.1)]   h-full flex p-[1em]  items-center flex-col justify-between'>
                        <img src={each_value.icon} className='w-[4em] self-end '></img>
                        <p className='mb-[2em]'>{each_value.heading}</p>

                    </div>
                </div>
            })
        }
        </div>
  


        



    </div>
  )
}

export default Values