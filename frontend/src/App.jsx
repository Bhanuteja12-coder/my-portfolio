import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [profile, setProfile] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/profile/")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
        .get("http://127.0.0.1:8000/api/projects/")
        .then((response) => {
          setProjects(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">My Portfolio</h1>

      {profile.map((item) => (
        <div className='profile-section' key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
          <p>{item.bio}</p>
        <div className='links'> 
            <a href={item.github} target='_blank'>github</a>
            <br/>
            <a href={item.linkedin} target='_blank'>linkedin</a>
            </div>
        </div>
      ))}

      <hr/>

      <h2 className='projects-title'>Projects</h2>
      <div className='projects-grid'>
        {projects.map((project) => (
          <div className='projects-card' key={project.id}>
            <h3>{project.name}</h3>
            <i>{project.teck_stack}</i>
            <p>{project.bio}</p>
            <div className='links'> 
            <a href={project.github_link} target='_blank'>github</a>
            <br/>
            <a href={project.demo_link} target='_blank'>demo</a>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
}

export default App;