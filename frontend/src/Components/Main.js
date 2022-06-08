import {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Login/login';
import SpaceList from './SpaceList';
import Register from '../Register/Register';
import Success from '../Register/Success';

function Main(props){
    const [space, setSpace] = useState(null);
    



    const URL = "https://api.nasa.gov/planetary/apod?api_key=uv3clIRauk82izX7ubUIKtRboF7tiup9AXZSt3Ah&count=50";

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setSpace(data);
            console.log(data);
        };
        getData();
    }, []);





    return(
        <main>
            <Routes>
                < Route path ='/' element={<SpaceList space ={space}/>}/>
                < Route exact path='/login' element={< Login />}/>
                < Route exact path='/register' element={<Register/>}/>
                < Route path='/success' element={<Success/>}/>
            </Routes>
        </main>

    )
}

export default Main