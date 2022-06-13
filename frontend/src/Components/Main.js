import {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Login/login';
import SpaceList from './SpaceList';
import Register from '../Register/Register';
import Success from '../Register/Success';
import SpacePage from '../Pages/SpacePage';
import UserPage from '../Pages/User';
import Home from './Home';
import Dedicate from '../Pages/Dedicate';


function Main(props){
    const [space, setSpace] = useState(null);
    const [user, setUser]= useState(null)
    const [discussion,setDiscussion] = useState(null)



    const URL = "https://api.nasa.gov/planetary/apod?api_key=uv3clIRauk82izX7ubUIKtRboF7tiup9AXZSt3Ah&count=10";

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setSpace(data);
            console.log(data);
        };
        getData();
    }, []);

    const editUser= async(user, id)=>{
        await fetch('https://space-io-backend.herokuapp.com/userpage/'+ id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
       
    }

    const discussionData = () =>{
        fetch('https://space-io-backend.herokuapp.com/discussion')
        .then(response => response.json())
        .then(result => setDiscussion(result))
    }
 
     const createDiscussion = async(discussion) =>{
         await fetch ('https://space-io-backend.herokuapp.com/discussion',{
             method:'post',
             headers:{
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(discussion)
         })
         discussionData()
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

    useEffect(()=> discussionData(),[])
   

    return(
        <main>
            <Routes>
                < Route path= '/' element={<Home/>}/>
                < Route path ='/spacey' element={< SpaceList space ={space}/>}/>
                < Route exact path= '/:id' element={< SpacePage space={space} discussion={discussion} createDiscussion={createDiscussion}/>}/>
                < Route exact path='/login' element={< Login />}/>
                < Route exact path ='/userpage/:id' element={<UserPage user={user} editUser={editUser}/>}/>
                < Route exact path='/register' element={<Register/>}/>
                < Route exact path='/success' element={<Success/>}/>
                < Route path='/dad' element={<Dedicate/>}/>
            </Routes>
        </main>

    )
}

export default Main