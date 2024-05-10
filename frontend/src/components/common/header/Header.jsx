import './Header.css'
import user from '../../../assets/profile/dummyuser.png'
import { MdOutlineLogout } from "react-icons/md";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()

  const [ showLogout , setShowLogout ] = useState(false)

  const handleUserOperation = () => {
    setShowLogout(!showLogout)
  }

  const handleLogout = () => {
    navigate("/planner")
  }

  const userRole = sessionStorage.getItem('userRole')
  return (
   <div className="headerwrapper">
      <div className="header">
        <div className="main-logo">
          <span> Planner</span>
        </div>

        <div className='user-profile'>
          <div className='user-image'>
            <img src={user} alt="user" />
          </div>
          <div className='username'  onClick={handleUserOperation}>
              <div className='name'>Siddhant Warang</div>
              <div className='role'>{userRole}</div>
          </div>
          <div>
            <div className='logout'>
              <span onClick={handleLogout}>
              {
                showLogout &&  <MdOutlineLogout/>
              }
              </span>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Header