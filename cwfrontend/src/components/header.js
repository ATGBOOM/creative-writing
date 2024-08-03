import React, { useContext } from 'react';
import './comp.css';
import pfp from '../assets/userpfp.png';
import plus from '../assets/newplus.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './user_context';

function Header() {
  const { username, setRedirectPath } = useContext(UserContext);
  const navigate = useNavigate();
 

  const handleClick = () => {

      navigate('/post-blog');
    
  };


  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="sth" alt="Website Logo" />
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navbar-icons">
          <div onClick={handleClick} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
            <img src={plus} alt="Plus" />
          </div>
          <div>
            <img src={pfp} alt="Login" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
