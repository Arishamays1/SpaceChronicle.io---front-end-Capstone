import {useParams} from 'react-router-dom'
import {useState} from 'react'


const UserPage = (props) =>{
    let {id} = useParams()
    let user = props.user[id]

    return(
        <>
        <div className="profile">
            <div className="userpic">
                <img src={user.profilepic} alt={user.firstName}/>
            </div>

            <div className="user-title">
                <h1>hi, <u>{user.username}</u></h1>
                <h3>hi</h3>
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
                <h5>{user.favorites}</h5>
            </div>

            <div >
                <h3>Discussion:{user.discussion}</h3>
            </div>

        </div>
        </>
   
    )
}

export default UserPage