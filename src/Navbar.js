import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [displayNavList, setDisplayNavList] = useState(false);

  const navListClass = classNames('navbar-list', {
    active: displayNavList,
  });

  const toggleNavList = () => setDisplayNavList(prev => !prev);

  const hamburgerIcon = (
    <div className='container--icon'>
      <FontAwesomeIcon className='faBars'
        icon={faBars}
        onClick={toggleNavList}
      />
    </div>
  );

  return (
    <header>
      <ul className="navbar">
        {hamburgerIcon}
        <div className={navListClass}>
          <li className='navbar-link' onClick={toggleNavList}>Home</li>
          <li className='navbar-link' onClick={toggleNavList}>About</li>
          <li className='navbar-link' onClick={toggleNavList}>Contact</li>
        </div>
      </ul>
    </header>
  );
}