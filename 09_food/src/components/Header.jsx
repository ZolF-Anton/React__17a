import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='teal lighten-1'>
            <div className='nav-wrapper'>
                <a href='https://anton-zolf.su' className='brand-logo'>
                    Pirate Bay Le Guide Michelin
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/'>My Page</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
