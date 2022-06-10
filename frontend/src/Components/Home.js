import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/Home.css'
import Header from './Header'

const Home= ()=>{
    return(
        
        <div>
            <div >
            <img className='logo' src={require('../Pictures/Visuals/Spacchronlogo.png')}></img>
            </div>
            <div className='contents'>
            <div className="triangles">
                <div>
                <img className='triangle1' src={require('../Pictures/Visuals/Blue Triangle.png')}/>
                <img className='triangle2' src={require('../Pictures/Visuals/Red Triangle.png')}/>
                <img className='triangle3' src={require('../Pictures/Visuals/Orange Triangle.png')}/>
                <img className='triangle4' src={require('../Pictures/Visuals/Purple Triangle.png')}/>
                <img className='triangle5' src={require('../Pictures/Visuals/Yellow Triangle.png')}/>
                <img className='triangle6' src={require('../Pictures/Visuals/Blue Triangle.png')}/>
                <img className='triangle7' src={require('../Pictures/Visuals/Purple Triangle.png')}/>
                <img className='triangle8' src={require('../Pictures/Visuals/Red Triangle.png')}/>
                <img className='triangle9' src={require('../Pictures/Visuals/Orange Triangle.png')}/>
                </div>
                
                <div className='spaceship' >
                 <img src={require('../Pictures/Visuals/PngItem_490590 1.png')}/>
                </div>
                
        
                <div className='auth'>
                    <Link to='/login'>
                    <img id='login' src={require('../Pictures/Visuals/login button.png')}/>
                    </Link>
                    <Link to='/register'>
                    <img id='signup' src={require('../Pictures/Visuals/sign up.png')}/>
                    </Link>
                </div>
            </div>
            </div>
        </div>
     
    )
    
}
export default Home;