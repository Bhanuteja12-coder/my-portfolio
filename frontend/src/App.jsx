import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/profile/")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>

      {profile.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
          <p>{item.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default App;