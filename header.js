import React, { useState,useContext } from 'react';
import './comp.css';
import pfp from '../assets/userpfp.png';
import plus from '../assets/newplus.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './user_context';

function Header({ search, setSearch }) {
  const { username, setRedirectPath } = useContext(UserContext);
  const navigate = useNavigate();
  const [tempSearch, setTempSearch] = useState("");

  const handleSearchChange = (e) => {
    setTempSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearch(tempSearch);
    }
  };

  const handleClick = () => {
    if (!username) {
      setRedirectPath('/post-blog');
      navigate('/signup');
      return;
    }
    
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="sth" alt="Website Logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </div>
        <div className="navbar-search">
          <input
            placeholder="Search..."
            name="search"
            value={tempSearch}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress} // Add key press handler
          />
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
