import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div class="w-full h-200 bg-blue-900 flex justify-center items-center flex-col pt-10 mt-200">
        <div class="text-white m-2 text-4xl cursor-pointer"> 
            <LinkedInIcon />
            <InstagramIcon />
            <FacebookIcon />
        </div>
        <p class="text-white"> &copy; 2023 Jacob Park</p>
    </div>
  )
}

export default Footer