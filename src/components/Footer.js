import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className="w-full h-200 bg-gray-800 flex justify-center items-center flex-col pt-10 mt-200">
        <div className="text-white m-2 text-4xl cursor-pointer"> 
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jacob-y-park/', '_blank')}/>
            <InstagramIcon onClick={() => window.open('https://www.instagram.com/jacobypark17/', '_blank')}/>
            <FacebookIcon onClick={() => window.open('https://www.facebook.com/jacob.park.75/', '_blank')}/>
        </div>
        <p className="text-white"> &copy; 2023 Jacob Park</p>
    </div>
  )
}

export default Footer