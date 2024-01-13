import React from 'react'
import { netflix_logo_url } from '../utilis/constant'

export const Header = () => {
  return (
    <div>
        <div className='absolute w-44 ml-20 bg-gradient-to-b from-black z-10'>
            <img src={netflix_logo_url} alt="logo"></img>    
        </div>        

    </div>
  )
}
