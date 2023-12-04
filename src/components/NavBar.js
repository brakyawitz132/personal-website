import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'

function NavBar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className='bg-gray-800 text-white p-4'>
            <div class="w-full h-100 flex items-center justify-end">
                <button className='lg:hidden focus:outline-none'
                onClick={() => setExpandNavbar((prev) => !prev)}>
                    <ReorderIcon className='w-6 h-6 fill-current'/> 
                </button>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-300">
                    Home
                </Link>
                <Link to="/projects" className="hover:text-gray-300">
                    Projects
                </Link>
                <Link to="/experience" className="hover:text-gray-300">
                    Experience
                </Link>
            </div>
        </div>
    )
}

export default NavBar