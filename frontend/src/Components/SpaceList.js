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
      <div key={idx}>
        <h1>{space.title}</h1>
        <Link to={`/${idx}`}>
        <img width='250' height='250' src={space.hdurl} alt={space.name} />
        </Link>
        <h3>{space.explanation}</h3>
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

