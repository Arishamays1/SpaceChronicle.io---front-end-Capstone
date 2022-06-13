// import "./styles.css";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Header from "./Header";
import '../Styles/List.css'


export default function SpaceList() {

  const [space, setspace] = useState(null);

  const URL = "https://api.nasa.gov/planetary/apod?api_key=uv3clIRauk82izX7ubUIKtRboF7tiup9AXZSt3Ah&count=50";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setspace(data);
    };
    getData();
  }, []);

  const loaded = () => {
    return space.map((space, idx) => (
      <div className="container" key={idx}>
        <div className='cont-list'>
          <div className="card1">
            <div className="card_title">
              <h1>{space.title}</h1>
              </div>
            <div className="card_image">
              <Link to={`/${idx}`}>
                <img width='180' height='180' src={space.hdurl} alt={space.name} />
              </Link>
           <h3 className="explanation">{`${space.explanation.substring(0, 100)}`}...Click <span className="direct"> <Link to={`/${idx}`}>here</Link></span> to read more!</h3>
        </div>
        </div>
        
      </div>
      </div>
    ));
  };
  
  
  return space ?(
  <>
  <Header/>
   {loaded()}
  </>):<div>
    <img width='250' height='250' src='https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-18.jpg' alt='loading' /> <br/>
  <h1>Loading Top Secret Files...</h1>
  </div>
}

