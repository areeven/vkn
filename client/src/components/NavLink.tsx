import React from 'react';
import { Link } from 'react-router-dom';

const NavLink: React.FC = () => {
  const [clickedHome, setClickedHome] = React.useState<boolean>(false);
  const [clickedAbout, setClickedAbout] = React.useState<boolean>(false);
  const [clickedLogin, setClickedLogin] = React.useState<boolean>(false);

  const clickedLinkHome = () => {
    setClickedHome(true)
    setClickedAbout(false);
    setClickedLogin(false);
  }

  const clickedLinkAbout = () => {
    setClickedAbout(true)
    setClickedHome(false);
    setClickedLogin(false);
  }

  const clickedLinkLogin = () => {
    setClickedLogin(true);
    setClickedAbout(false);
    setClickedHome(false);
  }

  return (
    <>
      <Link to="/" onClick={clickedLinkHome} className={clickedHome === false ? 'nav-list' : 'nav-list-clicked'}>
        Home
      </Link>
      <Link to="/about" onClick={clickedLinkAbout} className={clickedAbout === false ? 'nav-list' : 'nav-list-clicked'}>
        About
      </Link>
      <Link to="/login" onClick={clickedLinkLogin} className={clickedLogin === false ? 'nav-list' : 'nav-list-clicked'}>
        Login
      </Link>
    </>
  )
}

export default NavLink;