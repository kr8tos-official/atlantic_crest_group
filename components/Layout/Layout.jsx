import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full py-[5em] px-[2em]   relative mx-auto max-w-[1300px]'>

        {children}
    </div>
  )
}

export default Layout