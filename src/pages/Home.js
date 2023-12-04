import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, IconButton } from '@mui/material';
import Resume from '../assets/files/resume.pdf'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jacob Park</h2>
        <div className="prompt">
          <p>A full stack software engineer with a passion for learning and creating.</p>
          <IconButton>
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jacob-y-park/', '_blank')}/>
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon onClick={() => window.open('https://github.com/brakyawitz132', '_blank')}/>
          </IconButton>
        </div>
        <a href={Resume} download="Jacob Park Resume">
            <Button variant='outlined'>
            Download Resume
            </Button>
        </a>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, MaterialUI, TailwindCSS, Pico CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Flask, .NET, SQLite, SQLAlchemy
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C++, TypeScript, R, SAS</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home