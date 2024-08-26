import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  const Menu = () => {
    return (
    <> <li className='p__opensans'><a href="#home">home</a></li>
    <li className='p__opensans'><a href="#about">about</a></li>
    <li className='p__opensans'><a href="#menu">menu</a></li>
    <li className='p__opensans'><a href="#awards">awards</a></li>
    <li className='p__opensans'><a href="#contacts">contacts</a></li></>
    )
  }
return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
     <Menu />
    </ul>
    <div className='app__navbar-login'>
    <a href="#login" className='p__opensans'>login / registration</a>
      <div />
    <a href="/" className='p__opensans'>book table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true) }/>
    
    {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/> 
        <ul className='app__navbar-smallscreen_links'>
          <Menu />
        </ul>
          </div>
        )} 
  
    </div>

  </nav>
)
}

export default Navbar;
