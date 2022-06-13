import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import '../Styles/Dedicate.css'
  
const Dedicate= ()=>{
   return(
       <div>
           <Header/>
        <h1>
            This website is dedicated to
        </h1>
           <h2>
            Larry Mays
            </h2>
           <Carousel/>
        
        
        </div>
  )
        
}

export default Dedicate;