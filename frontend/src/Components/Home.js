import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/Home.css'

const Home= ()=>{
    return(
        <div>
            <img src={require('../Pictures/Visuals/Blue Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Red Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Orange Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Purple Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Yellow Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Blue Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Purple Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Red Triangle.png')}/>
            <img src={require('../Pictures/Visuals/Orange Triangle.png')}/>
            <div>
                
                <img src={require('../Pictures/Visuals/PngItem_490590 1.png')}/>
            </div>
        
            <div>
                <img src={require('../Pictures/Visuals/login button.png')}/>
                <img src={require('../Pictures/Visuals/sign up.png')}/>
            </div>
        
        </div>
     
    )
    
}
export default Home;