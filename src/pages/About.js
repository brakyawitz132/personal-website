import React from 'react'

export default function About() {
  return (
    <div className='md:flex-row md:justify-between items-center p-10'>
        <div id="identity" className="mx-8 p-28 text-4xl tracking-tight text-gray-900 md:text-6xl">
            <h2>About Jacob Park</h2>
            <p className="mt-20 text-lg leading-8 text-gray-600">
                I remember receiving my first computer around 4th or 5th grade of elementary school and learning how to use it to my liking (I wanted to play games). That's where it all started for me. 
                Since then, I can't remember any time I wasn't involved with the Internet. I played games, studied for school, and turned in work for school using the Internet. Now I want future generations to 
                be able to experience the magic of the Internet as I first did.
            </p>
            <p className="mt-20 text-lg leading-8 text-gray-600">
                I've had the pleasure of learning the basics of web application development through the Flatiron School of Software Engineering and am excited to start my career as a software engineer. I plan on 
                continuing to update this website as I continue building both my skill set and portfolio.
            </p>
            <p className="mt-20 text-lg leading-8 text-gray-600">
                In my free time, I like connecting with friends through online games, rock climbing, honing my frisbee skills, hitting the gym, and capturing precious memories through my camera lens. 
                And if you can't find me doing any of these, I'm most likely atnthe beach or in a karaoke room, singing and dancing to my heart's content.
            </p>
        </div>
    </div>
  )
}
