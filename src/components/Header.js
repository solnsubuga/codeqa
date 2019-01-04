import React from 'react';
import ProfileImage from '../images/profile.png';

const Header = () => (
  <nav className="header">
    <div className="text-center">
      <img
        src={ProfileImage}
        className="profile-image rounded-circle img-thumbnail"
        alt=""
      />
      <h1 className="app-title">Code Q&A</h1>
    </div>
  </nav>
);

export default Header;
