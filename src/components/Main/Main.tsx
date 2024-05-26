import Button from '../Button/Button';
import './Main.scss';

import bg from '../../images/bg.gif';

const Main = () => {
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
                        <Button message='Скачать под Windows' href='../../../public/Surphoto1.0.0.exe' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
