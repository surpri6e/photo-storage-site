import './Footer.scss';

const Footer = () => {
    const onButtonClick = (name: string) => {
        // using Java Script method to get PDF file
        fetch(`../../../public/${name}`, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="preferred-filename.file-extension"',
            },
        }).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                const alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = name;
                alink.click();
            });
        });
    };

    return (
        <footer className='footer'>
            <div className='_Container'>
                <nav className='footer_nav'>
                    <ul className='footer_list'>
                        <li className='footer_elem'>
                            <a onClick={() => onButtonClick('Surphoto1.0.0.exe')} className='footer_link'>
                                Скачать
                            </a>
                        </li>
                        <li className='footer_elem'>
                            <a onClick={() => onButtonClick('policy.docx')} className='footer_link'>
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
