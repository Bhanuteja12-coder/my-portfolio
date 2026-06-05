import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [profile, setProfile] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState({
  name: "",
  email: "",
  message: ""
});

  const handleChange = (e) => {
  setContact({
    ...contact,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://127.0.0.1:8000/api/contact/",
      contact
    );

    alert("Message sent successfully");

    setContact({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

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

      axios
        .get("http://127.0.0.1:8000/api/skills/")
        .then((response) => {
          setSkills(response.data);
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
          <div className='profile-footer'>
            <a href={item.github} target='_blank'>github</a>
            <a href={item.linkedin} target='_blank'>linkedin</a>
          </div>
        </div>
      ))}

      <hr className='section-divider'/>

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

      <hr/>

      <h2 className='skills-title'>Skills</h2>
      <div className='skills-grid'>
        <div className='skills-card'>
          <h3>Languages</h3>
          <ul>
            {skills
              .filter((skill) => skill.category === "Language")
              .map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Frameworks</h3>
          <ul>
            {skills
              .filter((skill) => skill.category === "Framework")
              .map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Tools</h3>
          <ul>
            {skills
              .filter((skill) => skill.category === "Tool")
              .map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Databases</h3>
          <ul>
            {skills
              .filter((skill) => skill.category === "Database")
              .map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Platforms</h3>
          <ul>
            {skills
              .filter((skill) => skill.category === "Platform")
              .map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Soft skills</h3>
          <ul>
            {skills
              .filter((skill) => skill.category === "Sokt skill")
              .map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
          </ul>
        </div>
      </div>

      <form className='form-card' onSubmit={handleSubmit}>

      <input
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <textarea
        name="message"
        value={contact.message}
        onChange={handleChange}
        placeholder="Message"
      />

      <button type="submit">
        Send
      </button>

      </form>
  </div>
  );
}

export default App;