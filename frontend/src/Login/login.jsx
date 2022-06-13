import './login.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import Header from '../Components/Header'

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
                    navigate(`/userpage/${data.user}`)
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
        <div>
        <div>
               <Header/>
           </div>
        <div >
            <div className="loginpage">
           <div>
           <img src={require('../Pictures/Visuals/login button.png')}alt='login button'/>
           </div>

            <form onSubmit={handleSubmit}>
                <div class="imgcontainer">
                    <img width='250' height='250' src="https://thumbs.dreamstime.com/b/funny-astronaut-looks-smartphone-sits-moon-space-vector-illustration-prints-design-135260450.jpg" alt="Avatar" class="avatar"/>
                </div>
                <div className="flex-container">
                    <div className="containerlog">
                        <label for="email"><b>Email</b></label><br/>
                        <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>
                            <br/>
                        <label for="password"><b>Password</b></label><br/> 
                        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/><br/>
                            
                        <button  className='submitbtn' type="submit"> <img src={require('../Pictures/Visuals/login button.png')}/></button><br/>
                        
                    </div>

                </div>
            </form>
            <ToastContainer/>
            </div>
        </div>
        </div>
)
}

export default Login