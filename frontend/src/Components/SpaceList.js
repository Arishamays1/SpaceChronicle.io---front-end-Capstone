// import "./styles.css";
import { useEffect, useState } from "react";

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
        <img src={space.hdurl} alt={space.name} />
        <h3>{space.explanation}</h3>
      </div>
    ));
  };

  return space ? loaded() : <h1>Loading....</h1>;
}

