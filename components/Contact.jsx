import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {  useState } from 'react';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

   
    const [contact, setContact] = useState({user_name:"", user_email:"", user_message:"" })
    
    const resetter =()=>{
        setContact({...contact, user_name:"", user_email:"", user_message:""})

    }

    function verify_email (word){
        const mailformat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"
        if(word.match(mailformat)){
            alert("your email is valid")
            //setErrors({...errors, email_error:true})
        }else{
            alert("your email is invalid")
        }
    }

    const handleSubmit =(event)=>{
        var regExp  = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
       
        
        
        if(!contact.user_name  || !contact.user_email || !contact.user_message){
            
            alert("Please Fill All Fields")
            event.preventDefault()
        }else{
            if(regExp.test(contact.user_email)===true){
                fetch('/api/contact',{
                    method: "POST",
                    headers:{
                        "Accept" : "application/json , text/plain, */*",
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(contact)
        
                }).then((res)=>{
                    if(res.status === 200){
                        alert("EMAIL HAS BEEN SENT. THANK YOU FOR CONTACTING US")
                      
                    }else if(res.status ===400){
                        alert("Bad Request Right Now Please Try Again Later")
                    }
                })
                resetter()
              
               }else{

                alert("Please validate your email")
             
               
               }
        
           
            
           

        }


      
    }



    
  return (
    <>
    
    

    <div className='text-white   font-thin w-full  px-[3vw]' >
        <p className='text-[2vw] md:text-[1vw] font-light text-center duration-300 tracking-[.3em] hover:tracking-[.6em] animate-pulse 2xl:text-[20px]   '>CONNECT WITH US</p>
        <div className='flex flex-col md:flex-row-reverse mt-[4vw]'>
            <div className='w-full h-[50vh]  md:w-1/2 md:flex md:h-auto relative ' >
                <Image src={"/brand image.png"} className="object-cover" layout='fill'  unoptimized alt="image could not be found" />   
            </div>
        
            <form className= ' w-full  md:w-1/2 flex flex-col gap-[4vw] md:gap-[1vw] 2xl:gap-[30px] '>

                        
                        <p className='text-center text-[10vw]  md:text-left md:text-[6vw]  duration-500 hover:text-[orange]   hover:tracking-[.1em]  w-[100%] mx-auto font-bold 2xl:text-[90px]'>CONTACT </p>
                        <p className='text-center text-[10vw]  md:text-left md:text-[6vw] mt-[-4vw]   duration-500 hover:text-[orange]   hover:tracking-[.5em]  w-[100%] mx-auto font-bold 2xl:text-[90px] 2xl:mt-[-40px] '>US </p>
                    
                        <p className='text-center text-[4vw] leading-[5vw] md:leading-[2.5vw] md:w-[80%]   md:text-[2vw] font-light  w-[100%]  md:text-left leading-[4vw] 2xl:text-[30px] 2xl:leading-[1em]   '>CONNECT WITH US FROM ANYWHERE AROUND THE WORLD</p>
                        <div className='flex flex-col md:mt-[3vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] 2xl:gap-[10px]'>
                            <label  className='font-light text-[3.5vw] md:text-[90%] '>Name:</label>
                            <input 
                            value={contact.user_name}
                    
                            onChange={(event)=>{
                                setContact({...contact, user_name: event.target.value})         
                            }}
                            name="name" 
                            className= 'bg-[transparent] border    focus:text-white   rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw] md:w-[90%] duration-700 2xl:p-[20px] 2xl:text-[1em] ' placeholder='Please Enter Your Name'/>
                        </div>

                        <div className='flex flex-col  gap-[1vw] 2xl:gap-[10px]'>
                            <label   className='2xl:text-[1em] font-light text-[3.5vw] md:text-[90%]'>Email:</label>
                            <input  
                            onChange={(event)=>{
                                setContact({...contact, user_email: event.target.value})
                            }} 
                        
                        
                            value={contact.user_email}


                            required
                            type="email"
                        
                            className= 'bg-[transparent] border    focus:text-white   rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw] md:w-[90%] duration-700  2xl:p-[20px] 2xl:text-[1em] ' placeholder='Please Enter Your Email'/>
                        </div>

                    
                        


                        <div className='flex flex-col  gap-[1vw] 2xl:gap-[10px] '>
                            <label   className='2xl:text-[1em] font-light text-[3.5vw] md:text-[90%]'>Message:</label>
                            <textarea  
                            value={contact.user_message}
                            onChange={(event)=>{
                                setContact({...contact, user_message: event.target.value})
                            }}
                            name="message"
                            rows="5"
                            className='bg-[transparent] 
                            p-[1em]
                            md:w-[90%]
                        
                            
                            
                            border rounded-[1vw]  xl  2xl:rounded-[10px]' >
                            </textarea>
                        </div>
                        <button 
                        id="send_btn" 
                        type="submit"      
                        onClick={(e)=>{
                            handleSubmit(e)
                        
                        }} className='rounded-full text-[2.5vw] border w-2/5 p-[2.5vw] text-white bg-background hover:bg-[orange] duration-300 hover:border-0 md:text-[1vw] md:p-[1.5vw] 2xl:text-[12px] 2xl:p-[20px]   '> SEND MESSAGE</button>
                        
                        <div className=' w-full flex-wrap  flex items-start wrap gap-[2vw]  justify-around '>
                           
                                     <span className='flex items-center  border-l-[5px] gap-[10px] px-[1vw]  ' >
                                          <FontAwesomeIcon icon={faEnvelope}  size ="1x" />
                                           <p className='text-[3vw] md:text-[1.2vw] '>absnyarko@gmail.com </p>
                                      </span>

                                     <span className='flex items-center border-l-[5px] gap-[10px] px-[2vw]  ' >
                                           <FontAwesomeIcon icon={faPhone} size='1x' />
                                           <p className='text-[3vw] md:text-[1.2vw] '>07713480241 </p>
                                      </span>        
                         


                            <Link href={"https://www.instagram.com/abs_nyark/"}>
                                     <span className='flex items-center border-l-[5px] gap-[10px] px-[2vw]  ' >
                                     <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
                                  
        
                
                                    <p className='text-[3vw] md:text-[1.2vw] '>abs_nyark</p>
                                      </span>
                            
                            
                            </Link> 
                         </div>

                  
                         <div className=' w-auto  flex items-start  gap-[2vw] '>
                

   

                            

   
                            
                      
                         </div>
                        

           
            </form>


        
       
        </div>



       
        
        
      
        
        
        
        </div>

        </>
  )
}

export default Contact