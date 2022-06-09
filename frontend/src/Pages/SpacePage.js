import {useParams} from 'react-router-dom'
import {useState} from 'react'


const SpacePage = (props)=>{
    let {id} = useParams()
    let space = props.space[id]
    let discussion = props.discussion
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
   
    return 1 > 0? (
        <div className="showpage">
            <h2>{space.title}</h2>
            <div className="middle-container">
                <div className="description-grid">
                    <h1>{space.date}</h1>
                    <img className="film-image" src={space.image} alt={space.title}/>
                    <div className="film-description">
                        <h3>Description</h3>
                        <p>{space.explanation}</p>
                    </div>
                   
                </div> 
                <h3>Start a discussion!</h3>
                    <div>
                        {discussion.map((discussion,idx)=>(
                            <p key={idx}>{discussion.content}</p>
                        ))}
                    </div>
                    <section className="review-section">
                        <form onSubmit={handleSubmit} autocomplete="off">
                            <input type='text' value={newForm.content} name='content' placeholder='Your thoughts?' onChange={handleChange}/>
                            <input id="reviewsubmit" type='submit' value='Submit'/>
                        </form>
                    </section>
            </div>

        </div>
    ): <h1>Can't Load...</h1>
}
export default SpacePage