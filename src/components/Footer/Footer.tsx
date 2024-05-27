import './Footer.scss';

const Footer = () => {
    const onButtonClick = () => {
        const pdfUrl = 'policy.docx';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'policy.docx'; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className='footer'>
            <div className='_Container'>
                <nav className='footer_nav'>
                    <ul className='footer_list'>
                        <li className='footer_elem'>
                            <a onClick={() => onButtonClick()} className='footer_link'>
                                Скачать
                            </a>
                        </li>
                        <li className='footer_elem'>
                            <a onClick={() => onButtonClick()} className='footer_link'>
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
