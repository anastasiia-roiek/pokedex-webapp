import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      {/* <h1 className="header_title">
        Pokedex
      </h1> */}
      <img
        src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
        alt="Pokedex"
        className="header_logo"
      />
    </div>
  );
};

export default Header;
