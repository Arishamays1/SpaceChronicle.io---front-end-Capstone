import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Header from '../Components/Header'

const Register = (props) =>{
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:''
    })

    const generateError = (err) => toast.error(err,{
        position: 'bottom-right',
    })
   



    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const{data} = await axios.post('https://space-io-backend.herokuapp.com/register',{
                ...newForm,
            },
            {
                withCredentials:true,
            }
            )
            
            if(data){
                if(data.errors){
                    const {email,password} = data.errors
                    if(email) generateError(email)
                    else if(password) generateError(password)
                }else{
                    navigate('/success')
                }
            }

        } catch(err){
            console.log(err)
        }
        setNewForm({
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            passwords:''
        })
    }


    return(
        <>
            <div className="signup">
                <div>
                
                </div>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="grid-container">
                        <div className="sign-container">
                            <div className="sign">
                                <h1>Sign Up</h1>
                                <p>Create an Account!</p>
                            </div>
                            <hr/>
                            <label for="firstName"><b>First Name</b></label>
                            <input id="signing" type="text" value={newForm.firstName} placeholder="Nasa requires your first name." name="firstName" required onChange={handleChange} />
                            <br/>
                            <label for ="lastName"><b>Last Name</b></label>
                            <input id="signing" type="text" value={newForm.lastName} placeholder="Nasa requires your last name." name="lastName" required onChange={handleChange}/>
                            <br/>
                            <label for ="username"><b>Username</b></label>
                            <input id="signing" type="text" value={newForm.username} placeholder="Nasa requires your username." name="username" required onChange={handleChange}/>
                            <br/>
                            <label for="email"><b>Email</b></label>
                            <input id="signing" type="text" value={newForm.email} placeholder="Nasa requires your Email." name="email" required onChange={handleChange}/>
                            <br/>
                            <label for ="password"><b>Password</b></label>
                            <input id="signing" type="password" value={newForm.password} placeholder="Nasa requires your Password." name="password" required onChange={handleChange}/>
                            <input type="submit" value="Sign Up"/>
                        

                        </div>
                    </div>
                </form>
                <ToastContainer/>
            </div>
        </>
    )
}

export default Register