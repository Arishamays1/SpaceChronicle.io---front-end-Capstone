import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

const Dedicate= ()=>{
   return(
       <div>
        <h1>
            This website is dedicated to
        </h1>
        <h2>
            Larry Mays
        </h2>
        </div>
  )
        
}
export default Dedicate;