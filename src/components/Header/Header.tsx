import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='_Container'>
                <div className='header_body'>
                    <nav className='nav'>
                        <ul className='nav_list'>
                            <li className='nav_elem'>
                                <a href='' className='nav_link'>
                                    Преимущества
                                </a>
                            </li>

                            <li className='nav_elem'>
                                <a href='' className='nav_link'>
                                    Скачать
                                </a>
                            </li>

                            <li className='nav_elem'>
                                <a href='' className='nav_link'>
                                    Поддержка
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
