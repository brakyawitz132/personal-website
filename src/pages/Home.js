import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, IconButton } from '@mui/material';
import Resume from '../assets/files/resume.pdf'

function Home() {
  return (
    <div className="md:flex-row md:justify-between items-center p-8">
      <div className="text-center mb-20 mt-20">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Hello, World!</h2>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> My Name is Jacob Park</h2>
        <div className="mb-4">
            <p className="mt-20 text-lg leading-8 text-gray-600">A full stack software engineer with a passion for learning and creating.</p>
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
      <div className="text-center justify-center my-20">
        <h1 className='text-3xl font-bold mb-4 justify-center'> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2 className="font-bold"> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, MaterialUI, TailwindCSS, Pico CSS
            </span>
          </li>
          <li className="item">
            <h2 className="font-bold">Back-End</h2>
            <span>
              Flask, .NET, SQLite, SQLAlchemy
            </span>
          </li>
          <li className="item">
            <h2 className="font-bold">Languages</h2>
            <span>JavaScript, Python, C++, R, SAS</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home