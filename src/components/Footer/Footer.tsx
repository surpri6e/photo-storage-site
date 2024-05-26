import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='_Container'>
                <nav className='footer_nav'>
                    <ul className='footer_list'>
                        <li className='footer_elem'>
                            <a href='../../../public/Surphoto1.0.0.exe' className='footer_link' target='_blank'>
                                Скачать
                            </a>
                        </li>
                        <li className='footer_elem'>
                            <a href='../../../public/policy.docx' className='footer_link' target='_blank'>
                                Политика конфедициальности
                            </a>
                        </li>
                        <li className='footer_elem'>
                            <a href='https://github.com/surpri6e/photo-storage-site' target='_blank' className='footer_link'>
                                Исходный код
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
