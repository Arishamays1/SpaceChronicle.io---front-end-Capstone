import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Header from '../Components/Header'
import "../Styles/User.css"


const UserPage = (props) =>{
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id ===id)
    // let pics = props.editUser
    let navigate= useNavigate()
    // console.log(pics)
    
    const[editForm, setEditForm] = useState(user)

    const handleChange = event =>{
        setEditForm({...editForm, [event.target.name]:event.target.value})
    }

    const handleSubmit = event =>{
        let user = users.find(u => u._id ===id)
        event.preventDefault()
        props.editUser(editForm, id)
        navigate(`/userpage/${user._id}`)
     
    }
    return(
        <>
       <Header/>
        <div className="profile">
            <div>
                <img  className="userpic" src={user.profilepic} alt={user.firstName}/>
            </div>
            <form className='picform' onSubmit={handleSubmit} autocomplete="off">
                        <input className='inputsub' type='text' value={editForm.profilepic} name='profilepic' onChange={handleChange}/><br/>
                        <input className='buttonsub' type='submit' value='Edit Profile Pic'/>
             </form>
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