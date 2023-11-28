import React from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@material-ui/icons'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='toggle_button'>
            <button> <ReorderIcon /> </button>
        </div>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
        </div>
    </div>
  )
}

export default NavBar