import {useParams} from 'react-router-dom'
import {useState} from 'react'
import Header from '../Components/Header'
import '../Styles/Spacepage.css'
import Footer from '../Components/Footer'


const SpacePage = (props)=>{
    let {id} = useParams()
    let space = props.space[id]
    let discussion = props.discussion
    console.log(discussion)
    const [newForm, setNewForm] = useState({
        content:''
    })
    
    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.createDiscussion(newForm)
        setNewForm({
            content:''
        })
    }
    const load=()=>{
        return discussion.map((discuss, idx)=>(
            <div className="eachcom" key={idx}>
                A User Commented: {discuss.content}
            </div>

        ))
           
        
    }
   return (
       <div>
           <div>
               <Header/>
           </div>
           <div classname='contained'>
            <h1 className='spacetitle'>{space.title}</h1> 
           
           <img className='spacepic' src={space.hdurl} alt={space.title}/>
           <h1 className='spacedate'>Taken on: {space.date}</h1>
           </div>
          
           <p className='spaceexplanation'>{space.explanation}</p>
           <div className="comments">Official Discussion Board:{load()}</div>
           <section className='forms' >
                    <form onSubmit={handleSubmit} autocomplete="off">
                        <input className='texts' type='text' value={newForm.content} name='content' placeholder='Your thoughts?' onChange={handleChange}/>
                        <input className='submitcmt' type='submit' value='Submit'/>
                    </form>
            </section>
            <Footer/>
       </div>
)
}
export default SpacePage