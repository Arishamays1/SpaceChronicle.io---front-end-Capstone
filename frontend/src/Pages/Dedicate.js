import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import '../Styles/Dedicate.css'
import Footer from '../Components/Footer'
const Dedicate= ()=>{
   return(
       <div>
           <Header/>
        <h1>
            This website is dedicated to
        </h1>
           <h2>
           my dad, Larry Mays
            </h2>
           <Carousel/>
        <h1>
            The best dad in the world.
        </h1>
        <p className='prgh'>My dad's love for computers, astronomy and the sciences, and art was passed down to me at a very early age.
            He spearheaded my interest in computer science at the age of 3 and here I am, officially a software engineer, 20 years later.
            So I dedicate my page to you dad. Thank you.
        </p>
        <Footer/>
        </div>
  )
        
}

export default Dedicate;