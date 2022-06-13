import '../Styles/footer.css'
import { Link } from 'react-router-dom'
const Footer = () =>{
    return(
        <div>
            <div> 
            <a href="https://github.com/Arishamays1/SpaceChronicle.io-Capstone" target='_blank'>
                <img className="oranges" src={require("../Pictures/Visuals/orange planet.png")} width="120px" height="100px" alt="jupiter"/> </a>
            </div>
            <div className="footer">
                
            </div>   
        </div>
    )
}

export default Footer