import Button from '../Button/Button';
import './Main.scss';

import bg from '../../images/bg.gif';

const Main = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../../../public/Surphoto1.0.0.exe').then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                const alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Surphoto1.0.0.exe';
                alink.click();
            });
        });
    };

    return (
        <div className='main' id='1'>
            <div className='_Container'>
                <div className='main_body _Ibg'>
                    <img src={bg} alt='Фоновое изображение' className='main_background' />
                    <div className='main_info'>
                        <h1 className='main_title'>Бесплатное файловое хранилище</h1>
                        <p className='main_text'>
                            Файловое хранилище предназначеное для сохранности ценных фотографий, воспоминаний и теплых чувств. Работает абсолютно быстро и
                            безопасно!
                        </p>
                        <Button message='Скачать под Windows' onClick={onButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
