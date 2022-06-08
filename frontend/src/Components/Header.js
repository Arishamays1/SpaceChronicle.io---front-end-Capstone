import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Header = (props) =>{
    const navigate = useNavigate()
    const[cookie,setCookie,removeCookie] = useCookies([])
    
    useEffect(()=>{
        const logout = document.getElementById('logout')
        console.log(logout)
        const verifyUser = async()=>{
            if(!cookie.jwt){
                logout.style="display:normal"
            }else{
                const{data} = await axios.post('https://space-io-backend.herokuapp.com/register',{},
                {withCredentials:true})
                if(!data.status){
                    removeCookie('jwt')
                }else{
                    logout.style="display:normal"
                }
            }

        }
        verifyUser()
    },[cookie,removeCookie])
    const logOut=()=>{
        removeCookie('jwt')
        navigate('/')
    }

    return(
        <>
        <nav className="navbar">
            <Link to='/'>
                <img src={require('../Pictures/Visuals/Spacchronlogo.png')}></img>
                </Link>    
                
            <Link to ='/login'>
               Login
            </Link> 
            <Link to ='/register'>
                Register
            </Link>
             <Link onClick={logOut} to='/'>
                <span id="logout">Logout</span>
            </Link>
          <a href="" target='_blank'><img className="dustbabies" src="https://c.tenor.com/fI61QoSsI1sAAAAj/ufo-search.gif"alt="spaceship"/></a>
           
        </nav>
        
        </>
    )
}

export default Header
