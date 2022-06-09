import './login.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'


const Login = ()=>{
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        email:'',
        password:''
    })

    const generateError = (err) => toast.error(err,{
        position: 'bottom-right',
    })

    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const{data} = await axios.post('https://space-io-backend.herokuapp.com/login',{
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
                    navigate('/')
                }
            }

        } catch(err){
            console.log(err)
        }
        setNewForm({
            email:'',
            passwords:''
        })
    }




    return(
        <div className="loginpage">
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <div class="imgcontainer">
                    <img src="https://thumbs.dreamstime.com/b/funny-astronaut-looks-smartphone-sits-moon-space-vector-illustration-prints-design-135260450.jpg" alt="Avatar" class="avatar"/>
                </div>
                <div className="flex-container">
                    <div className="container">
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/>
                            
                        <button type="submit">Login</button>
                        <button type="button" class="cancelbtn">Cancel</button>
                    </div>

                </div>
            </form>
            <ToastContainer/>
        </div>
)
}

export default Login