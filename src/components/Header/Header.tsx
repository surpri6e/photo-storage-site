import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='_Container'>
                <div className='header_body'>
                    <div className='header_left'>SP</div>
                    <div className='header_right'>
                        <nav className='nav'>
                            <ul>
                                <li className='nav_elem'>
                                    <a href='' className='nav_link'></a>
                                </li>
                                <li className='nav_elem'>
                                    <a href='' className='nav_link'></a>
                                </li>
                                <li className='nav_elem'>
                                    <a href='' className='nav_link'></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
