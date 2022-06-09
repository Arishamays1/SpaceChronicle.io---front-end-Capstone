import {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Login/login';
import SpaceList from './SpaceList';
import Register from '../Register/Register';
import Success from '../Register/Success';
import SpacePage from '../Pages/SpacePage';
import UserPage from '../Pages/User';

function Main(props){
    const [space, setSpace] = useState(null);
    const [user, setUser]= useState(null)
    const [discussion,setDiscussion] = useState({
        discussion:[{discussion:'Wow I really loved this film a lot!'}]
    })



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
    const discussionData = () =>{
        fetch('https://space-io-backend.herokuapp.com/discussion')
        .then(response => response.json())
        .then(result => setDiscussion(result))
    }
 
     const createDiscussion = async(review) =>{
         await fetch ('https://space-io-backend.herokuapp.com/discussion',{
             method:'post',
             headers:{
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(discussion)
         })
     }
 
     const deleteDiscussion = async id =>{
         await fetch('https://space-io-backend.herokuapp.com/discussion' + id,{
             method:'delete'
         })
         discussionData()
     }
     useEffect(() => {
        const getUser = async () => {
            const response = await fetch('https://space-io-backend.herokuapp.com/users');
            const data = await response.json();
            setUser(data);
        };
        getUser();
    }, []);



    return(
        <main>
            <Routes>
                < Route path ='/' element={< SpaceList space ={space}/>}/>
                < Route path= '/:id' element={< SpacePage space={space} discussion={discussion} createDiscussion={createDiscussion}/>}/>
                < Route exact path='/login' element={< Login />}/>
                < Route path ='/userpage/:id' element={<UserPage user={user}/>}/>
                < Route exact path='/register' element={<Register/>}/>
                < Route path='/success' element={<Success/>}/>
            </Routes>
        </main>

    )
}

export default Main