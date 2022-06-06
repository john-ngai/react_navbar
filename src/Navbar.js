import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const hamburgerIcon = (
    <FontAwesomeIcon className='faBars'
      icon={faBars}
    />
  );

  return (
    <header>
      <ul className="container--navbar">
        <div className='navbar-links'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        {hamburgerIcon}
      </ul>
    </header>
  );
}