import {useParams} from 'react-router-dom'
import {useState} from 'react'
import Header from '../Components/Header'
import "../Styles/User.css"
const UserPage = (props) =>{
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id ===id)

    return(
        <>
       <Header/>
        <div className="profile">
            <div className="userpic">
                <img src={user.profilepic} alt={user.firstName}/>
            </div>

            <div className="user-title">
                <h1>Welcome back, <u>{user.username}</u></h1>
                
            </div>

            <div className="bio">
                <h3>{user.firstName} {user.lastName}</h3>
                <hr/>
                <h3>About Me</h3>
                <p>{user.bio}</p>
                <hr/>
            </div>
            
 
            <div className="favorites">
                <h3>Read all your favorites here: </h3>
                <h4 className='userfave'>{user.favorites}</h4>
            </div>
        </div>
        </>
   
    )
}

export default UserPage